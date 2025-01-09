import "./ProductTable.css";
import React from "react";

const ProductTable = ({ products, addProduct, editProduct, deleteProduct }) => {
  const handleDelete = (product) => {
    deleteProduct(product);
  };

  return (
    <div className="Container">
      <h2>Product Data</h2>
      <div className="table-container">
        <button className="btn btn-add" onClick={addProduct}>
          Add New Product
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => editProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
