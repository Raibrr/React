import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log("Se dibujo")
  return (
    <div>
        <button 
            className='btn btn-primary'
            onClick={() => increment(5)}
        >

            Increment
        </button>
    </div>
  )
})
