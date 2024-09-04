import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((products) => (
          <li key={products.id}>
            <h2>{products.title}</h2>
            <p>{products.description}</p>
            <p>Price: {products.price}</p>
            <img src={products.image} alt={products.title} width="100"></img>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
