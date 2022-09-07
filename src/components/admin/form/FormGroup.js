import React from "react";
import Input from "../input/Input";

const FormGroup = ({ control, handleChangeUser, children, props }) => {
  return (
    <div className="form-group">
      <label>{children}</label>
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
  );
};

export default FormGroup;
