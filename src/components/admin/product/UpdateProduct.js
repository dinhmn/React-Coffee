import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesService from "../../services/CategoriesService";
import ProductService from "../../services/ProductService";
import Button from "../button/Button";
import InputProduct from "../input/InputProduct";
import TextareaProduct from "../textarea/TextareaProduct";

const UpdateProduct = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [cate, setCate] = useState(null);
  const [tam, setTam] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState({});
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    priceSale: "",
    shortDescription: "",
    detailsDescription: "",
    categoryId: "",
    quantity: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoriesService.getCategory();
        setCategory(response.data);
        setCate(product.categoryId);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, [product.categoryId]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(id);
        setProduct(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleChangeCate = (e) => {
    setCate(e.target.value);
  };

  const handleChangeProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  console.log(file);
  const updateProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    ProductService.updateProductById(product, id)
      .then((response) => {})
      .catch((error) => {});
    setProduct({
      id: "",
      title: "",
      price: "",
      priceSale: "",
      shortDescription: "",
      detailsDescription: "",
      quantity: "",
      categoryId: "",
    });
    setFile({});
    navigate(`/product/edit/images/${id}`);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[1280px] mx-auto my-10"
    >
      <p className="mb-3 text-4xl font-bold text-center text-gray-200">
        Add Product
      </p>
      <div className="gap-y-3">
        <label htmlFor="categoryId mb-3">Category</label>
        <select
          name="categoryId"
          id="categoryId"
          className="w-full p-4 mt-3 mb-3 text-black transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-blue-500"
          onChange={handleChangeProduct}
          // onChange={(e) => setCate(e.target.value)}
          // onChange={handleChangeCate}
        >
          {!loading &&
            category.map((cat) => (
              <option
                value={cat.id}
                key={cat.id}
                className="p-4 text-black transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-blue-500"
              >
                {cat.categoriesName}
              </option>
            ))}
        </select>
      </div>
      <InputProduct
        name="title"
        label="Title"
        control={control}
        value={product.title}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="price"
        label="Price"
        control={control}
        value={product.price}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="priceSale"
        label="Price Sale"
        control={control}
        value={product.priceSale}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="quantity"
        label="Quantity"
        control={control}
        value={product.quantity}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        label="Short Description"
        name="shortDescription"
        control={control}
        value={product.shortDescription}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <TextareaProduct
        label="Details Description"
        name="detailsDescription"
        control={control}
        value={product.detailsDescription}
        handleChangeProduct={handleChangeProduct}
      ></TextareaProduct>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={updateProduct}
        >
          Update
        </Button>
        <Button
          className="px-3 py-4 bg-red-500 hover:bg-red-700 "
          onClick={() => {
            navigate("/product");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UpdateProduct;
