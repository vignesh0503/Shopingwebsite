import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const ProductMangeMent = () => {
  const loadProducts = () => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  };

  const [products, setProducts] = useState(loadProducts);
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false);
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);
  const [isDeleteProductOpen, setIsDeleteProductOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addProduct = (newProduct) => {
    const nextId = products.length + 1;
    const updatedProduct = { ...newProduct, id: nextId };
    setProducts([...products, updatedProduct]);
    setIsCreateProductOpen(false);
  };

  const editProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditProductOpen(false);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
    setIsDeleteProductOpen(false);
  };

  return (
    <div>
      <ProductTable
        products={products}
        addProduct={() => setIsCreateProductOpen(true)}
        editProduct={(product) => {
          setProductToEdit(product);
          setIsEditProductOpen(true);
        }}
        deleteProduct={(product) => {
          setProductToDelete(product);
          setIsDeleteProductOpen(true);
        }}
      />

      {/* Modal for CreateProduct */}
      {isCreateProductOpen && (
        <div className="modal">
          <div className="modal-content">
            <CreateProduct
              onClose={() => setIsCreateProductOpen(false)}
              onAddProduct={addProduct}
            />
          </div>
        </div>
      )}

      {/* Modal for EditProduct */}
      {isEditProductOpen && productToEdit && (
        <div className="modal">
          <div className="modal-content">
            <EditProduct
              product={productToEdit}
              onSubmit={editProduct}
              onClose={() => setIsEditProductOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Modal for DeleteProduct  */}
      {isDeleteProductOpen && productToDelete && (
        <div className="modal">
          <div className="modal-content">
            <DeleteProduct
              product={productToDelete}
              onConfirm={deleteProduct}
              onClose={() => setIsDeleteProductOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMangeMent;
