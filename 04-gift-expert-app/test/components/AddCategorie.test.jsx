import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategorie } from "../../src/components/AddCategorie"


describe('Puebas en <AddCategorie /> ', () => {

    test('Debe modificarse el input', () => {

        render(<AddCategorie onNewCategory={ () => {} }/>)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: {value: 'One Piece'} })

        expect(input.value).toBe('One Piece')
     })

     test('Debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = "One Piece"

        render(<AddCategorie onNewCategory={ () => {} }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: {value: inputValue} })
        fireEvent.submit(form)

        expect(input.value).toBe('')
     })

     test('Debe de llamarse la funcion con el valor de inputValue', () => {

        const onNewCategory = jest.fn();

        const inputValue = "One Piece"

        render(<AddCategorie onNewCategory={ onNewCategory }/>)

        const form = screen.getByRole('form')
        const input = screen.getByRole('textbox')


        fireEvent.input(input, { target: {value: inputValue} })
        fireEvent.submit(form)

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

      })

      test('No debe de llamar onNewCategory si del input esta vacio', () => {
        const onNewCategory = jest.fn();

        render(<AddCategorie onNewCategory={ onNewCategory} /> )

        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect( onNewCategory ).toHaveBeenCalledTimes(0)
        expect( onNewCategory ).not.toHaveBeenCalled();
       })
 }) 