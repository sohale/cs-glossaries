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
[Diagram ](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
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


* There are many "Flux"es.
* "Flux"'s creator's [tutorial](https://egghead.io/courses/getting-started-with-redux)

#### Flux+React
change propagation: vai: component properties

#### How Flux + React work?
* A React component under the "Flux architecture" should not directly modify any props passed to it.

#### Flux data flow graph
`view(<input>)` -----(`dispatch`)----> `action` ---> `data store` ---> `event` ---> `view(output)`

The update (data flow) goes "throw" data store. i.e. guarantees model update before view update.

The order of chain is important and critical; taken seriously. (And MVC is probably not this).

* Read from `this.state` in the `render()` function.

[Full circle](https://blog.andrewray.me/flux-for-stupid-people/)

Side note:
> When the store updates, the data is re-copied in its entirety.
Why?

When xyz is `synchronous`, it means it is bad (too tightly close?).

##### Redux state principle
* All state of the whole app is in one single state variable.
* (Is immutable?)
* It is a JS dicitonary and is called `this`?.`state`.

##### State:
State is redonly. immutable - readonly.
All state in one variable (mp5).
I was using the same principle!!


#### On Observers:
* One way only (direcitonality). [1way](http://nicholasjohnson.com/react/course/exercises/flux/)
* Leading (initiating) is the "observed". It calls functions of observers.
* To decouple them ( X from Y).



* A -> B
B = observer
A triggers.


Observers = substribers.
The methods of observes are called (by observant?).

Observer (suvbscriber) is almost like a client (also can be seen as server). It gives its address/contact (which is a fcunction to call). And when something happened, it is called.

Listening = ?

two-way sis the source of much confusion often. (cf. data moving)

* notifying everyone. (almost broadcast). By: the old server.
* watching, listening, notifying, triggered, etc.
* The Model is watching the View (which is the watcher?)

#### Who watches whom?
* View watches forms
* Model watches view
* View2 watches model
* Model can watch (listen) another model.

* trigger = notify = fucntion call

* Data flows from component to component via events. (no)

#### data flow: transactions.
(me: packets)
Each transaction is uni-directional. Of course.

One way data flow does not preclude cycles. (Great. AngularJS is awful).
[nice](http://nicholasjohnson.com/react/course/exercises/flux/)

https://blog.andrewray.me/reactjs-for-stupid-people/



### React is MAINLY THE VIEW LAYER.
Angular is a complete framework (including a view layer), React is not.

React provdes: templates + some function hooks 

* That's all React outputs, HTML.
* in the end you just barf out HTML.
* You can't build a fully functional dynamic application with React alone.

#### Data flow using "imperative" programming does not SCALE.
That (see link) is "imperative" programming.
##### **Who else has access to the header HTML?**
Reminds me of access control in OOP. Great!

Who holds the source of truth for the name being visible?
(What makes it source? one-suirection-nes: causality).

Uni-directionality is good becuase:
"If you know the state, you know the rendered output."
"You don't have to trace program flow."

"This is "declarative" programming."

No. I say it better: Sometimes you say the steps.
Someties you bind and say where it goes when the data coms. Like jMusic/Mehr32, Tensorflow, vvv, etc.

"You don't tell the computer how to do it"
Not that much of an informative sentence.

"Working with JSX components is really nice."
Does it violates separation of concerns? no.
yes, {{Mustache.js}} got it wrong!



### Data flow with server
How do you contact the server? Read [this](https://blog.andrewray.me/reactjs-for-stupid-people/)


### API data fetch:
In React

## 2022
* See [sosi-org/REST-practice](https://github.com/sosi-org/REST-practice)
* See [Story in Audiotour at StrikingThirteen](https://github.com/StrikingThirteen/Audiotour-Sandbox/blob/master/spa/hello-world/src/Story.js)

### Property versus state:
* **Property** is set from outside (eg by (DOM) parent). It is given to the component. Set "for" the component (from outside). It can be a javascript object. Is const per instance of component. (Hence, if props is changed also conesquently, `render()` is called again. is Slow. You can have a function (lambda) as a property. also onClick, onInvalide, etc. (Similar to html attributes.)

* **State** is variable (time-varying). is fast. Render is called when state is changed.

Can bubble up.

|  property               |       state     |
|:------------------------|----------------:|
| is slow                 | is fast         |
| is hard                 | is soft         |
| set from outside        | set from inside |
| can be function         | -               |
| effect during instantiation             | triggers `render()`     |
| changable only at constructor time      | changable               |
| component doesn't have control over it  | has control over it     |
| one way change                          | changed from inside too |
| similar to process' envs                | program state           |
| similar to function args                | similar to function local variables |

## Modern React
* Based on:
    * [oreilly.com/videos/react-zero-to](https://learning.oreilly.com/videos/react-zero-to/9780137611676/9780137611676-LRMW_01_01_02/)
    * 

Command:
* `npx create-react-app` appname
