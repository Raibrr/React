import React, { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Ramon',
        email: 'ramon@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

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

        {
            (username === 'Ramon2') && <Message />
        }
    </>
  )
}
