import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

import { Typography } from "@mui/material";
import { checkIdByUserName } from '../../lib/authAxios.ts'
import { AuthButton , AuthInput } from "../../components/index"; 
import AuthLayout from "../../layouts/AuthLayout";

type ForgotPassword = {
  usercode : string
}

const ForgotPasswordPage: React.FC = () => {

 const form = useForm({
    defaultValues: {
      usercode : "",
    }, 
    mode: "all",
   });

  const { register , handleSubmit , formState } = form;
  const { errors } = formState; 
  const navigate = useNavigate();

  const onSubmit = async (data : ForgotPassword) => {
    const { status , headers } = await checkIdByUserName(data.usercode);
    if (status == 200) {
      localStorage.setItem("token" , JSON.stringify(headers.Authorization))
      toast.success("با موفقیت وارد شدید!")
      setTimeout(() => {
        navigate("/reAssignPassword")
      } , 5000)
    }
    else {
      toast.error("نام کاربری وجود ندارد!")
    }
  }

  return (
    <AuthLayout>
      <Typography variant="h6" className="mb-10 font-bold text-center">
            فراموشی رمز عبور
          </Typography>

          <form noValidate autoComplete="off" className="space-y-4 w-1/2" onSubmit={handleSubmit(onSubmit)}>
              <AuthInput label="نام کاربری" id="usercode" type="text" register={register("usercode", {
              required: "نام کاربری خود را وارد کنید",
              maxLength:100,
              pattern:{
                value: /^[A-Za-z0-9آ-ی]+$/ ,
                message: "فقط اعداد و حروف مجاز است"
                
              }
            })}/>
            <p className="authErrorMessage">{errors.usercode?.message}</p>

            <AuthButton type="submit">ارسال لینک بازیابی</AuthButton>
          </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;