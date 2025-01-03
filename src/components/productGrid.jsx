import React from "react";
import "../styles/App.css";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "/images/brown-stripes.jpg",
      title: "Dark Brown High Neck Stripes Sweater",
      price: "INR 1,399",
    },
    {
      id: 2,
      image: "/images/green-stripes.jpg",
      title: "Dark Green High Neck Stripes Sweater",
      price: "INR 1,399",
    },
    {
      id: 3,
      image: "/images/cargo-pants.jpg",
      title: "Khaki Relaxed Fit Multi-Pocket Cargo",
      price: "INR 1,499",
    },
    {
      id: 4,
      image: "/images/khaki-shirt.jpg",
      title: "Khaki Slim Fit Shirt",
      price: "INR 999",
    },
  ];

  return (
    <main className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  );
};

export default ProductGrid;
