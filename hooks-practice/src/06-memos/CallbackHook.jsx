import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    // * useCallback sirve para memorizar funciones, ya que las funciones
    // * y los objetos en JavaScript apuntan a espacios en memoria diferentes
    // * cada que que un componente se renderiza.

    // * Para que el hook funcione el componente al que se le pasa el metodo
    // * debe estar memorizado (React.memo) en este caso <ShowIncrement />

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      (value) => {
        setCounter( (currentCounterValue) => currentCounterValue + value)
      },
      [],
    )
    
    // const incrementFather = () => {
    //     setCounter( (value) => value + 1)
    // }
  return (
    <>
        <h1> useCallback: { counter }</h1>

        <hr />

        <ShowIncrement increment={incrementFather} />
    </>
  )
}
