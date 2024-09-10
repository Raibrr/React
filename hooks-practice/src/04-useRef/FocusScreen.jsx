import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        //document.querySelector('input').focus()
        inputRef.current.focus();
    }
  return (
    <>
        <h1>Focus Screen</h1>

        <input
            ref={inputRef}
            type="text"
            placeholder='Ingrese Nombre'
            className='form-control'
        />

        <button 
            className='btn btn-primary mt-2'
            onClick={onClick}
        >
            Set Focus
        </button>
    </>
  )
}
