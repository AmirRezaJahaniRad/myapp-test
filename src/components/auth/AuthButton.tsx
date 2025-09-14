import React from "react";

interface MyComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children : React.ReactNode;
}

const AuthButton : React.FC<MyComponentProps> = ({ children, ...props }) => {
  return (
    <div>
        <button
        {...props}
        className="bg-purple-700 hover:bg-purple-800 text-white rounded-xl py-2 w-full duration-200 disabled:opacity-50"
        >
        {children}
        </button>
    </div>
  );
};

export default AuthButton;