import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type AuthInputProps = TextFieldProps & {
  register?: UseFormRegisterReturn;}

const AuthInput: React.FC<AuthInputProps> = ({  register , ...props}) => {
  return (
    <div className="my-3 w-full">
        <TextField
        {...props}
        variant="outlined"
        size="small"
        dir="rtl"
        fullWidth
        inputRef={register?.ref}
        name={register?.name}
        onChange={register?.onChange}
        onBlur={register?.onBlur}
        />
    </div>
  );
};

export default AuthInput;