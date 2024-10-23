import Navbar from "../components/othernav"

export default function Article() {
    return (
        <div className="bg-gray-200 min-h-screen p-10">
            <Navbar/>
            <div className="bg-white max-w-3xl mx-auto my-10 p-7 pt-12 rounded-lg shadow-lg ">
                <img 
                    src="/article1.jpg" 
                    alt="Foodpanda Logo" 
                    className="w-full h-auto mb-4 rounded-lg" 
                />
                
                <h1 className="text-4xl sm:text-3xl font-bold mb-4 text-gray-700">What is Foodpanda?</h1>
                <p className="text-gray-700 text-lg mb-4">
                    Foodpanda is a leading food ordering and delivery platform that connects users with local
                    <br /> restaurants, offering a seamless online food experience. The easy-to-use platform allows
                    <br /> customers to browse menus, place orders, and enjoy delicious meals delivered to their doorstep,
                    <br /> all at the best prices. Whether you’re craving a quick snack or a gourmet meal, Foodpanda makes it
                    <br /> easy to satisfy your appetite with just a few clicks.
                </p>
                <h2 className="text-3xl font-semibold mt-6 mb-2 text-gray-700">Foodpanda: A Timeline of Success</h2>
                <p className="text-gray-700 mb-4">
                    Founded in 2012, Foodpanda has grown into a global food delivery marketplace,
                    operating in over 50 countries, including key regions like Bulgaria, the Asia Pacific,
                    and Romania. Headquartered in Berlin, Germany, and owned by Delivery Hero SE, Foodpanda has become a trusted name in food delivery services.
                    The platform partners with more than 115,000 restaurants across 246 cities and employs around 80,000 delivery riders to ensure prompt service.
                    In 2016, Delivery Hero acquired Foodpanda, and a year later, the platform underwent a rebranding, switching its color
                    scheme from orange to pink. Foodpanda has consistently evolved, offering discounts and unique offers to increase its customer base, completing millions of daily orders.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Funding and Growth</h2>
                <p className="text-gray-700 mb-4">
                    Foodpanda has raised a total of $318 million in venture capital funding,
                    with significant investments from Rocket Internet, AB Kinnevik, Phenomen Ventures,
                    and Goldman Sachs. These investments fueled the company’s rapid expansion,
                    making it a key player in the food delivery industry.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">How Does Foodpanda Work?</h2>
                <p className="text-gray-700 mb-4">
                    Foodpanda operates through a simple and effective process:
                    <br />
                    1. Customers browse nearby restaurants and place their orders online.
                    <br />
                    2. Restaurants receive the order, prepare the food, and hand it to a delivery provider.
                    <br />
                    3. The delivery provider ensures the meal reaches the customer’s doorstep.
                    <br />
                    4. Customers pay and provide feedback based on their experience.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Foodpanda Business Model</h2>
                <p className="text-gray-700 mb-4">
                    Foodpanda’s business model revolves around connecting restaurants with 
                    customers who prefer to order online rather than dining out.
                    The company generates revenue through delivery fees, advertising, and various service charges, 
                    while minimizing operational costs by offering discounts for bulk purchases and maintaining an 
                    efficient delivery network.
                </p>
            </div>
        </div>
    );
}
