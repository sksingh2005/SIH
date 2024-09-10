import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-300 flex items-center min-h-screen">
            <div className="w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%] bg-custom-bg bg-cover bg-center m-auto rounded-lg pt-2">
                <div className="flex flex-col justify-center px-4 text-center pt-5">
                    <p className="font-bold text-xl sm:text-2xl pb-2">Sign Up as Seller</p>
                    <p className="text-gray-500">Enter your information to create an account</p>
                </div>
                <div className="pt-2 px-4 sm:px-5 font-semibold">
                    <p className="">First Name</p>
                    <input 
                        type="text" 
                        placeholder=" John" 
                        onChange={(e) => setFirstname(e.target.value)} 
                        className="border rounded border-slate-500 pb-1 pt-1 w-full" 
                    />
                    <p className="pt-2">Last Name</p>
                    <input 
                        type="text" 
                        placeholder=" Doe" 
                        onChange={(e) => setLastname(e.target.value)} 
                        className="border rounded border-slate-500 pb-1 pt-1 w-full" 
                    />
                    <p className="pt-2">Phone Number</p>
                    <input 
                        type="email" 
                        placeholder=" " 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="border rounded border-slate-500 pb-1 pt-1 w-full" 
                    />
                    <p className="pt-2">Password</p>
                    <input 
                        type="password" 
                        placeholder=" Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border rounded border-slate-500 pb-1 pt-1 w-full" 
                    />
                </div>
                <div className="p-4 sm:p-5">
                    <button onClick={()=>{
                        navigate('/seller')
                    }}
                        type="button" 
                        className="text-white bg-gray-700 w-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                        Sign up
                    </button>
                    <p className="text-md sm:text-lg font-semibold">
                        Join as Buyer? <Link className="text-gray-500" to={'/signin'}>Buyer</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
