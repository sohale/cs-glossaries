# Learning REST
**"Restful", the reference**
(cheetsheet)

## Response codes
Most important response codes:
(with a personal coment)

#### Main response codes
* `404`: not found: the resource
* `200`: success

#### Categories:
* `4xx` errors
* `2xx` 
* `3xx`
#### Less commmon
#### Exotic, never seen in use
(just theoretical knowledge)



## Concepts
### The concept of "Resource"

What does it meaan "Resrouce"ness (versus protocol):

* Consider APIs as an access bus or interface or "protocol", not encompassing, but separting the resources.
Resource means "on the other side".

* Resource is beyond the API (protocol).

* Resource is (all of) the stateful parts.
The protocol is the staateless part.

* Protocol is a pipe.. (reversible? becauase it is stateless).

* sepaaration of filesystem (from?) in unix

### Stateless-ness
* statelessness as "staatelessness of client". (likke bash)
* statelessness as being like bash (unix shell)
* statelessness as deliniatioon between resouorceness and protocol-ness (not seeing networkk as latered: it aay go beyonf layers, and include part of applicaiton layer as well. it may even go inside (part of)  the resource)
* statelessness as cache-able. (but needs more technical info. e.g. "GET" only? (not POST)
* statelessness as `GET`? it is only for GET? not for POST? defo not for delete/post/put
* statelessness of filesystem

## Concepts
* `head`: Even error body output is not sent
* `origin`: see CORS

### CORS and related concepts
* CORS is for client-side: Is a check at is located in browser-side.
* `origin` original definition: origin versus agent?

Scenarios:
* Main scenario: cross-oigin: to prevent injecting script to client broswer?
* Other scenarios?

### Interesting visions and ways to see it
* really, a file system. 9but not fues. no `ls`). (See shell)

Historical notes:
* Roy Fielding's theses (see below)
* Roy Fielding is the author of http? What did Tim do?
Some quotes:
* "Representational State Transfer (REST) as a key architectural principle of the World Wide Web"
* "Fielding co-founded the Apache HTTP Server project"
## Readings

The thesis by. [html version](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) for browser
