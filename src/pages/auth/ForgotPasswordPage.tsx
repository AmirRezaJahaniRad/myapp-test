import React from "react";
import { Typography, Box } from "@mui/material";
import { AuthButton , AuthInput } from "../../components/index"
import AuthLayout from "../../layouts/AuthLayout";

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <Typography variant="h6" className="mb-10 font-bold text-center">
            فراموشی رمز عبور
          </Typography>

          <Box component="form" noValidate autoComplete="off" className="space-y-4 w-1/2">
            <AuthInput label="ایمیل یا شماره موبایل" />

            <AuthButton>ارسال لینک بازیابی</AuthButton>
          </Box>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;