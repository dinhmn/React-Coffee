import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import InputProduct from "../../input/InputProduct";

const AddProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    id: "",
    name: "",
  });
  const [file, setFile] = useState({});
  const navigate = useNavigate();
  const handleChangeProduct = (e) => {
    const value = e.target.value;
    e.preventDefault();
    setFile(e.target.files[0]);
    // setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("profile", profile);
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
      method="post"
    >
      <p className="mb-3 text-4xl font-bold text-center text-gray-200">
        Add Profile
      </p>
      <InputProduct
        name="name"
        label="Name"
        control={control}
        value={profile.name}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        label="Image"
        name="fileImage"
        control={control}
        handleChangeProduct={handleChangeProduct}
        type="file"
      ></InputProduct>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          //   onClick={saveProduct}
        >
          Add
        </Button>
        <Button className="px-3 py-4 bg-red-500 hover:bg-red-700 ">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddProfile;
