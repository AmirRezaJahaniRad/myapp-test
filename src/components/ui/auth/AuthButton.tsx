import { Button , ButtonProps} from "@mui/material";
import React from "react";

type AuthButtonProps = ButtonProps & {
  children : React.ReactNode;
  className?: string;
}

const AuthButton : React.FC<AuthButtonProps> = ({ children,  className , ...props}) => {
  return (
        <Button
        fullWidth
        variant="contained"
        color="primary"
        {...props}
        className={className}
        sx={{
          "&:hover" : {
            backgroundColor : "#671070"          
          }
        }}
        >
        {children}
        </Button>
  );
};

export default AuthButton;