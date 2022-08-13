# CORS

A tutorial or guide about CORS.
<!-- mini book -->

Also [see](https://github.com/sohale/cs-glossaries/blob/master/api-rest-http/restful.md#cors-and-related-concepts)

<!-- ### CORS and related concepts -->

* CORS is for client-side: Is a check at is located in browser-side.



### Concepts
* `origin` original definition: origin versus agent?. Defined by "main request"
* `OPTIONS`

#### Fine grained concepts:
* the `same-origin policy` [(from)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). As opposed to?
* the "origin the application was loaded from"
* "main request" defines the `origin`. Main "page".
* There are: multiple requests.
* Hence, there are: multiple origins (i.e. origins of responses?)

### is a Client-side check
* "from which a *browser* should **permit** loading resources" [(from)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* "browsers restrict cross-origin HTTP requests" [(from)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* "a web application ... *can only* **request** resources from the same origin the application was loaded from" (from same)

Quote: "a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers."
[(from)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS):
   * the "origin the application was loaded from"
   * "the response from other origins"


### Scenarios (CORS):
* Main scenario: cross-oigin: to prevent injecting script to client broswer?
* Other scenarios?

### Keys
1. compare two cases: "same origin" and "cross-origin" (two diagrams):
   * "page server" `!=` "request target" (origin of the response?)
   `!=` (java)script's origin
2. `browser != javascript`

## Promising references
* Book:
"*CORS in Action: Creating and consuming cross-origin APIs*"
By Monsur Hossain.
Manning Publications.
October 2014.
[link](https://learning.oreilly.com/library/view/cors-in-action/9781617291821/). (
[t-link](https://t.me/c/1103324787/2042)
)
* Mozilla: [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
