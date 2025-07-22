# Life Cycle of Components in React
In React, components go through a lifecycle of events from creation to destruction. Understanding these lifecycle methods is crucial for managing side effects, optimizing performance, and ensuring that your components behave as expected.
they are divided into three main phases:
1. **Mounting**: When an instance of a component is being created and inserted into the DOM.
2. **Updating**: When a component is being re-rendered as a result of changes to either its props or state.
3. **Unmounting**: When a component is being removed from the DOM.
4. **Error Handling**: When an error occurs during rendering, in a lifecycle method, or in the constructor of any child component.
# mounting:-
- Mounting is the process of creating an element and inserting it in a DOM tree

Following methgods are called in the following order when an instance of a component is being created and inserted into the DOM
- **constructor**
- static getDerivedStateFromProps
- **render**
- **componentDidMount**


## Constructor
The constructor is called before a React component is called before it is mounted.
When implementing the constructor for a React.Component subclass , you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

React Constructors are used only for 2 purpose
- Initializing local state by assiginig an object to this.state
- binding event handler methods to an instance.
![alt text](image.png)


## getDerivedStateFromProps
getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update state, or null to update nothing. Yhis method exists for rare use cases where the state depends on changes in props over time. It is a static method, so it does not have access to this.

```javascript
static getDerivedStateFromProps(props, state) {
  // Return an object to update state, or null to update nothing.
  return null;
}
```
## Render
The render() method is the only required method in a class component. It examines this.props and this.state.
It returns one of the following types:
- React elements - These are created via JSX(Not required).
For example, <div /> and <App/> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
- Arrays and fragments It is used to return multiple elements from render.
- Portals It is used to render children into a different DOM subtree.
- String and numbers - These are rendered as text nodes in the DOM.
- Booleans or null It renders nothing. (Mostly exists to support return test && <Child pattern, where test is boolean.)
> Note The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser.

## componentDidMount
componentDidMount is invoked immediately after a component is mounted. This method is executed once, only on the client side, and is a good place to initiate network requests, set up subscriptions, or perform any setup that requires DOM nodes.
```javascript
componentDidMount() {
  // Perform setup that requires DOM nodes or network requests.
}
```


# Updating:-
Updating is the process of changing state or props of an element in a DOM tree.

An update can be caused by changes to either the component's props or state. The following methods are called in the following order when a component is being re-rendered as a result of changes to either its props or state:
- static getDerivedStateFromProps
- shouldComponentUpdate
- **render**
- getSnapshotBeforeUpdate
- **componentDidUpdate**

### getDerivedStateFromProps
This method is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update state, or null to update nothing. This method exists for rare use cases where the state depends on changes in props over time. It is a static method, so it does not have access to `this`.

```javascript
static getDerivedStateFromProps(props, state) {
  // Return an object to update state, or null to update nothing.
  return null;
}
```
Let's say we have 2 components, `Parent` and `Child`, where `Child` receives props from `Parent`. If `Parent` updates its state, `Child` will re-render. If you want to update the state of `Child` based on the new props it receives, you can use `getDerivedStateFromProps`.

```javascript
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    increment = () => {
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        return (
            <div>
                <Child value={this.state.value} />
                <button onClick={this.increment}>Increment</button>
            </div>
        );
}
```
```javascript
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { derivedValue: 0 };
    }
    static getDerivedStateFromProps(Props, State) {
        // Update derivedValue based on the new props
        if (Props.value !== State.derivedValue) {
            return { derivedValue: Props.value };
        }
        return null; // No state update needed
    }
    render() {
        return <div>Derived Value: {this.state.derivedValue}</div>;
    }
}
```
### shouldComponentUpdate
shouldComponentUpdate is invoked before rendering when new props or state are received. It allows you to control whether a component should re-render or not. If it returns false, the component will not re-render. This method is useful for optimizing performance by preventing unnecessary renders.
```javascript
shouldComponentUpdate(nextProps, nextState) {
  // Return true to allow re-render, false to prevent it.
  return true; // or false based on your logic
}
```
For example, if you have a component that receives props frequently but doesn't need to update its UI, you can use shouldComponentUpdate to prevent unnecessary re-renders.
```javascript
class MyComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // Prevent re-render if props haven't changed
        return nextProps.value !== this.props.value;
    }
    render() {
        return <div>{this.props.value}</div>;
    }
}
```
### getSnapshotBeforeUpdate
This method is invoked right before the most recently rendered output is committed to the DOM. It allows you to capture some information (snapshot) from the DOM before it changes. The value returned by this method is passed as a third parameter to componentDidUpdate.
```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  // Capture some information from the DOM before it changes.
  return null; // or some value to be used in componentDidUpdate
}
```
For example, if you want to capture the scroll position of a list before it updates, you can use getSnapshotBeforeUpdate:
```javascript
class ListComponent extends React.Component {
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Capture the scroll position before the update
        const list = this.listRef.current;
        return list.scrollTop; // Return the scroll position
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // Use the snapshot to restore the scroll position after the update
        const list = this.listRef.current;
        if (snapshot !== null) {
            list.scrollTop = snapshot; // Restore the scroll position
        }
    }
    render() {
        return (
            <div ref={this.listRef}>
                {/* Render list items here */}
            </div>
        );
    }
}
```
### componentDidUpdate
componentDidUpdate is invoked immediately after updating occurs. This method is not called for the initial render. It is a good place to perform side effects, such as network requests or DOM manipulations, based on the updated props or state. It receives three parameters: prevProps, prevState, and snapshot (if getSnapshotBeforeUpdate is used).
It will not get called if shouldComponentUpdate returns false.
```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
  // Perform side effects based on the updated props or state.
  // prevProps and prevState are the previous values before the update.
  // snapshot is the value returned by getSnapshotBeforeUpdate, if used.
}
```
For example, if you want to fetch new data based on updated props, you can use componentDidUpdate:
```javascript
class DataFetcher extends React.Component {
    componentDidUpdate(prevProps) {
        // Fetch new data if the props have changed
        if (prevProps.id !== this.props.id) {
            this.fetchData(this.props.id);
        }
    }
    fetchData(id) {
        // Fetch data based on the provided id
        fetch(`/api/data/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            });
    }
    render() {
        return (
            <div>
                {/* Render fetched data here */}
            </div>
        );
    }
}
```
---


# Life Cycle Diagram

```markdown
+-------------------------------+
|   getDerivedStateFromProps() |
+-------------------------------+
              ↓
+-------------------------------+
|    shouldComponentUpdate()   |
+-------------------------------+
     ↓ Yes           ↓ No
  +--------+        Skip Render
  | render |
  +--------+
      ↓
+-------------------------------+
| getSnapshotBeforeUpdate()    |
+-------------------------------+
              ↓
+-------------------------------+
|   componentDidUpdate()       |
+-------------------------------+
```

# Unmounting:-
Unmounting is the process of removing a component from the DOM. The following method is called when a component is being removed from the DOM:
- **componentWillUnmount**
### componentWillUnmount
componentWillUnmount is invoked immediately before a component is unmounted and destroyed. This method is used to perform any necessary cleanup, such as cancelling network requests, removing event listeners, or cleaning up timers.
```javascript
componentWillUnmount() {
  // Perform cleanup before the component is removed from the DOM.
}
```
For example, if you have a component that sets up a timer, you can use componentWillUnmount to clear the timer when the component is about to be removed:
```javascript
class TimerComponent extends React.Component {
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }
    componentWillUnmount() {    
        clearInterval(this.timer); // Clear the timer when the component is unmounted
    }
    render() {
        return <div>Current Time: {this.state.time.toLocaleTimeString()}</div>;
    }
}
```




# Hooks

Hooks are functions that let you use state and other React features without writing a class. They allow you to manage component lifecycle, state, and side effects in functional components.

when to use hooks:
- When you want to use state in a functional component.

Rules of Hooks:
- Only call hooks at the top level of your React function. Don't call hooks inside loops, conditions, or nested functions.
- Only call hooks from React function components or custom hooks. Don't call hooks from regular JavaScript functions.
- React relies on the order of hooks calls to maintain state consistency. If you change the order of hooks, it can lead to bugs.
- Hooks don't work inside class components. They are designed for functional components only.


## UseState
useState is a Hook that lets you add state to your functional components. we call it inside a functional component to declare a state variable and a function to update it.
Usestate returns an array with two elements: the current state value and a function to update that state value.

```javascript
import React, { useState } from 'react';
function Counter() {
  // Declare a state variable called count, initialized to 0
  const [count, setCount] = useState(0);
  muhehehe = () => {
    // Update the count state when the button is clicked
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Update the count state when the button is clicked */}
      <button onClick={muhehehe}>
        Click me
      </button>
    </div>
  );
}
```


## UseEffect
useEffect is a Hook that lets you perform side effects in your functional components. It is called after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.
useEffect takes two arguments: a function that contains the side effect logic and an optional dependency array that determines when the effect should run. If the dependency array is empty, the effect runs only once after the initial render. If it contains variables, the effect runs whenever those variables change.
Basically it is used to replace the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.

```javascript
import React, { useState, useEffect } from 'react';
function ExampleComponent() {
  const [count, setCount] = useState(0);
    useEffect(() => {
        // This effect runs after every render
        document.title = `You clicked ${count} times`;
        
        // Cleanup function (optional)
        return () => {
        console.log('Cleanup before the next effect or unmount');
        };
    }, [count]); // The effect depends on the count variable
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

![alt text](image-1.png)

![alt text](image-2.png)

It also takes an array of dependencies as the second argument. If any of the dependencies change, the effect will run again. If you pass an empty array, the effect will only run once after the initial render, similar to componentDidMount.

```javascript
useEffect(() => {
  // This effect runs only once after the initial render
  console.log('Component mounted');
}, []); // Empty dependency array
```


## Custom Hooks
A custom Hook is a JavaScript function, when we want to share logic between components, we can create a custom Hook. Custom Hooks allow you to extract component logic into reusable functions.
> Example of a custom Hook that manages a counter:
![alt text](image-3.png)
