import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ImageService from "../../services/ImageService";
import ProductService from "../../services/ProductService";
import Button from "../button/Button";
import InputProduct from "../input/InputProduct";

const UpdateImageProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [multipleFile, setMultipleFile] = useState([]);
  const [preview, setPreview] = useState();
  const [previewMultiple, setPreviewMultiple] = useState([]);
  console.log(id);
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

  const handleChangeUploadImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  var fileObj = [];
  var fileArray = [];
  const handleChangeUploadMultipleImages = (e) => {
    // e.preventDefault();
    if (!e.target.files) return;
    setMultipleFile([...multipleFile, ...e.target.files]);
    const selectedFile = [];
    const targetFiles = e.target.files;
    const targetFileObject = [...targetFiles];
    targetFileObject.map((file) => {
      return selectedFile.push(URL.createObjectURL(file));
    });

    setPreviewMultiple(selectedFile);
  };

  const updateImages = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    for (const key of Object.keys(multipleFile)) {
      formData.append("files", multipleFile[key], multipleFile[key].name);
    }
    // console.log(product);
    // console.log(product.at(product.length - 1));
    formData.append("id", id);
    ImageService.updateImageById(formData, id)
      .then((response) => {})
      .catch((error) => {});
    navigate("/product");
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
        Add Image Product
      </p>
      <InputProduct
        label="Image"
        name="fileImage"
        control={control}
        handleChangeProduct={handleChangeUploadImage}
        type="file"
      ></InputProduct>
      <div className="object-cover w-[500px] h-auto m-auto">
        <img src={preview} alt="" />
        {/* product.length>0 ? product. : */}
      </div>
      <InputProduct
        label="Product Image"
        name="multipleImage"
        control={control}
        handleChangeProduct={handleChangeUploadMultipleImages}
        type="file"
        multiple="multiple"
      ></InputProduct>
      <div>
        {multipleFile.map((url) => {
          <img src={url} alt="" />;
        })}
      </div>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={updateImages}
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

export default UpdateImageProduct;
