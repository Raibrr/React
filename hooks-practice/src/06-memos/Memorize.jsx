import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

// * En este ejemplo la memorizacion memoriza un componente, lo cual evita que
// * al realizar renderizados en el padre, algun componte hijo sea afectado

export const Memorize = () => {

    const { increment, value} = useCounter(10)
    const [show, setShow] = useState(true)
  return (
    <div>
        <h1>Counter: <Small value={value} /> </h1>

        <hr />

        <button className='btn btn-primary' onClick={ () => increment()}>
            +1
        </button>

        <button className='btn btn-outline-primary' onClick={ () => setShow(!show)}>
            Show/Hide
        </button>
    </div>
  )
}
