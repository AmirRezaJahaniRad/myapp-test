interface MyComponentProps {
  children : React.ReactNode;
}

import earth from "../assets/earth.png"

const AuthLayout : React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="h-screen bg-white">
            <div className="w-full main-div">
                <section className="grid items-center justify-center w-full md:grid-cols-2"> 
                    <div className="flex opacity-80 bg-gray-100 md:w-full items-center justify-center">
                        <img className="object-cover w-1/2  p-1 md:w-full md:h-screen rounded-xl" src={earth} alt="Earth"/>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center mt-4 w-full">
                       { children }
                    </div>
                </section>
            </div>
        </div>
  )
};

export default AuthLayout;