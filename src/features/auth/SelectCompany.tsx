/*
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

import { Typography } from "@mui/material";
import { AuthButton , AuthInput } from "../../components/index"; 
import AuthLayout from "../../layouts/AuthLayout";


const SelectCompany : React.FC = () => {
  
 const form = useForm({
    mode: "all",
   });

  const { register , handleSubmit , formState } = form;
  const { errors } = formState; 
  const navigate = useNavigate();

  const onSubmit = () => {
  }

  return (
    <AuthLayout>
      <Typography variant="h6" className="mb-10 font-bold text-center">
          انتخاب شرکت
          </Typography>

          <form noValidate autoComplete="off" className="space-y-4 w-1/2" onSubmit={handleSubmit(onSubmit)}>

            <AuthButton type="submit">ورود</AuthButton>
          </form>
    </AuthLayout>
  );
};

export default SelectCompany;
*/