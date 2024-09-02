import { useState } from "react"
import { AddCategorie, GifGrid } from "./components"

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One punch'])

  const onAddCategorie = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
  <>
    <h1>GiftExpertApp</h1>
    <AddCategorie onNewCategory={ onAddCategorie }/>
    {
      categories.map(item => <GifGrid key={item} category={item}/>)
    }
  </>
  )
}
