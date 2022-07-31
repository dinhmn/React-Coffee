import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesService from "../../services/CategoriesService";
import Button from "../button/Button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";

const UpdateCategory = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: "",
    categoriesName: "",
    title: "",
    description: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoriesService.getCategoryById(id);
        setCategory(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(category);
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };
  const saveCategories = (e) => {
    e.preventDefault();
    CategoriesService.updateCategory(category, id)
      .then((response) => {})
      .catch((error) => {});
    navigate("/category");
  };
  const handleResetEmployee = (e) => {
    e.preventDefault();
    setCategory({
      id: "",
      categoriesName: "",
      title: "",
      description: "",
    });
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
        Update category
      </p>
      <div className="flex flex-col w-full gap-3 mb-5">
        <label htmlFor="categoriesName" className="cursor-pointer">
          Category name
        </label>
        <Input
          name="categoriesName"
          placeholder="Enter your category name"
          id="categoriesName"
          control={control}
          type="text"
          className="text-black w-[1000px]"
          value={category.categoriesName}
          onChange={handleFilterChange}
        ></Input>
        {/* <p className="text-sm text-red-500">Please enter your username</p> */}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="title" className="cursor-pointer">
          Title
        </label>
        <Input
          name="title"
          placeholder="Enter your title"
          id="title"
          control={control}
          type="text"
          className="text-black w-[1000px]"
          value={category.title}
          onChange={handleFilterChange}
        ></Input>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="description" className="cursor-pointer">
          Description
        </label>
        <Textarea
          name="description"
          placeholder="Enter your description"
          id="description"
          control={control}
          className="text-black w-[1000px]"
          value={category.description}
          onChange={handleFilterChange}
        ></Textarea>
      </div>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={saveCategories}
        >
          Update
        </Button>
        <Button
          className="px-3 py-4 bg-red-500 hover:bg-red-700"
          onClick={() => {
            navigate("/category");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UpdateCategory;
