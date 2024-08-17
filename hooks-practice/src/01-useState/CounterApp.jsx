import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 1,
        counter2: 2,
        counter3: 3,
    })

    const {counter1,counter2,counter3} = counter
  return (
    <div>
        <h1> counter1: {counter1}</h1>
        <h1> counter2: {counter2}</h1>
        <h1> counter3: {counter3}</h1>

        <hr />

        <button className="btn" onClick={() => setCounter({...counter,counter1: counter1 + 1})}>+1</button>
    </div>
  )
}
