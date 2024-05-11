Process Isolation

Older or alternative names: process jailing, chrooting, virtualisation, etc

Key tools & techniques
* Namespace
* Chroot

Aspects to cover: mappings: (names only)
* pid
* users
* root: `/`
* network
* mount

Gist:
```cpp
extern "C" int run_in_new_namespace(void*) {
    std::cout << "PID in new namespace: " << getpid() << std::endl;  // Will be 1!
    std::cout << "User ID in new namespace: " << getuid() << std::endl;
    system("/bin/sh");  // Start a shell!
}

int main() {
    auto nsflags = CLONE_NEWUSER | CLONE_NEWPID | SIGCHLD;
    void *stack_space_ptr = malloc(4096) + 4096;  // Stack grows downward

    pid_t pid = clone(run_in_new_namespace, stack_space_ptr, nsflags, NULL);

    //todo: also set up file descriptors, user maps, etc
    if (pid == -1) { perror("clone"); return 1; }

    // Wait for the child process to "finish"
    if (waitpid(pid, NULL, 0) == -1) {
        perror("waitpid");
        return 1;
    }
    return 0;
}
```

Aspects to cover: mappings: (more details)
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
