Two types of functions:
1) functions that respond to some event or something the user has done
2) functions that perform an action

Type 1 is the type we already talked about. Handlers passed into components as props will be prefixed with "on". Handlers that are component class methods will be prefixed with "handle". This convention will keep handler naming consistent and avoid naming collisions.

Example:

```
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

Type 2 are functions that perform an action. Think "initializeFields" or "buildListItem". Instead of being in response to something the user does, these functions perform an action on behalf of the user. Their names should be verbs and they imply a contractual relationship. In other words, when you call them you expect something to be done.

Comparison Example:

`initializeFields={() => console.log("I'm initializing")}` is not valid (because the name implies that it initializes fields)

but

`onInitializeFields={() => console.log("I'm initializing")}` is totally ok (because it is a side effects of fields being initialized)
