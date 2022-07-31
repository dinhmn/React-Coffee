import React from "react";
import AddCategory from "./components/admin/CommonAdd/AddCategory";
import Topbar from "./components/Sidebar/Topbar";
import { Route, Routes } from "react-router-dom";
import UpdateCategory from "./components/admin/CommonUpdate/UpdateCategory";
import Navigation from "./components/admin/Navigation";
import AddProduct from "./components/admin/CommonAdd/AddProduct";
import UpdateProduct from "./components/admin/CommonUpdate/UpdateProduct";
import ListCategory from "./components/admin/CommonList/ListCategory";
import ListProduct from "./components/admin/CommonList/ListProduct";

const Admin = () => {
  return (
    <div className="h-full">
      <Topbar></Topbar>
      <div className="flex shadow-md">
        <div className={`bg-white`}>
          <Navigation></Navigation>
        </div>
        <div className="flex flex-col w-full m-10">
          <Routes>
            <Route path="/">
              <Route
                path="/category"
                element={<ListCategory></ListCategory>}
              ></Route>
              <Route
                path="/addCategory"
                element={<AddCategory></AddCategory>}
              ></Route>
              <Route
                path="/editCategory/:id"
                element={<UpdateCategory></UpdateCategory>}
              ></Route>
              <Route
                path="/product"
                element={<ListProduct></ListProduct>}
              ></Route>
              <Route
                path="/product/add"
                element={<AddProduct></AddProduct>}
              ></Route>
              <Route
                path="/product/edit/:id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
              <Route path="/contact" element={<div>Contact</div>}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
