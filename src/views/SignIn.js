import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/admin/button/Button";
import Checkbox from "../components/admin/checkbox/Checkbox";
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

const SignIn = () => {
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
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
        <h1 className="text-[40px] font-bold">
          Sign in to The coffee<span className="text-blue-600">.</span>
        </h1>

        <div className="flex justify-center items-center gap-5 w-full">
          <div className="py-2 px-3 bg-red-500 font-bold tracking-widest w-[110px] text-center text-white rounded-[4px]">
            Google
          </div>
          <div className="py-2 px-3 bg-blue-600 font-bold tracking-widest w-[110px] text-center text-white rounded-[4px]">
            Facebook
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[400px] h-[2px] bg-slate-400"></div>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-start gap-5 w-full"
        >
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
          <Checkbox check={check} setCheck={setCheck}></Checkbox>
          <small className="text-[12px] tracking-widest ml-3">
            Do you have an new account?{" "}
            <NavLink to="signUp" className="text-blue-400">
              Sign Up
            </NavLink>
          </small>
          <div className="flex gap-2 w-full">
            <Button className="text-base px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all">
              Log In
            </Button>
          </div>
        </form>
      </div>
      <div></div>
    </Login>
  );
};

export default SignIn;
