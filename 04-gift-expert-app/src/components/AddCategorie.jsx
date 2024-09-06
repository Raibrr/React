import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategorie = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
      setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;
    //setCategories((prevCategories) => [inputValue, ...prevCategories])
    setInputValue('')
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        value={inputValue}
        type="text"
        placeholder="Buscar Gift"
        onChange={onInputChange}
      />
    </form>
    )
}

AddCategorie.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}