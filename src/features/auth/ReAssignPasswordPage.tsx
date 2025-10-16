import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

import { Typography } from "@mui/material";
import { AuthButton , AuthInput } from "../../components/index"; 
import AuthLayout from "../../layouts/AuthLayout";
import { updateUserPass } from '../../lib/authAxios';

type ForgotPassword = {
  newPassword : string
  passwordChecker : string
}


const ReAssignPasswordPage: React.FC = () => {
 const token = localStorage.getItem("token")
 const form = useForm({
    defaultValues: {
      newPassword : "",
      passwordChecker : "",
    }, 
    mode: "all",
   });

  const { register , handleSubmit , formState , watch } = form;
  const { errors } = formState; 
  const navigate = useNavigate();
  const password = watch("newPassword");  

  const onSubmit = async (data : ForgotPassword) => {
    if (data.newPassword === data.passwordChecker) {
        const { status } = await updateUserPass( data.newPassword , JSON.stringify(token));
        if (status == 200) {
            toast.success("رمز عبور با موفقیت تغییر کرد");
            setTimeout(() => navigate("/login"),5000);
        }
        else {
            toast.error("دوباره تلاش کنید!")
        }
    }
  }

  return (
    <AuthLayout>
      <Typography variant="h6" className="mb-10 font-bold text-center">
          تنظیم رمز عبور جدید
          </Typography>

          <form noValidate autoComplete="off" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              <AuthInput label=" رمز عبور جدید" type="password" id="newPassword"  register={register("newPassword", {
                            required: "رمز عبور خود را وارد کنید",
                            minLength:{
                              value : 8,
                              message : "حداقل 8 کارکتر وارد کنید"
                            },
                            maxLength:{
                              value : 16,
                              message : "حداکثر 16 کارکتر وارد کنید"
                            },
                            pattern: {
                            value: /^(?=.*[A-Za-zآ-ی])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
                            message: "رمز عبور باید حداقل ۸ کاراکتر و شامل یک حرف، یک عدد و یک کاراکتر خاص باشد",}
                          })} />
                          <p className="authErrorMessage">{errors.newPassword?.message}</p>
                          <AuthInput label="تکرار رمز عبور" type="password" id="passwordChecker" register={register("passwordChecker",{
                            required: "رمز عبور خود را مجددا وارد کنید",
                            validate : (value) => {
                              return value === password || "رمز عبور مطابقت ندارد"
                            }
                          })}/>
                          <p className="authErrorMessage">{errors.passwordChecker?.message}</p>

            <AuthButton type="submit">ارسال لینک بازیابی</AuthButton>
          </form>
    </AuthLayout>
  );
};

export default ReAssignPasswordPage;