Process Isolation

Older or alternative names: process jailing, chrooting, virtualisation, etc

isolation of processes + isolated environment (isolation of "view" 👁️ : how it sees, what is sees)

access and mapping

* Key tools & techniques
   * Namespace
   * Chroot

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
* handling the fork / clone (parent/child processes)
   * wait in the parent process
* finish / syscall handles
* Unpriviledge user
* filesystem
* layers (of filesystem)
* IO: file id s
