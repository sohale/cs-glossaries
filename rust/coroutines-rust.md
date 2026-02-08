
notes on mkaing sense of rust-coroutines for practical troubleshooting and writing coroutines
(conceptual shredding: bite-size notes)

Bite-size conceptual shreds

### Property: "is `Unpin`"
One of key properties in coroutines:

an object is either:

* is `Unpin`
* is `!Unpin`

Context:
For coroutine compile-fixing.

### Property: capturing "references to locals"
and "keeping those borrows alive across a yield"


### Property: "borrows tied to external data"
Yielding borrows tied to external data (e.g., `&Expr<'a>` that borrows from enc).
