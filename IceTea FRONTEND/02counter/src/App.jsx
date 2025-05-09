import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  
  const addValue = () => {
    setCounter(counter + 1)
  }

  // We can write use State in this way also 
  const remValue = () => {
    let newcounter = counter -1 
    setCounter(newcounter)
  }
  
  const bonusValue = () => {
    setCounter((prevCounter) => prevCounter + 2)
    setCounter((prevCounter) => prevCounter + 2)
    setCounter((prevCounter) => prevCounter + 2)
    setCounter((prevCounter) => prevCounter + 2)
    setCounter((prevCounter) => prevCounter + 2)
  }

  return (
    <>
     <h1> COUNTER PROJECT </h1>
     <h2> COUNTER VALUE {counter} </h2> 
     <button onClick={addValue}>Add Value 💰</button> {" "}
     <button onClick={remValue}>Remove Value 💰</button> {" "}
     <button onClick={bonusValue}>Redeem Bonus Coin 10💲</button>
     <p></p>
    </>
  )  
}

export default App
