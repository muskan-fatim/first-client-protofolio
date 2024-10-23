'use client';
import Image from "next/image";
import Navbar from "../components/othernav";

export default function About() {
    return (
        <div>
            <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-20">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
                <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">About Us</h1>
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <Image 
                            src="/team.jpg" 
                            alt="Team Image" 
                            width={500} 
                            height={500} 
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <p className="text-gray-700 text-lg mb-4">
                            Welcome to <span className="font-bold text-pink-500">foodpanda</span>, your go-to platform for online food delivery. 
                            Our mission is to bring the best food from your favorite restaurants directly to your doorstep, making dining easy and convenient.
                        </p>
                        <p className="text-gray-700 text-lg mb-4">
                            Founded in 2012, we have grown to serve millions of customers across multiple countries, partnering with top restaurants 
                            and striving for excellence in every meal we deliver.
                        </p>
                        <p className="text-gray-700 text-lg mb-4">
                            Our team is passionate about creating the best food delivery experience for you. We focus on fast service, quality food, and 
                            a seamless platform to ensure that every time you order with us, it’s a delightful experience.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Thank you for choosing <span className="font-bold text-pink-500">foodpanda</span>! We look forward to serving you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
