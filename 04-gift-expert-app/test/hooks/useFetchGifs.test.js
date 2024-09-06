import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en useFetchGifs hook', () => {

    test('Debe de mostrar el estado inicial', () => {

        const {result} = renderHook( () => useFetchGifs("One Piece"))
        const { gifs, isLoading } = result.current

        expect(gifs.length).toBe(0)
        expect(isLoading).toBeTruthy()
     })


     test('Debe mostrar una array de gifs y loading en false', async () => {
        const {result} = renderHook( () => useFetchGifs("One Piece"))

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        )

        const { gifs, isLoading } = result.current

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      })

 })