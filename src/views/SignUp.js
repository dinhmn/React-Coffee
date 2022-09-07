import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/admin/button/Button";
import Input from "../components/admin/input/Input";
// https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

const Login = styled.div`
  background-image: url("https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignUp = () => {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeUser = (e) => {};
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <Login>
      <div className="flex flex-col justify-center items-center m-10 gap-5 w-[50%] h-[90%] rounded-lg bg-slate-700 bg-opacity-70 p-10">
        <h5 className="text-slate-200 text-sm uppercase tracking-[3px]">
          START FOR FREE
        </h5>
        <h1 className="text-[40px] font-bold">
          Create new account<span className="text-blue-600">.</span>
        </h1>
        <small className="text-[12px] tracking-widest">
          Already a memeber?{" "}
          <a href="#" className="text-blue-400">
            Log in
          </a>
        </small>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex justify-center items-center gap-5">
            <div className="form-group">
              <Input
                name="firstName"
                placeholder="Enter your first name"
                id="firstName"
                control={control}
                type="text"
                className="text-white bg-slate-700 border-0 w-[200px]"
                value=""
                onChange={handleChangeUser}
              />
            </div>
            <div className="form-group">
              <label></label>
              <Input
                name="lastName"
                placeholder="Enter your last name"
                id="lastName"
                control={control}
                type="text"
                className="text-white bg-slate-700 border-0 w-[200px]"
                value=""
                onChange={handleChangeUser}
              />
            </div>
          </div>
          <div className="form-group w-full">
            <Input
              name="email"
              placeholder="Enter your last name"
              id="email"
              control={control}
              type="text"
              className="text-white bg-slate-700 border-0 w-full"
              value=""
              onChange={handleChangeUser}
            />
          </div>
          <div className="form-group w-full">
            <Input
              name="password"
              placeholder="Enter your last name"
              id="password"
              control={control}
              type="text"
              className="text-white bg-slate-700 border-0 w-full"
              value=""
              onChange={handleChangeUser}
            />
          </div>
          <div className="flex gap-2 w-full">
            <Button className="text-base px-5 py-3 rounded-full bg-slate-500 hover:bg-slate-600 transition-all">
              Change method
            </Button>
            <Button className="text-base px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-600 transition-all">
              Create account
            </Button>
          </div>
        </form>
      </div>
      <div></div>
    </Login>
  );
};

export default SignUp;
