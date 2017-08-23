React Function Naming Guidelines
================================

We've identified two types of functions where we have instituted naming conventions:
1) functions that respond to some event or something the user has done
2) functions that perform an action

For the first type (1), handlers passed into components as props must be prefixed with `on`. Handlers which are internal, such as component class methods will be prefixed with `handle`. This convention will keep handler naming consistent and avoid naming collisions.

Example:
```js
class HelloComponent extends Component {
  // Handler class method, prefixed with "handle"
  handleClick() {
    console.log('the user clicked!');
  }

  render() {
    return (
      <div>
        // Handlers passed as props are prefixed with "on"
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

Type 2 are functions which perform an action. Think `initializeField` or `buildListItem`. Instead of being in response to something the user does, these functions perform an action on behalf of the user. Their names, like non-React function names, should be verbs. These functions generally imply a contractual relationship -- when you call them you expect something specific to be done or a specific kind of value to be returned.

Comparison Example:

`initializeFields={() => console.log("I'm initializing")}` is not valid (because the name implies that it initializes fields)

but

`onInitializeFields={() => console.log("I'm initializing")}` is totally ok (because it is a side effects of fields being initialized)
