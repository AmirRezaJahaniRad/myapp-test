import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthButton , AuthInput } from "../../components/index"
import AuthLayout from "../../layouts/AuthLayout";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { checkUser } from '../../services/axios.ts'
import {toast} from "react-toastify"
import {type loginFormProps } from "../../services/axios.ts"


const LoginPage: React.FC = () => {
  const form = useForm<loginFormProps>({
      defaultValues: {
        usercode : "",
        password : "",
      }, 
      mode: "onTouched",
     });

  const { register , control , handleSubmit , formState ,reset} = form;
  const {errors , isDirty} = formState; 

  
  const CheckingID = async (data:loginFormProps) => {
    try {
      const res = await checkUser(data)
    if (res.status == 200) {
      toast.success("با موفقیت وارد شدید")
      setTimeout(() => { console.log("ok")} ,3000)
      reset()
    }
    }
    catch {
      toast.error("مجدد امتحان کنید");
      reset()
    }
  }

  const onSubmit = (data : loginFormProps) => {
    if (isDirty) {
      CheckingID(data)
    }
    else {
      toast.error("لطفا تیک قوانین را بزنید")
    }}

  return (
    <>
    <AuthLayout>
      <Typography variant="h5" className="mb-6 font-bold text-center">
            ورود
          </Typography>

          <Box component="form" noValidate autoComplete="off" className="space-y-4 w-1/2" onSubmit={handleSubmit(onSubmit)}>
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

            <AuthButton>ورود</AuthButton>
          </Box>



          {/* لینک‌ها */}
          <div className="flex w-1/2 justify-between mt-4 text-sm">
            <Link to="/register" className="authLink">
              ثبت نام
            </Link>
            <Link to="/forgot-password" className="authLink">
              فراموشی رمز عبور
            </Link>
          </div>
    </AuthLayout>
    <DevTool control={control}/>
    </>
  );
};

export default LoginPage;