import React, { useState, useEffect } from "react";

const EditProduct = ({ product, onSubmit, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUpdatedProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file); // Converts the file to a Base64 string
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(updatedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={updatedProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {updatedProduct.image && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={updatedProduct.image}
              alt="Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
