import Link from "next/link";
import Navbar from "../components/othernav";

export default function Login() {
    return (
        <div>
                                <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>

                <label className="block text-gray-700 mb-2">Enter your Email</label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    type="email" 
                    placeholder="you@example.com" 
                />
                
                <label className="block text-gray-700 mb-2">Enter your Password</label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    type="password" 
                    placeholder="Your password" 
                />
                
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md transition duration-200">
                    Login
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? 
                    <Link className="text-pink-500 font-semibold" href="/signup"> Sign up</Link>
                </p>
            </div>
        </div>
        </div>
    );
}
