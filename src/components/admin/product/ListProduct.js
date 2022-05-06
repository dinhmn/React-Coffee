import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/ProductService";
import Product from "./Product";

const ListProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/product/add");
  };
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllProduct();
        setProduct(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  const deleteProduct = (e, id) => {
    e.preventDefault();
    ProductService.deleteProduct(id).then((res) => {
      if (product) {
        setProduct((prev) => {
          return prev.filter((product) => product.id !== id);
        });
      }
    });
  };
  const editProduct = (e, id) => {
    e.preventDefault();
    navigate(`/product/edit/${id}`);
  };
  return (
    <div className="w-full h-full mx-auto my-8">
      <div className="flex w-full h-auto py-3 text-lg gap-x-5">
        <span>Home</span> <span>Product</span>
      </div>
      <div className="h-12">
        <button
          className="px-6 py-2 font-semibold text-white rounded bg-slate-600"
          style={{ fontSize: "16px" }}
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="flex mt-5 border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Short Desc
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Price Sale
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Quantity
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Created Date
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-center text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {product.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  // eslint-disable-next-line no-undef
                  deleteProduct={deleteProduct}
                  // eslint-disable-next-line no-undef
                  editProduct={editProduct}
                ></Product>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
