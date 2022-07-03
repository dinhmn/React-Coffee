import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CategoriesService from "../../services/CategoriesService";
import ProductService from "../../services/ProductService";
import Button from "../button/Button";
import InputProduct from "../input/InputProduct";
import TextareaProduct from "../textarea/TextareaProduct";

const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [cate, setCate] = useState(null);

  const navigate = useNavigate();
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
  const [file, setFile] = useState({
    // fileImage: "",
  });
  const handleChangeCate = (e) => {
    setCate(e.target.value);
    // category.forEach((element) => {
    //   if (element.id == cate) {
    //     setProduct({ ...product, categories: element });
    //     // setTam(element);
    //   }
    // });
  };
  // console.log(cate);
  const handleChangeProduct = (e) => {
    const value = e.target.value;

    // setProduct({ ...product, categoryId: cate });
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleChangeUploadImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  const saveProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("file", file, file.name);

    ProductService.saveProduct(product, file)
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
      // categories: {},
      categoryId: "",
    });
    setFile({});
    // navigate("/product/add/images");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[1280px] mx-auto my-10"
      method="post"
      encType="multipart/form-data"
      action="/"
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
      <InputProduct
        label="Image"
        name="fileImage"
        control={control}
        handleChangeProduct={handleChangeUploadImage}
        type="file"
      ></InputProduct>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={saveProduct}
        >
          Add
        </Button>
        <Button
          className="px-3 py-4 bg-red-500 hover:bg-red-700 "
          //   onClick={handleResetEmployee}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;
