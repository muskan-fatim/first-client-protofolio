import Image from "next/image";
export default function Main() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center md:flex-row justify-between w-full max-w-6xl">
        <div className="text-center md:text-left mt-10 md:mt-44">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-800 leading-tight mb-4">
            It's the food and groceries you love, delivered
          </h1>

          <div className="bg-white shadow-lg p-4 rounded-lg mt-6 flex flex-col md:flex-row items-center">
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full md:w-auto p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition duration-300 ease-in-out mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-pink-600 text-white rounded-lg px-6 py-3 hover:bg-pink-700 transition duration-300 ease-in-out">
              Find food
            </button>
          </div>
        </div>

        <Image
          src="/panda-background.webp"
          alt="Panda background"
          height={800}
          width={700}
          className="mt-8 md:mt-0 max-w-full md:w-auto object-cover"
        />
      </div>
    </div>
  );
}
