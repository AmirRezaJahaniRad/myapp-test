import React from "react";

interface MyComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children : React.ReactNode;
}

const AuthButton : React.FC<MyComponentProps> = ({ children,  type="button" , ...props}) => {
  return (
        <button
        type={type}
        {...props}
        className="bg-primary hover:opacity-80 text-white rounded-xl py-2 w-full duration-200 disabled:opacity-50"
        >
        {children}
        </button>
  );
};

export default AuthButton;