'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter(); 
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="shadow-md bg-white fixed top-0 left-0 w-full z-10">
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                    <Image className="rounded" src="/icon.PNG" alt="panda logo" height={30} width={30} />
                    <h1 className="text-2xl font-bold text-pink-500">foodpanda</h1>
                </div>
                
                <div className="hidden md:flex space-x-6"> {/* Show on medium screens and above */}
                    <ul className="flex space-x-6">
                        <li>
                            <Link className="text-gray-700 hover:text-pink-500 transition-colors duration-300" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-pink-500 transition-colors duration-300" href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/article" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">Article</Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <Link className="text-gray-700 hover:text-pink-500 transition-colors duration-300" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-pink-500 transition-colors duration-300" href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-pink-500 transition-colors duration-300" href="/article">Article</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
