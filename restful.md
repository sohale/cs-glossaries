# Restful reference
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



## Concepts
### The concept of "Resource"

What does it meaan "Resrouce"ness (versus protocol):

* Consider APIs as an access bus or interface or "protocol", not encompassing, but separting the resources.
Resource means "on the other side".

* Resource is beyond the API (protocol).

* Resource is (all of) the stateful parts.
The protocol is the staateless part.

* Protocol is a pipe.. (reversible? becauase it is stateless).

### Stateless-ness
* statelessness as "staatelessness of client". (likke bash)
* statelessness as being like bash (unix shell)
* statelessness as deliniatioon between resouorceness and protocol-ness (not seeing networkk as latered: it aay go beyonf layers, and include part of applicaiton layer as well. it may even go inside (part of)  the resource)
* statelessness as cache-able. (but needs more technical info. e.g. "GET" only? (not POST)
* statelessness: it is only for GET? not for POST? defo not for delete/post/put


## Concepts
* `head`: Even error body output is not sent
* `origin`: see CORS

### CORS and related concepts
* CORS is for client-side: Is a check at is located in browser-side.
* `origin` original definition: origin versus agent?

