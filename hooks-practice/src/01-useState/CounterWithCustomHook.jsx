import { useCounter } from "./hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { value, increment, decrement, reset } = useCounter()


  return (
    <>
        <h1>Counter whit hook: {value}</h1>

        <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
    </>
  )
}
