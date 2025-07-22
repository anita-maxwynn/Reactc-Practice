# React Requirements:-
- NPM:- It is a js packagemanager. It is used to take advantages of third party packages and easily install or update them.
- Webpack:- It is a static moule bundler for modern js application. When webpack processes the application , it  internally builds a dependency graph which maps every modelue the project needs and generates one or more bundles
- Babel - It's a toolchain that is mainly used to convert ecmascript code into backward compatible versiob of js in currecnt and older browsers.

---

# How to create react application without using babel webpack,cdn links and jsx
- React.createElement(type,props,children)
  - type-> type of html element or component 
  - props -> properties of the object
  - children -> anything need to be put between the dom elements
- render() -> It is the only required method in a class component . It examines this.props and this.state .  it returns one of the following types:
  - React elements -> these are created via jsx
  - array and fragments -> React can't return multiple elements together so they use arrays.
- ReactDOM.render(element,DOMnode)->
  - element:- which element u want to render
  - DOMnode:- where u want to render
  - ![ReactDOM.render example](image.png)

# React directory structure 
![react directory](image-1.png)


> Public folder's content doesn't get bundled , They are just copied while making stuff