# TLS made simple
Like simple.wikipedia, but simpler. For kids.
## Level 1:
TLS is used in `https`. (same https used to use SSL)
TLS is the new SSL (deprecates, made obsolete).

(Not to confuse with: OpenSSL.)
### See (exercises that makes you see):
Click on your https connection. Try to find out if it is TLS or SSL, etc.

<!-- You only learn (accept input) when Teaching, or writing (immediately). This will be a Tutorial rather than a text to read. Tutorials are usually made for "immediate" doing.-->

## Diagrams
* Open Systems Interconnection (OSI) mode: 7 layers [ref](https://stackoverflow.com/a/45877078/4374258)
* "The TCP/IP model is only 4 layers" [ref](https://stackoverflow.com/a/45877078/4374258)
* ""Internet protocol suite model"

| OSI                        |    Internet    | OS             | http+TLS | familiar   |
| :---                       |     :---:      |           ---: |    ---: |  ---:  |
| 7. Application Layer       | Application Layer | .           |         |.   |
| 6. Presentation Layer      | ^^              | .             |         |.   |
| 5. Session Layer           | ^^              | .             |         |.   |
| 4. Transport Layer         | .              | .              |         |.   |
| 3. Network Layer           |.               | .              |         |.   |
| 2. Data Link Layer         |  Network Access Layer  | .      |         |.   |
| 1. Physical Layer          | ^^              | .             |         |.   |

* Where is "socket"?

[t1](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)
[t2](https://github.com/jeffreytse/jekyll-spaceship)

[o](https://www.imperva.com/learn/application-security/osi-model/)

* DNS is at the same layer with http:  http, dns, smtp, snmp, telnet, ftp. [(ref)](https://www.imperva.com/learn/application-security/osi-model/)

Unverified:
| OSI                |
| :---               |
| session? |
| authentication? (standalone jwt token) |
| (encryptioned) payload |
| message-signing (signed)|
| aka?|
| REST (downstream)|
| REST + gateway |
| utf? |
| http |
| TLS? |
| socket round (one way each round) |
| TCP/socket |
| IP |
| Network Access Layer |

Compare to: 
*
*

## Readings
* For [REST, see these notes](https://github.com/sohale/cs-glossaries/blob/master/api-rest-http/restful.md)
* For OAuth see [draft1:oauth-draft](https://github.com/sohale/cs-glossaries/blob/master/docs/oauth-sec-draft.md). (todo: move to "/securiy"?)
* [security](https://github.com/sohale/cs-glossaries/blob/master/security/security.md)
* [this page itself](https://github.com/sohale/cs-glossaries/blob/master/made-simple/tls-1.md)



moved from
`made-simple/tls-1.md` → `api-rest-http/made-simple-tls-1.md`
