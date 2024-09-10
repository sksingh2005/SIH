import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-gray-300 flex items-center">
            <div className="w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%] bg-white m-auto rounded-lg pt-2">
                <div className="flex flex-col justify-center px-4 text-center pt-5">
                    <p className="font-bold text-xl sm:text-2xl pb-2">Sign Up as Buyer</p>
                    <p className="text-gray-500">Enter your account details</p>
                </div>
                <div className="pt-2 px-4 sm:px-5 font-semibold">
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded border-slate-500 pb-1 pt-1 w-full"
                    />
                    <p>Pan Card Number</p>
                    <input
                        type="email"
                        placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded border-slate-500 pb-1 pt-1 w-full"
                    />
                    <p className="pt-2">Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded border-slate-500 pb-1 pt-1 w-full"
                    />
                </div>
                <div className="p-4 sm:p-5">
                    <button onClick={()=>{
                        navigate('/buyer')
                    }}
                        type="button"
                        className="text-white bg-gray-700 w-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                        Sign Up
                    </button>
                    <div className="flex justify-center mt-4">
                        <p> Join as a Seller?</p>
                        <a
                            className="pointer underline pl-1 cursor-pointer text-gray-500"
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
