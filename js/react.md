# React magic

React does not attempt to provide a complete 'application framework'.
It is designed specifically for building user interfaces.
 Nice way to put it: "Common patterns of usage have emerged as the library matures".

### React magic
Things that make react magic happen:
* `render()`
* `componentDidMount()`
* `shouldComponentUpdate()`

### Explanation:
#### `props`
`props`, part of `state`, are sent from parent to child `Component`.
* All attributes (as in HTML attributes) will be received by the component as props.

#### "shouldComponentUpdate()"
#### componentDidMount()
Ususally: To trigger data loading from a remote source via an API.
#### `render()` is required to be defined for any component.

## on JSX
* JSX is not plain HTML.
* Use {} and use JavaScript inside the HTML that is in side JavaScript.

### It
Requires `BabelJS` or similar.

### What is
#### What is isomorphic loading?
* isomorphic loading to render identical HTML on both the server and client.

* You can render to `<canvas>` tag


## Data
### Is Not MVC.
Flux is not MVC.
### unidirectional data flow
#### Flux
* Flux is actions-dispatcher-store.
* Flux is  unidirectional data flow
* actions -> dispatch -> store ---(propagate)--> view.
* Changes to the store are propagated back to the view
* "observer pattern"  [observer pattern](http://nicholasjohnson.com/react/course/exercises/flux/)
* Flux is an "Observer" pattern.
* Flux can be considered a variant of the "observer pattern".

#### Flux+React
change propagation: vai: component properties

#### How Flux + React work?
* A React component under the "Flux architecture" should not directly modify any props passed to it.

#### On Observers:
* One way only (direcitonality). [1way](http://nicholasjohnson.com/react/course/exercises/flux/)
* Leading (initiating) is the "observed". It calls functions of observers.

Observers = substribers.
The methods of observes are called (by observant?).

### API data fetch:
In React
