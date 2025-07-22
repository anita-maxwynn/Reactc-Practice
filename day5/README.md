## ✅ Children in JSX

* In **JSX**, any content placed between an opening and closing tag is passed to the component as a special prop called `props.children`.

  * Example:

    ```jsx
    <Student>Hello, I’m a child!</Student>
    ```

---

### ✅ Functional Component Example

```javascript
import React from "react";

const Student = (props) => {
  return <div>{props.children}</div>;
};

export default Student;
```

---

### ✅ Class Component Example

```javascript
import React, { Component } from "react";

class Student extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Student;
```

---

## ✅ State in React

**State** is used to manage dynamic data in a component. It is **private** to the component and determines how the component renders and behaves.

---

### ❌ Outdated Statement:

> ~~We can create state only in class components.~~
> ✅ **Correct:** With the introduction of **Hooks**, we can now create state in **functional components** as well.

---

### ✅ 3 Ways to Declare State

---

### 1️⃣ Functional Component with `useState` (Modern – Recommended)

```javascript
import React, { useState } from "react";

const Student = (props) => {
  const [name, setName] = useState("Rahul");
  const [roll, setRoll] = useState(props.roll);

  return (
    <div>
      {name} - {roll}
    </div>
  );
};

export default Student;
```

---

### 2️⃣ Class Component – Directly Inside Class (Old but Valid)

```javascript
import React, { Component } from "react";

class Student extends Component {
  state = {
    name: "Rahul",
    roll: this.props.roll,
  };

  render() {
    return (
      <div>
        {this.state.name} - {this.state.roll}
      </div>
    );
  }
}

export default Student;
```

---

### 3️⃣ Class Component – Inside Constructor (Older Style)

```javascript
import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rahul",
      roll: this.props.roll,
    };
  }

  render() {
    return (
      <div>
        {this.state.name} - {this.state.roll}
      </div>
    );
  }
}

export default Student;
```
![Important stuff](image.png)

## Event Handling
The actions to which JavaScript can respond are called Events.
![alt text](image-1.png)

> now this works kinda different in js . it behaves differently depending on the situations. 
> **If in interview they ask to implement this without implementing it using arrow function**  ![alt text](image-2.png)

---

- ✅ Mouse Events

    | Event           | Description                              |
    | --------------- | ---------------------------------------- |
    | `onClick`       | User clicks on an element                |
    | `onDoubleClick` | User double-clicks on an element         |
    | `onMouseDown`   | Mouse button is pressed                  |
    | `onMouseUp`     | Mouse button is released                 |
    | `onMouseEnter`  | Cursor enters an element (no bubbling)   |
    | `onMouseLeave`  | Cursor leaves an element (no bubbling)   |
    | `onMouseMove`   | Mouse is moved over an element           |
    | `onMouseOver`   | Mouse is over an element or its children |
    | `onMouseOut`    | Mouse leaves an element or its children  |


- ✅ Keyboard Events

    | Event        | Description                                  |
    | ------------ | -------------------------------------------- |
    | `onKeyDown`  | Key is pressed down                          |
    | `onKeyPress` | Key is pressed (deprecated, use `onKeyDown`) |
    | `onKeyUp`    | Key is released                              |

- ✅ Form Events

    | Event       | Description                            |
    | ----------- | -------------------------------------- |
    | `onChange`  | Value of input/textarea/select changes |
    | `onInput`   | User input in text field               |
    | `onSubmit`  | Form submission                        |
    | `onReset`   | Form reset                             |
    | `onInvalid` | Form field validation fails            |
    | `onSelect`  | Text is selected in input/textarea     |

- ✅ Focus Events

    | Event     | Description            |
    | --------- | ---------------------- |
    | `onFocus` | Element receives focus |
    | `onBlur`  | Element loses focus    |


- ✅ Clipboard Events

    | Event     | Description               |
    | --------- | ------------------------- |
    | `onCopy`  | Copy operation triggered  |
    | `onCut`   | Cut operation triggered   |
    | `onPaste` | Paste operation triggered |

- ✅ Composition Events

    | Event                 | Description              |
    | --------------------- | ------------------------ |
    | `onCompositionStart`  | Composition starts (IME) |
    | `onCompositionUpdate` | During composition       |
    | `onCompositionEnd`    | Composition ends         |

- ✅ Touch Events (Mobile)

    | Event           | Description               |
    | --------------- | ------------------------- |
    | `onTouchStart`  | Finger touches the screen |
    | `onTouchMove`   | Finger moves on screen    |
    | `onTouchEnd`    | Finger lifted from screen |
    | `onTouchCancel` | Touch event interrupted   |

- ✅ Pointer Events

    | Event             | Description                      |
    | ----------------- | -------------------------------- |
    | `onPointerDown`   | Pointer is pressed down          |
    | `onPointerMove`   | Pointer is moved                 |
    | `onPointerUp`     | Pointer is released              |
    | `onPointerCancel` | Pointer is canceled              |
    | `onPointerEnter`  | Pointer enters element           |
    | `onPointerLeave`  | Pointer leaves element           |
    | `onPointerOver`   | Pointer is over element or child |
    | `onPointerOut`    | Pointer leaves element or child  |

- ✅ UI Events

    | Event      | Description         |
    | ---------- | ------------------- |
    | `onScroll` | Element is scrolled |

- ✅ Wheel Events

    | Event     | Description                  |
    | --------- | ---------------------------- |
    | `onWheel` | Mouse wheel or trackpad used |

- ✅ Media Events

    | Event              | Description                         |
    | ------------------ | ----------------------------------- |
    | `onAbort`          | Media load aborted                  |
    | `onCanPlay`        | Media can start playing             |
    | `onCanPlayThrough` | Media can play through              |
    | `onDurationChange` | Duration metadata loaded            |
    | `onEmptied`        | Media becomes empty                 |
    | `onEncrypted`      | Encrypted media encountered         |
    | `onEnded`          | Playback reaches end                |
    | `onLoadedData`     | Media data loaded                   |
    | `onLoadedMetadata` | Metadata (duration, etc.) loaded    |
    | `onLoadStart`      | Media loading started               |
    | `onPause`          | Media is paused                     |
    | `onPlay`           | Media is starting to play           |
    | `onPlaying`        | Media is playing                    |
    | `onProgress`       | Media is downloading                |
    | `onRateChange`     | Playback rate changed               |
    | `onSeeked`         | Seek operation completed            |
    | `onSeeking`        | Seeking in progress                 |
    | `onStalled`        | Fetching media is stalled           |
    | `onSuspend`        | Media fetch suspended               |
    | `onTimeUpdate`     | Time indicated by the `currentTime` |
    | `onVolumeChange`   | Volume changed                      |
    | `onWaiting`        | Playback is waiting for more data   |

- ✅ Image Events

    | Event     | Description                  |
    | --------- | ---------------------------- |
    | `onLoad`  | Image or iframe is loaded    |
    | `onError` | Error occurred while loading |

- ✅ Animation Events

    | Event                  | Description           |
    | ---------------------- | --------------------- |
    | `onAnimationStart`     | CSS animation starts  |
    | `onAnimationEnd`       | CSS animation ends    |
    | `onAnimationIteration` | CSS animation repeats |

- ✅ Transition Events

    | Event             | Description              |
    | ----------------- | ------------------------ |
    | `onTransitionEnd` | CSS transition completes |

- ✅ Drag Events

    | Event         | Description                |
    | ------------- | -------------------------- |
    | `onDrag`      | Element is being dragged   |
    | `onDragStart` | Dragging starts            |
    | `onDragEnd`   | Dragging ends              |
    | `onDragEnter` | Draggable enters a target  |
    | `onDragLeave` | Draggable leaves a target  |
    | `onDragOver`  | Draggable is over a target |
    | `onDrop`      | Dropped on a target        |

---

## setState

In React, setState is a method used to update the state of a component. It triggers a re-render with the new state.

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
}
```

- Asynchronous: setState doesn’t update the state immediately.

- Batched Updates: React may combine multiple setState calls for performance.

- Function Form (when new state depends on previous state):

```jsx
this.setState((prevState) => ({ count: prevState.count + 1 }));
```

## Passing Arguments to Event handlers in ReactJS

![alt text](image-3.png)
> inplace of the extra function we can pass it as arroow function inside the jsx/tsx itself

there's also another way
```js
<button onClick={this.handleClick.bind(this, id)}>Delete</button>
```

