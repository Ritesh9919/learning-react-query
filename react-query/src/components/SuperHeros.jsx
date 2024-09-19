import { useState, useEffect } from "react";
import axios from "axios";

function SuperHeros() {
  const [heros, setHeros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superHeros")
      .then((data) => {
        setHeros(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {heros.map((hero) => (
        <p>{hero.name}</p>
      ))}
    </div>
  );
}

export default SuperHeros;
