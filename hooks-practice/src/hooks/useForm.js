import { useState } from "react"

export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetValue = () => {
        // const resetValues = {}
        // Object.keys(formState).map(key => resetValues[key] = '')
        setFormState(initialValue)
    }

    return {
        ...formState,
        onInputChange,
        onResetValue
    }
}
