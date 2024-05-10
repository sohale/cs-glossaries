# Setting up DNS & HTTPS

In a way, this covers TLS too (practically).
nginx will be a separate one, but this one refers to that, and provides minimal commands and key concepts.

### Key Concepts
You need to know these so as not to get confused.

* The DNS DSL!
```dns
#   <CMD>   <host>       <value>       ...
#    A      @           <domain>
     A      @           185.199.108.153
```
Language model:
* A DSL of commands like `A` `redirect` `CNAME`. With almost fixed columns.

Machine model: (semantics)
* multiple IPs =>

Syntax:
* `<domain>` → IP or domain name
* (for now, assume TTL=`automatic`, which implies ... )
* `<cmd>` →  `A` `redirect` `CNAME`


### Key Facts
* Only redirects the domain.


## Guides/know-how
There may be better solutions. This is what I have found and have worked so far. Reproducible.

### DNS
Key steps

#### Propagation
What to do while waiting for DNS propagation.

### https
Key steps

### content
Two types of content
#### nginx
see [nginx-setup.md](./nginx-setup.md)
Nginx Solution 1: Linux VM
Nginx Solution 2: Docker container

Nginx Solution 3: k8

#### github pages
As a subpage of github. (There may be better solutions. This is what I have found and have worked so far. Reproducible.)

