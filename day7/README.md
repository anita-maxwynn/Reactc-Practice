# Conditional Rendering in React
![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

**IIFE (Immediately Invoked Function Expression)**

```jsx
const MyComponent = ({ user }) => {
  return (
    <div>
      {
        (() => {
          if (user.isAdmin) {
            return <p>Welcome, Admin!</p>;
          } else {
            return <p>Welcome, User!</p>;
          }
        })()
      }
    </div>
  );
};
export default MyComponent;
```

# Lists in React

![alt text](image-5.png)

![alt text](image-6.png)


```jsx
const MyList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default MyList;
```

# keys in Lists
![alt text](image-7.png)

# Inline Styles in React
![alt text](image-8.png)
```jsx
const MyComponent = () => {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  };

  return <div style={divStyle}>Hello, Inline Styles!</div>;
};
export default MyComponent;
```
>To apply both class
![alt text](image-9.png)


# External CSS in React

![alt text](image-10.png)


```jsx
import './styles.css';
const MyComponent = () => {
  return <div className="my-class">Hello, External CSS!</div>;
};
export default MyComponent;
```
```css
.my-class {
  color: green;
  background-color: lightyellow;
  padding: 10px;
  border-radius: 5px;
}
```
> External CSS is global and can affect all components that use the same class names. To avoid conflicts, consider using CSS Modules or styled-components for scoped styles.