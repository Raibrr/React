import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

// * En este ejemplo la memorizacion memoriza un VALOR, lo cual evita que
// * al realizar renderizados en el padre o en algun state ajeno al valor que nos importa
// * no ejecuata el valor, hasta que el valor de interes es modificado

const heavyStuff = (initialNumber) => {
    for (let i = 0; i < initialNumber; i++) {
        console.log("Proceso de funcion")
    }

    return `${initialNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const { increment, value} = useCounter(10)
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(value), [value])
  return (
    <div>
        <h1>Counter: <small>{ value }</small> </h1>

        <hr />

        <h4> {memorizedValue} </h4>

        <button className='btn btn-primary' onClick={ () => increment()}>
            +1
        </button>

        <button className='btn btn-outline-primary' onClick={ () => setShow(!show)}>
            Show/Hide
        </button>
    </div>
  )
}
