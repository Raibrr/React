import { render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas en GifExpertApp', () => {

    test('Debe contener el titulo de la app', () => {

        render(<GiftExpertApp />)
        expect(screen.findByText('GiftExpertApp'))

     })

     test('Debe tener una categoria', () => {

        const onAddCategorie = jest.fn();
        render(<GiftExpertApp />)

        onAddCategorie("One Piece")

        screen.debug()
      })

      // TODO: Do more test
 })