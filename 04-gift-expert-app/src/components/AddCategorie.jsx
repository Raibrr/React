import { useState } from "react"

export const AddCategorie = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({target}) => {
      setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;
    //setCategories((prevCategories) => [inputValue, ...prevCategories])
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        value={inputValue}
        type="text"
        placeholder="Buscar Gift"
        onChange={onInputChange}
      />
    </form>
    )
}