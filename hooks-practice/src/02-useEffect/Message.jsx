import { useEffect, useState } from "react"

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {
      //* Este codigo se ejecuta cuando el componente se monta

      const onMouseMove = ({x,y}) => {
        const coords = {x,y}
        setCoords(coords)

      }
      window.addEventListener( 'mousemove', onMouseMove)


      return () => {
        //* Este Parte solo se ejecuta cuando el componente se DESMONTA
        window.removeEventListener( 'mousemove', onMouseMove)
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify(coords)}
    </>
  )
}
