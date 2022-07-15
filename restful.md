# Learning REST: Study workbook
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

Whata aare the names? "OK" versus codes.

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
* "server does not store the state of the client" ([ref](https://stackoverflow.com/a/29265566/4374258))

### A-rchitecture
* ROA
* "REST is not a protocol for two systems to communicate. REST is an architecture style."
* It is mostly atop HTTP, the application layer.
   * "HTTP is in the Application layer of the Internet protocol suite model" "and in the Session Layer of the OSI Model". [ref](https://stackoverflow.com/a/45877078/4374258)
   * (?) "REST is an API, not a protocol. The only protocol here is HTTP." (may be incorrect. [ref](https://stackoverflow.com/questions/29264855/in-which-osi-layer-is-the-rest-api-paradigm#comment95974646_44172240) )
   * "REST is just an architectural style" (same ref)
      * "and an API which strictly follows the REST principles is called RESTful API."
* "osi is defunct and irrelevant" [(said)](https://stackoverflow.com/questions/29264855/in-which-osi-layer-is-the-rest-api-paradigm#comment95974612_29264855). cool. yes, it was even invented after TCP/IP.

## Concepts
* `head`: Even error body output is not sent
* `origin`: see CORS

### CORS and related concepts
* CORS is for client-side: Is a check at is located in browser-side.
* `origin` original definition: origin versus agent?

Scenarios (CORS):
* Main scenario: cross-oigin: to prevent injecting script to client broswer?
* Other scenarios?

### Performance
* See "being round-trip" below
* How does `yarn` improve it?
* See waka slides pdf in readings ( [link](https://www.ietf.org/proceedings/83/slides/slides-83-httpbis-5.pdf) )

### Odd exotic bits
* exotic result/OK codes 
* The `Vary` [see](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)

### For REST you need to know
(also see the "interview-worthy" section)
* `http`
* resource-oriented-aarchitecture
* is about distributed-computing (is a distributed-computing specifications)
* OSI layers: TCP/IP: which layer does REST reside? (not `http`)

Not to miss list: other than normala usage, what you will find after professional experience?
* Cache-tag
* CORS (the concept of origin)
* head

### Just for being complete
Just for sake of being complete.
Not critical, or missing: not new. not informative:
* "idempotent" operation
* TLS [(see TLS notes)](https://github.com/sohale/cs-glossaries/blob/master/made-simple/tls-1.md)
* Layers [(see the "diagrams" section of TLS notes)](https://github.com/sohale/cs-glossaries/blob/master/made-simple/tls-1.md)
* is ROA
* Load balancing? ( L4 vs L7? [(see)](https://www.nginx.com/resources/glossary/layer-7-load-balancing/) )

### Interview-worthy material
Interview questions:
* "classify the REST API paradigm between OSI Layers" [(ref)](https://stackoverflow.com/questions/29264855/in-which-osi-layer-is-the-rest-api-paradigm)

### Session etc and extra conceptual/logical layers
* session-based authentication
* "Does session-based authentication break the stateless architecture constraint of a REST web API?" [(see)](https://stackoverflow.com/questions/26604908/does-session-based-authentication-break-the-stateless-architecture-constraint-of?rq=1)
* "token-based authentication" (session-based versus "token-based") (ref: above item). See Authentication.

### Authentication
See [oauth-draft](https://github.com/sohale/cs-glossaries/blob/master/docs/oauth-sec-draft.md). (todo: move to "/securiy"?)

### Some headaches
* nginx
* WSGI (See my [REST-practice](https://github.com/sosi-org/REST-practice))

### Interesting visions and ways to see it
* really, a file system. (but not fues. no `ls`). (See shell)
* being round-trip.
   * Also: "Pipelining depends on pairing requests to responses"
   * slow if chaining serial calls (hence GraphQL, Waka?)
* nature of it waitings/blockings? ("Head-of-line blocking"?)

### Historical notes:
* Roy Fielding's theses (see below)
* Roy Fielding is the author of http? What did Tim do? (apparently http 0.9. See the pdf slides below)
Some quotes:
* "Representational State Transfer (REST) as a key architectural principle of the World Wide Web"
* "Fielding co-founded the Apache HTTP Server project"
* "Waka" [see](https://en-academic.com/dic.nsf/enwiki/3674008) also [this pdf slides](https://www.ietf.org/proceedings/83/slides/slides-83-httpbis-5.pdf) (also mentioned in readings)

#### Alternatives
* Waka
* GraphQL
* new `http` versions ?
* grpc (so grpc does not include it?)

### My good exercises in REST
* [image-farms](https://github.com/sosi-org/image-farms). Features:
* [REST-practice](https://github.com/sosi-org/REST-practice). Features: multiple-scale protocols (droplets). Features: WSGI, WebSockets.

## Readings

* The thesis by. [html version](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) for browser
* Waka [pdf slides](https://www.ietf.org/proceedings/83/slides/slides-83-httpbis-5.pdf)

### See also
* For tls + network layers: [TLS notes, see this link](https://github.com/sohale/cs-glossaries/blob/master/made-simple/tls-1.md)
* For OAuth see [draft1:oauth-draft](https://github.com/sohale/cs-glossaries/blob/master/docs/oauth-sec-draft.md). (todo: move to "/securiy"?)
* this page itself](https://github.com/sohale/cs-glossaries/blob/master/restful.md)
* [security](https://github.com/sohale/cs-glossaries/blob/master/security/security.md)

