import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Bruh name="John" />
      <Bruh name="Doe" />
      <Bruh name="Jane" />
      <Bruh name="Smith" />
      <BruhClass name="Class John" />
      <BruhClass name="Class Doe" />
      <BruhClass name="Class Jane" />
      <BruhClass name="Class Smith" />
      <BruhClass name="Class React" />
      <BruhClass name="Class Vite" />
    </>
  )
}

export default App


const Bruh = (props) => {
  console.log(props)
  return (<React.Fragment>
    <div>Bruh {props.name}</div>
    
  </React.Fragment>
  )
}

class BruhClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Bruh {this.props.name}</h1>
      </div>
    )
  }
}
