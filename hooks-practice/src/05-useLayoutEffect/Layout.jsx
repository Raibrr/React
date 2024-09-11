import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { PokemonCard } from "../03-examples/PokemonCard"

export const Layout = () => {

    const {decrement, increment, value } = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${value}`)


  return (
    <>

        {
            isLoading 
            ? <LoadingMessage /> 
            : <PokemonCard 
                id={data.id} 
                name={data.name}
                sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ]}
                />
        }


        <button className="btn btn-primary" onClick={() => increment()}>
            Siguiente
        </button>

        <button className="btn btn-primary" onClick={() => value > 1 ? decrement(): null}>
            Anterior
        </button>
    </>
  )
}
