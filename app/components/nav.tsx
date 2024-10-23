'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter(); 
    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-white h-24">
                <div className="flex space-x-1">
                <Image  className="rounded"src="/icon.PNG" alt="panda "  height={15} width={30}/>
                <h1 className="text-xl  text-pink-500">foodpanda</h1>
                </div>
                <div className="flex space-x-2 mr-3">
  <button onClick={ ()=> router.push("/login")}  className="hover:bg-gray-50 border-black border p-1 rounded-md w-20 transition-transform transform hover:scale-105">Login</button>
  <button onClick={ ()=> router.push("/signup")}  className="bg-pink-500 text-white rounded-md w-20 p-1 hover:bg-pink-600 transition-transform transform hover:scale-105">Sign Up</button>
</div>

            </div>
        </div>
    );
}

    