# Namespaces: How to write a ~Docker~ Cloud Platform

Process Isolation

Older or alternative names: process jailing, chrooting, virtualisation, etc

isolation of processes + isolated environment (isolation of "view" 👁️ : how it sees, what is sees)

access and mapping

* Key tools & techniques
   * Namespace
   * Chroot

#### My experience:
I wrote[^credits] a process isolator (jailer + more), under the supervision of Bertrand Nouvell[^credits] (founder of Wide IO Ltd
<img src="https://media.licdn.com/dms/image/C4E0BAQGxFRp3BT3AsQ/company-logo_100_100/0/1631342106938?e=1723680000&v=beta&t=6Sj2oxCP0HJsDBx3yhyFPmDzd2dqJNFmc7pIomOgN60" alt="Wide IO Ltd Logo" width="20" height="20">
) in late 2014.
Together with a job scheduler[^job-scheduler] that drove these isolated processes, file system and distributed inter-process communication.

* These, together, formed the core of the Wide IO platform (Wide IO Ltd). There were some other components previously written by Bertrand.
* These were implemented in Python, with some C.
* The file system was a multiple-layer file system.
* A distributed file system (I wrote) provided unified access for distributed resources for Wide IO's cloud.


#### Aspects to cover: mappings: (names only)
* pid
* users
* root: `/`
* network
* mount

#### Gist:
```cpp
// some #include s

extern "C" int run_in_new_namespace(void*) {
    std::cout << "PID in new namespace: " << getpid() << std::endl;  // Will be 1!
    std::cout << "User ID in new namespace: " << getuid() << std::endl;
    system("/bin/sh");  // Start a shell!
}

int main() {
    auto nsflags = CLONE_NEWUSER | CLONE_NEWPID | SIGCHLD;
    void *alloced, *stack_space_ptr = ( alloced = malloc(4096)) + 4096;  // Stack grows downward

    pid_t pid = clone(run_in_new_namespace, stack_space_ptr, nsflags, NULL);

    //todo: also set up file descriptors, user maps, etc
    if (pid == -1) { free(alloced); perror("clone"); return 1; }

    // Wait for the child process to "finish"
    auto w = waitpid(pid, NULL, 0);

    if (w == -1) { free(alloced); perror("waitpid"); return 1; }
    free(alloced); return 0;
}
```

### Namespace

A bunch of
Kernel features.

Interesting history ...

Timeline of milestones:
* Linux 2.4.19 (2002): Mount Namespaces (mnt): separate filesystems for each process.
* Linux 2.6.19 (November 2006): UTS: Separate host & domain for each process.
* Linux 2.6.19 (November 2006): IPC resources (separate / isoolate)
* PID Namespaces: Linux 2.6.24 (2008)
* Network namespaces: Linux 2.6.29 (2009)
* LXC: Linux 2.6.32 (late 2009)
   * LXD: based on LXC
* Mature by kernel version 3.8
* User Namespaces: Linux 3.8 (2013)
* Linux 4.6 (2016): Cgroup Namespaces
* 5.5
* Docker: 2013

* LXC & LXD: container hypervisor providing a more immersive VM-like experience


#### The majestic `clone`:
(i.e. how to love Linux `namespaces` )

* Is `clone()` is part of the "namespace API"
* Run `man clone`

Dive:
```C
  struct clone_args {
       u64 flags;        /* Flags bit mask */
       u64 pidfd;        /* Where to store PID file descriptor (pid_t *) */
       u64 child_tid;    /* Where to store child TID, in child's memory (pid_t *) */
       u64 parent_tid;   /* Where to store child TID, in parent's memory (int *) */
       u64 exit_signal;  /* Signal to deliver to parent on child termination */
       u64 stack;        /* Pointer to lowest byte of stack */
       u64 stack_size;   /* Size of stack */
       u64 tls;          /* Location of new TLS */
       u64 set_tid;      /* Pointer to a pid_t array (since Linux 5.5) */
       u64 set_tid_size; /* Number of elements in set_tid (since Linux 5.5) */
       u64 cgroup;       /* File descriptor for target cgroup of child (since Linux 5.7) */
  };
```

* See Also:
   * run `man clone`

* Alternatives:
* cgroups
   * old times: chroot
   * old times: jailing

#### On `chroot`
* `chroot` is simply another level of `cd`
* Can be seen like `cd`, changes `/`, instead of `.` !
* Chroot was part of Unix: As early as Version 7 Unix (1979)

### Aspects to cover: mappings: (more details)
* pid
* users
   * usergroups
* root: uses `chroot`
* network
   * iptables
* mount
   * bind versus mount

Aspects to cover: others:
* exec (current executable)
* handling the `fork()` / `clone()` (parent/child processes)
   * wait in the parent process using `waitpid()`
* Finish / syscall handles
* Unprivileged user
* filesystem
* layers (of filesystem)
* IO: File Descriptors ( stdout, stderr, stdin )

#### Appendices
This is a simplified approach based on my experience in the context of
Wide IO Ltd: [wide.io](wide.io)[^credits] -- ([Linkedin](https://www.linkedin.com/company/wide-io-ltd/))

![Wide IO Ltd Log](https://media.licdn.com/dms/image/C4E0BAQGxFRp3BT3AsQ/company-logo_100_100/0/1631342106938?e=1723680000&v=beta&t=6Sj2oxCP0HJsDBx3yhyFPmDzd2dqJNFmc7pIomOgN60)



[^credits]: All the above components were written from scratch by me under the leadership of, and the architecture & design of, [Bertrand Nouvel](https://www.linkedin.com/in/bertrand-nouvel-68a8ba3/)
     (Founder & CTO of
     [wide.io](Wide.IO) Ltd). I credit it all to him. Although I wrote all of these from `man` pages and online resources, he mentored and guided me closely, and had a clear idea of details. I brought his ideas into reality, which enabled him to focus on some other technical etc aspects (instead of writing them by himself). It was my first proper industry job in the UK. I am grateful to Bertrand for mentoring and leading this, and giving me the opportunity to do these technical endeavours and achievements.
     ![Wide IO Ltd Log](https://media.licdn.com/dms/image/C4E0BAQGxFRp3BT3AsQ/company-logo_100_100/0/1631342106938?e=1723680000&v=beta&t=6Sj2oxCP0HJsDBx3yhyFPmDzd2dqJNFmc7pIomOgN60)

[^job-scheduler]: The job scheduler drove these isolated processes, had a manager for a pre-defined number of workers (Compute slots), complete with synchronisation and state management, robust & stress-tested. Its complex nature required using finite state machines, sequence diagrams, and me developing some in-house "distributed"-debugging and testing tools.
