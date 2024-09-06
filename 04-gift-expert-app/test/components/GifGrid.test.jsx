import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Piece'

    test('Debe de mostrar el loading y la categoria', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render(<GifGrid category={ category }/>)

        expect(screen.getByText(category))
        expect(screen.getByText('Cargando...'))
     })


     test('Debe mostrar una lista de gifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Luffy',
                url: 'https://localhost/luffy.jpg'
            },
            {
                id: 'def',
                title: 'zorro',
                url: 'https://localhost/zorro.jpg'
            },
        ]



        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category }/>)
        
        expect(screen.getAllByRole('img').length).toBe(gifs.length)
      })
 })