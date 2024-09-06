import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test en <GifItem /> ', () => {

    const url = "https://test-url.com/"
    const title = "Titulo card"

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem url={url} title={title}/>)
        expect(container).toMatchSnapshot()
     })

     test('Debe de mostrar la imagen con el Url y ALT indicado', () => {

        render(<GifItem url={url} title={title}/>)
        
        //screen.debug();

        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
      })

      test('Debe mostrar el titulo', () => {

        render(<GifItem url={url} title={title}/>)

        expect( screen.getByText(title) ).toBeTruthy();

       })
 })