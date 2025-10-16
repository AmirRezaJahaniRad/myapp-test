import React from "react";
import {
  TextField,
  MenuItem,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
};

type CustomSelectProps = {
  className?: string;
  label: string;
  options: Option[];
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  register: UseFormRegisterReturn;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  loading = false,
  disabled = false,
  error = false,
  helperText,
  register,
  className = "",
}) => {
  return (
    <TextField
      select
      className={className} 
      fullWidth
      label={label}
      dir="rtl"
      disabled={disabled || loading}
      error={error}
      helperText={helperText}
      sx={{
        marginBottom : "1rem"
      }}
      slotProps={{
        input: {
          endAdornment: loading ? (
            <InputAdornment position="end">
              <CircularProgress size={18} />
            </InputAdornment>
          ) : undefined,
        },
      }}
      {...register}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;