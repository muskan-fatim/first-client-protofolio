import Image from "next/image";
import Link from "next/link";
const restaurants = [
    { name: 'Pizza Hut', image: '/pizzahut.jpg', desc: 'Fast Pizza Delivery'},
    { name: 'McDonald\'s', image: '/mcdonalds.jpg', desc: 'Burgers, Fries & More' },
    { name: 'KFC', image: '/kfc.jpg', desc: 'Finger Lickin\' Good' },
    { name: 'Subway', image: '/subway.jpg', desc: 'Healthy Subs' },
  ];
  
  export default function RestaurantGrid() {
    return (
      <section id="restaurants" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Available  Top Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                  <p className="text-gray-600">{restaurant.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  