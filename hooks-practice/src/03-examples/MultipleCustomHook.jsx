import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHook = () => {

    const {decrement, increment, value } = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    console.log(data)


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
