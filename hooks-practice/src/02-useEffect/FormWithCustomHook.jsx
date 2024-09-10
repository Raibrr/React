import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const [initialValues, setInitialValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const {onInputChange, onResetValue , username,email, password} = useForm(initialValues)

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input
            type='text'
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input
            type='email'
            className='form-control mt-2'
            placeholder='ramon@google.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        <input
            type='password'
            className='form-control mt-2'
            placeholder='password'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <button onClick={onResetValue} className='btn btn-primary mt-2'>Borrar</button>

    </>
  )
}
