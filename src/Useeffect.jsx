import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products using Axios
    axios
      .get('https://jsonplaceholder.typicode.com/todos') // Replace this with your actual API endpoint
      .then((response) => {
        setProducts(response.data); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> {/* Assuming the product has a title */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
