import React from "react";

const DeleteProduct = ({ product, onConfirm, onClose }) => {
  return (
    <div>
      <h2>Are you sure you want to delete this product?</h2>
      <div>
        <p>Product Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      <div>
        <button type="button" onClick={() => onConfirm(product.id)}>
          Confirm
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteProduct;
