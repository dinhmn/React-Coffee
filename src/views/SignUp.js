import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/admin/button/Button";
import FormGroup from "../components/admin/form/FormGroup";
import Input from "../components/admin/input/Input";

const Login = styled.div`
  background-image: url("https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
`;

const SignUp = () => {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const handleChangeUser = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
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
    <Login>
      <div className="flex flex-col justify-center items-start m-10 gap-5 w-[40%] h-[80%] rounded-lg bg-slate-700 bg-opacity-60 p-10">
        <h5 className="text-slate-200 text-sm uppercase tracking-[3px]">
          START FOR FREE
        </h5>
        <h1 className="text-[40px] font-bold">
          Create new account<span className="text-blue-600">.</span>
        </h1>
        <small className="text-[12px] tracking-widest">
          Already a memeber?{" "}
          <NavLink to="/signIn" className="text-blue-400">
            Log in
          </NavLink>
        </small>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-5 w-full"
        >
          <div className="flex justify-center items-center gap-10 w-full">
            <FormGroup
              control={control}
              handleChangeUser={handleChangeUser}
              value={user.firstName}
              name="firstName"
            >
              First name
            </FormGroup>
            <FormGroup
              control={control}
              handleChangeUser={handleChangeUser}
              value={user.lastName}
              name="lastName"
            >
              Last name
            </FormGroup>
          </div>
          <FormGroup
            control={control}
            handleChangeUser={handleChangeUser}
            value={user.email}
            name="email"
          >
            Email
          </FormGroup>
          <FormGroup
            control={control}
            handleChangeUser={handleChangeUser}
            value={user.username}
            name="username"
          >
            Username
          </FormGroup>
          <FormGroup
            control={control}
            handleChangeUser={handleChangeUser}
            value={user.password}
            name="password"
            type="password"
          >
            Password
          </FormGroup>
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
