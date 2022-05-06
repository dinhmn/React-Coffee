import React from "react";
import Textarea from "./Textarea";

const TextareaProduct = ({
  label,
  name,
  handleChangeProduct,
  control,
  value,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <Textarea
        name={name}
        placeholder={`Enter your ${label}`}
        id={name}
        control={control}
        className="text-black w-[1000px]"
        value={value}
        onChange={handleChangeProduct}
        {...props}
      ></Textarea>
    </div>
  );
};

export default TextareaProduct;
