import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './components/TodoApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton><
      TodoApp></TodoApp>
    </>
  )

  function CustomButton(props) {
    function clickHandler() {
      props.setCount(count + 1.5)   
    }

    return <button onClick={clickHandler}> Counter {props.count} </button>
  }
}

export default App
