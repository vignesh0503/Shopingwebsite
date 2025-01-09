import React, { useState } from "react";

const CreateProduct = ({ onClose, onAddProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: null,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.image) {
      alert("Please provide an image name");
      return;
    }
    onAddProduct({
      ...product,
      id: Date.now(),
    });
    setProduct({ id: "", name: "", price: "", image: null });
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {product.image && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={product.image}
              alt="Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}
        <button type="submit">Add Product</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;






