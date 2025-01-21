import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [todo, setTodo] = useState(null); // State to store the todo item
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch todo using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setTodo(response.data); // Set the todo item in state
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Product</h1>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : (
        <div>
          <h2>{todo?.title}</h2> {/* Display todo title */}
          <p>Status: {todo?.completed ? "Completed" : "Not Completed"}</p> {/* Display completion status */}
        </div>
      )}
    </div>
  );
};

export default Header;