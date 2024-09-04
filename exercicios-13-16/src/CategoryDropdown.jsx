import { useEffect, useState } from "react"

const CategoryDropdown = ( {onCategoryChange} ) =>{
    const [categories,setCategories] = useState([])
    const [error,setError] = useState(null)

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => setError(error.message))
    },[])

    if(error){
        return <p>Erro: {error}</p>
      }

    return(
        <select onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            {categories.map(category =>(<option key={category} value={category}>{category}</option>
            ))}
        </select>
        )

}

export default CategoryDropdown