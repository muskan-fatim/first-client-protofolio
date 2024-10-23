import Image from "next/image";

export default function BusinessLunch() {
  return (
    <div className="bg-white py-10">

<section className="bg-pink-600 text-white py-12 justify-center m-11 items-center rounded-md">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <h2 className="text-4xl font-bold">Download the food and groceries you love</h2>
      <p className="text-lg">
        It's all at your fingertips – the restaurants and shops you love. Find the right food 
        and groceries to suit your mood, and make the first bite last. Go ahead, download us.
      </p>
      <div className="flex justify-center md:justify-start space-x-4 ">
        <img
          src="/appstore.PNG"
          alt="Download on the App Store"
          className="h-12 hidden md:block"
        />
        <img
          src="/googleplay.png" 
          alt="Get it on Google Play"
          className="h-12 hidden md:block"
        />
        <img
          src="/number1.PNG"
          alt="Explore it on AppGallery"
          className="h-12 hidden md:block"
        />
      </div>
    </div>

    <div className="md:w-1/2 relative mt-10 md:mt-0">

      <div className="absolute top-0 left-1/2 transform -translate-x-12">
        <Image
          src="/home-foodpanda-apps.webp" 
          alt="Mobile Mockup"
          width={500}
          height={900}
          className="transform -rotate-6 shadow-xl"
        />
      </div>
    </div>
  </div>
</section>


            <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 ml-3 hidden md:block">

        You prepare the food, we handle the rest
        </h1>

        <div className="relative hidden md:block">
          <Image
            src="/chef.webp"
            alt=""
            width={1500}
            height={600}
            className="w-full h-auto rounded-lg hidden md:block"
          />

          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-sm ">
            <h2 className="text-2xl font-semibold mb-2">List your restaurant or shop on foodpanda </h2>
            <p className="text-gray-700">

Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
It's simple:
 we list your menu and product lists online, help you process orders, pick them up, 
 and deliver them to hungry pandas – in a heartbeat!
Interested? Let's start our partnership today!
            </p>
          </div>
        </div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 ml-3 md:block hidden">

          Take your office out to lunch
        </h1>

        <div className="relative hidden md:block">
          <Image
            src="/home-corporate-pk.webp"
            alt="Office lunch scene"
            width={1500}
            height={400}
            className="w-full h-auto rounded-lg "
          />

          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-semibold mb-2">foodpanda for business</h2>
            <p className="text-gray-700">
              Order lunch or fuel for work-from-home, late nights in the office,
              corporate events, client meetings, and much more.
            </p>
          </div>
        </div>

        <div className="bg-white py-16 px-6 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Order food and groceries online from the best restaurants and shops on foodpanda
          </h1>

          <p className="text-gray-600 mb-6">
            Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? 
            Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
          </p>

          <h2 className="text-2xl font-bold mb-4">What's new?</h2>
          <ul className="list-none space-y-2 mb-8">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">Wide variety of restaurants and shops, an abundance of cuisines & products.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">High quality delivery service.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">Live chat feature to give App users instant help when they need it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2">✓</span>
              <span className="text-gray-700">NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">How can I get foodpanda delivery?</h3>
              <p>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!</p>
            </div>

            <div>
              <h3 className="font-semibold">Which takeout restaurants open now near me?</h3>
              <p>You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>
            </div>

            <div>
              <h3 className="font-semibold">Does foodpanda deliver 24 hours?</h3>
              <p>Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.</p>
            </div>

            <div>
              <h3 className="font-semibold">Can you pay cash for foodpanda?</h3>
              <p>Yes, you can pay cash on delivery for foodpanda in Pakistan.</p>
            </div>

            <div>
              <h3 className="font-semibold">How can I pay foodpanda online?</h3>
              <p>You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.</p>
            </div>

            <div>
              <h3 className="font-semibold">Can I order foodpanda for someone else?</h3>
              <p>Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.</p>
            </div>

            <div>
              <h3 className="font-semibold">How much does foodpanda charge for delivery?</h3>
              <p>Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.</p>
            </div>

            <div>
              <h3 className="font-semibold">What restaurants let you order online?</h3>
              <p>There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.</p>
            </div>

            <div>
              <h3 className="font-semibold">Does foodpanda have minimum order?</h3>
              <p>Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.</p>
            </div>

            <div>
              <h3 className="font-semibold">What is the difference between delivery and Pick-Up?</h3>
              <p>If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
