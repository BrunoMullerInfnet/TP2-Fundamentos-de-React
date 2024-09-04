import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import CategoryDropdown from "./CategoryDropdown";

const UserList = () =>{
    const [users,setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [error,setError] = useState(null)
    const [products,setProducts] = useState([])


    useEffect(()=>{
        fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => setError(error.message))
    },[])

    const handleUserClick = (userId) =>{
        fetch(`https://fakestoreapi.com/users/${userId}`)
        .then(response => response.json())
        .then(data => setSelectedUser(data))
        .catch(error => console.error('Error ao consumir a API', error))
    }

    const handleCategoryChange = (category) =>{
        if (!category) return

        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => response.json())
        .then(data=> setProducts(data))
        .catch(error => setError(error.message))
    }

    if(error){
        return <p>Erro: {error}</p>
      }

    return(
        <div>
            <CategoryDropdown onCategoryChange={handleCategoryChange}/>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => handleUserClick(user.id)}>
                        {user.name.firstname} {user.name.lastname}
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <UserDetails user = {selectedUser} />
            )}
            <div>
                <h2>Produtos:</h2>
                <ul>
                    {products.map(product =>(
                        <li key = {product.id}>
                            {product.title} - ${product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        )

}

export default UserList