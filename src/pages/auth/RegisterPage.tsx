import React from "react";
import { Typography, Box, FormControlLabel, Checkbox } from "@mui/material";
import { AuthButton , AuthInput } from "../../components/index"
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import AuthLayout from "../../layouts/AuthLayout";
import { createUser } from '../../services/axios.ts'
import { type formInputProps } from "../../services/axios.ts";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const RegisterPage: React.FC = () => {

  const form = useForm<formInputProps>({
    defaultValues: {
      username : "",
      phonenumber : "",
      email : "",
      usercode : "",
      password : "",
      repassword : "",
      rulesCheck : false
    }, 
    mode: "onTouched",
   });
  const { register , control , handleSubmit , formState ,watch,reset} = form;
  const {errors} = formState; 
  const password = watch("password");  

  const CreatingUser = async (data:formInputProps) => {
    try {
      const res = await createUser(data)
      if (res.status == 201) {
      toast.success("کاربر با موفقیت اضافه شد")
      reset()
      setTimeout(() => {<Navigate to="/login" replace />} ,3000)
      }
    }
   catch {
     toast.error("مجدد امتحان کنید");
     reset();
   }
  }
  const onSubmit = (data : formInputProps) => {
    if (data.rulesCheck == true) {
      CreatingUser(data)
    }
    else {
      toast.error("لطفا تیک قوانین را بزنید")
    }
  }

  return (
    <>
    <AuthLayout>
        <Typography variant="h5" className="mb-6 font-bold text-center">
            ثبت نام
          </Typography>

          <Box component="form" noValidate autoComplete="off" className="space-y-4 w-1/2 font-light" onSubmit={handleSubmit(onSubmit)}>
            <AuthInput label="نام کامل" id="username" inputMode="text" type="text" register={register("username",{
              required: "نام کامل خود را وارد کنید",
              minLength: {
                value : 5,
                message : "حداقل 5 کارکتر وارد کنید"
              },
              maxLength:100
            })}/>
            <p className="authErrorMessage">{errors.username?.message}</p>
            <AuthInput label="شماره موبایل" id="phonenumber" inputMode="numeric" type="text" register={register("phonenumber",{
              required: "شماره تلفن خود را وارد کنید",
              validate: (fieldValue) => {
                if (fieldValue.startsWith("09")) {
                  return true 
                }
                else {
                  return "شماره موبایل باید عددی و با 09 شروع شود"
                }
              },
              maxLength:{
                value : 11,
                message : "حداکثر 11 کارکتر وارد کنید"
              },
            })} />
            <p className="authErrorMessage">{errors.phonenumber?.message}</p>
            <AuthInput label="ایمیل" id="email" type="email" register={register("email",{
              pattern: {
                value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ایمیل را بدرستی وارد کنید"
              }
            })}/>
            <p className="authErrorMessage">{errors.email?.message}</p>
            <AuthInput label="نام کاربری" id="usercode" type="text" register={register("usercode", {
              required: "نام کاربری خود را وارد کنید",
              maxLength:100,
              pattern:{
                value: /^[A-Za-z0-9آ-ی]+$/ ,
                message: "فقط اعداد و حروف مجاز است"
                
              }
            })}/>
            <p className="authErrorMessage">{errors.usercode?.message}</p>
            <AuthInput label="رمز عبور" type="password" id="password"  register={register("password", {
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
            <p className="authErrorMessage">{errors.password?.message}</p>
            <AuthInput label="تکرار رمز عبور" type="password" id="repassword" register={register("repassword",{
              required: "رمز عبور خود را مجددا وارد کنید",
              validate : (value) => {
                return value === password || "رمز عبور مطابقت ندارد"
              }
            })}/>
            <p className="authErrorMessage">{errors.repassword?.message}</p>
            <div className="flex justify-end mb-2">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="پذیرش قوانین"
              dir="rtl"
              id="rulesCheck"
              {...register("rulesCheck")}
            />
            </div>

            <AuthButton >ثبت</AuthButton>
          </Box>
    </AuthLayout>
    <DevTool control={control}/>
    </>
  );
};

export default RegisterPage;