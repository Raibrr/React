import React from 'react'
//import {memo} from 'react'


export const Small = React.memo(({value}) => {

    console.log("Se ejecuto el codigo de nuevo")

  return (
    <small> {value} </small>
  )
})
