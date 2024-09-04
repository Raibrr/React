import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test en <GifItem /> ', () => {

    const url = "test-url"
    const title = "Titulo card"

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem url={url} title={title}/>)
        expect(container).toMatchSnapshot()
     })
 })