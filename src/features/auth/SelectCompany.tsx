import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import { AuthButton , CustomeSelect } from "../../components/index"; 
import AuthLayout from "../../layouts/AuthLayout";
import {getCompanyNames, sendCompanyNames} from "../../lib/authAxios";

type FormValues = {
  selectComapny : string,
}

type Company = {
    id : number;
    name : string;
}

const SelectCompany : React.FC = () => {
 const navigate = useNavigate();
 const [companies , setCompanies] = useState<Company[]>([]);
 const [loading , setLoading] = useState(false);
 const { register , handleSubmit , formState:{errors}} =  useForm<FormValues>();

 useEffect(()=>{
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const res = await getCompanyNames();
        setCompanies(res.data?.companies ?? res.data ?? []);
      }
      catch (error) {
        console.log("Error fetching companies" , error );
      }
      finally {
        setLoading(false);
      }
    };  
    fetchCompanies();
 },[]); 


  const onSubmit = ( data : FormValues ) => {
    const sendCompanies = async () => {
      try {
        const res = await sendCompanyNames(data.selectComapny)
        if (res.status == 200) {
          navigate("/mainDash");
        }
      }
      catch(error) {
        console.log("ERROR SENDING DATA TO SERVER _ SELECT COMPANY COMP" , error);
      }
    }
    sendCompanies()
  }

  return (
    <AuthLayout>
      <Typography variant="h6" className="mb-10 font-bold text-center">
          انتخاب شرکت
          </Typography>

          <form noValidate autoComplete="off" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <CustomeSelect label="نام شرکت" register={register("selectComapny" , {
              required : "یک مورد را انتخاب کنید",
            })} error={!!errors.selectComapny} helperText={errors.selectComapny?.message} options={companies?.map((c) => (
              { value : c.id , label : c.name}
            ))} loading={loading} 
            />
            <AuthButton type="submit">ورود</AuthButton>
          </form>
    </AuthLayout>
  );
};

export default SelectCompany;
