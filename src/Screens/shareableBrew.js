import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShareableBrew = () => {
  const { slug } = useParams(); // Extract slug from URL
  console.log("Slug received:", slug); // Log slug to verify

  const [brew, setBrew] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrew = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/getBrew/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch brew");
        }
        const data = await response.json();
        setBrew(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBrew();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!brew) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      kslakslkasklak
      <h1>{brew.title}</h1>
      <p>{brew.description}</p>
    </div>
  );
};

export default ShareableBrew;
