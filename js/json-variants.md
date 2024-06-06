# JSON and its Variants

* JSON as human-writable format (DSL)
   * See yaml
   * See JSON date (below)

## JSON variants:
* JSONP
* I-JSON
* EJSON

#### JSONP:
  * JSONP = JSON with Padding
  * `Date.UTC(2017,2,22)` in JSONP and supported by `$.getJSON()` (in jquery?) 
  * https://stackoverflow.com/questions/10286204/what-is-the-right-json-date-format
  * https://stackoverflow.com/questions/2887209/what-are-the-differences-between-json-and-jsonp

#### EJSON
EJSON: described here: https://docs.meteor.com/api/ejson.html
`{ "myDateField": { "$date" : <ms-since-epoch> } }`

"universal interoperability" ?

via: https://stackoverflow.com/a/54588929/4374258




## JSON isomorphs:
* yaml



## ...
### JSON's specific concerns/solutions:
* JSON comments
* JSON: dates  (See below)

#### A sub-section on time/data format
* What is a human-writable format for JSON? (DSL)
* date in JSON:
   * See https://stackoverflow.com/questions/10286204/what-is-the-right-json-date-format
* some string formats
   * https://www.rfc-editor.org/rfc/rfc3339

### Misc

*What is:
   * RFC 3339
   * ISO-8601 string
   * ISO 8601
