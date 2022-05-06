import React, { useEffect, useState } from "react";
import { Navigate, parsePath, useNavigate } from "react-router-dom";
import CategoriesService from "../../services/CategoriesService";
import Category from "./Category";

const CategoryList = () => {
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate("/addCategory");
  };
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const deleteCategory = (e, id) => {
    e.preventDefault();
    CategoriesService.deleteCategory(id).then((res) => {
      if (category) {
        setCategory((prev) => {
          return prev.filter((category) => category.id !== id);
        });
      }
    });
  };
  const editCategory = (e, id) => {
    e.preventDefault();
    navigate(`/editCategory/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoriesService.getCategory();
        setCategory(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full mx-auto my-8">
      <div className="flex w-full h-auto py-3 text-lg gap-x-5">
        <span>Home</span> <span>Category</span>
      </div>
      <div className="h-12">
        <button
          className="px-6 py-2 font-semibold text-white rounded bg-slate-600"
          style={{ fontSize: "16px" }}
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
      <div className="flex mt-5 border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Category name
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Created Date
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {category.map((cate) => (
                <Category
                  cate={cate}
                  key={cate.id}
                  deleteCategory={deleteCategory}
                  editCategory={editCategory}
                ></Category>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
