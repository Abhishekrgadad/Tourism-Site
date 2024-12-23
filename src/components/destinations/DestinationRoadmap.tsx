import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';

const destinations = [
  {
<<<<<<< HEAD
    title: "Machu Picchu",
    location: "-13.1631° S, 72.5450° W",
    mapUrl: "https://www.google.com/maps?q=-13.1631,-72.5450",
    bestTime: "April to October",
    groupSize: "2-15 people",
    cost: "$$$",
    description: "Ancient Incan citadel set high in the Andes Mountains, featuring spectacular architecture and mountain vistas."
  },
  {
    title: "Santorini",
    location: "36.3932° N, 25.4615° E",
    mapUrl: "https://www.google.com/maps?q=36.3932,25.4615",
    bestTime: "June to September",
    groupSize: "2-10 people",
    cost: "$$$$",
    description: "Stunning Greek island known for its white-washed buildings, blue domes, and spectacular sunsets."
  },
  {
    title: "Banff National Park",
    location: "51.4968° N, 115.9281° W",
    mapUrl: "https://www.google.com/maps?q=51.4968,-115.9281",
    bestTime: "June to August",
    groupSize: "1-20 people",
    cost: "$$$",
    description: "Canada's oldest national park, featuring pristine mountain lakes, wildlife, and the Rocky Mountains."
=======
    title: "Dharmasthala Temple",
    location: "12.9472° N, 75.3841° E",
    mapUrl: "https://www.google.com/maps?q=12.9472,75.3841",
    bestTime: "October to March",
    distance: "280 km from Bangalore",
    travelTime: "~6 hours by road",
    description: "A renowned pilgrimage center dedicated to Lord Manjunatha, known for its spiritual significance and charitable activities. The temple complex showcases a unique blend of Jain and Hindu traditions.",
    image: "https://myholidayhappiness.com/uploads/dharmasthala-temple-5373.jpg"
  },
  {
    title: "INS Chapal Warship Museum",
    location: "14.8446° N, 74.1300° E",
    mapUrl: "https://www.google.com/maps?q=14.8446,74.1300",
    bestTime: "October to March",
    distance: "520 km from Bangalore",
    travelTime: "~10 hours by road",
    description: "A decommissioned Indian Naval Ship converted into a museum, showcasing naval artifacts, weapons, and maritime history. Visitors can explore the ship's deck, engine room, and living quarters.",
    image: "https://www.trawell.in/admin/images/upload/500908799Karwar_INS_Museum_Main.jpg"
  },
  {
    title: "Rock Garden Karwar",
    location: "NH 66, opp. RTO office, Kodibag, Karwar, Karnataka 581301",
    mapUrl: "https://maps.app.goo.gl/htGtVaREyVE3sTEC8",
    bestTime: "November to February",
    distance: "517 km from Bangalore",
    travelTime: "~9 hours by road",
    description: "A rock garden, also known as a rockery and formerly as a rockwork, is a garden, or more often a part of a garden, with a landscaping framework of rocks, stones, and gravel, with planting appropriate to this setting.",
    image: "https://content3.jdmagicbox.com/comp/karwar/i4/9999p8382.8382.181210193220.i2i4/catalogue/rock-garden-karwar-kodibag-karwar-parks-q50tkiu9y1.jpg"
  },
  {
    title: "Gokarna Beach",
    location: "15, Dandebagh, Gokarna, Karnataka 581326",
    mapUrl: "https://maps.app.goo.gl/5RSBug4wTygJyyvP7",
    bestTime: "October to March",
    distance: "487 km from Bangalore",
    travelTime: "~8 hours by road",
    description: "A pilgrimage town known for its pristine beaches and ancient temples. Om Beach, shaped like the Om symbol, is particularly famous among tourists and spiritual seekers.",
    image: "https://redearth.in/blog/wp-content/uploads/2020/12/gk0-3890-h-1554x1036-1.jpeg"
  },
  {
    title: "Yana Caves",
    location: "14.6167° N,Karnataka 581403",
    mapUrl: "https://maps.app.goo.gl/6E9azLcEvn7CNk8DA",
    bestTime: "October to February",
    distance: "445 km from Bangalore",
    travelTime: "~8 hours by road",
    description: "Famous for its two unique black karst rock formations - Mohini Shikhara and Bhairaveshwara Shikhara. The caves are surrounded by thick forests and are a popular trekking destination.",
    image: "https://static.toiimg.com/img/92509470/Master.jpg"
  },
  {
    title: "Mirjan Fort",
    location: "FCQ9+P2P, talluk, Mirjan Fort Road, Mirjan, Karnataka 581333",
    mapUrl: "https://maps.app.goo.gl/jUdGTpCqaWYTT4R99",
    bestTime: "October to March",
    distance: "466 km from Bangalore",
    travelTime: "~8 hours by road",
    description: "A 16th-century fort known for its architectural brilliance, featuring double walls, secret passages, and water tanks. Once served as a strategic point for pepper trade.",
    image: "https://eindiatourism.in/wp-content/uploads/2024/06/Mirjan_Fort_2.jpg"
  },
  {
    title: "Sharavati Backwaters",
    location: "Taribagil, Church Rd, Honnavar, Karnataka 581334",
    mapUrl: "https://maps.app.goo.gl/iQkgWjYL4fiCZQiD6",
    bestTime: "July to February",
    distance: "476 km from Bangalore",
    travelTime: "~9 hours by road",
    description: "A scenic reservoir formed by the Sharavati River, offering stunning views of the Western Ghats. Popular for boating, photography, and watching spectacular sunsets.",
    image: "https://i0.wp.com/pallavibhat.com/content/uploads/2022/01/Sharavati-Backwater-Boat-ride-2.jpg?resize=1024%2C768&ssl=1"
  },
  {
    title: "Mangrove Forest",
    location: "honnavara, Karnataka",
    mapUrl: "https://maps.app.goo.gl/q99y7ZuVBSj1RGtG8",
    bestTime: "October to March",
    distance: "478 km from Bangalore",
    travelTime: "~9 hours by road",
    description: "A rich ecosystem of mangrove forests along the Kali river estuary. Home to diverse marine life and birds, offering boat rides through narrow water channels.",
    image: "https://www.seawatersports.com/images/places/sharavathi-kandla-mangrove-boardwalk.png"
  },
  {
    title: "Murudeshwara Temple",
    location: "murudeshwara, Karnataka",
    mapUrl: "https://maps.app.goo.gl/aykYYEBZ8CDd1xvD6",
    bestTime: "October to March",
    distance: "482 km from Bangalore",
    travelTime: "~9 hours by road",
    description: "Home to the world's second-tallest Shiva statue (123 feet) and a stunning coastal temple. The temple tower (gopura) stands at 249 feet and offers panoramic views of the Arabian Sea.",
    image: "https://www.karnataka.com/wp-content/uploads/2007/10/Murudeshwar.jpg"
>>>>>>> 737ee91 (updated files)
  }
];

export default function DestinationRoadmap() {
  return (
<<<<<<< HEAD
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Journey Through Paradise</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30" />
          
          <div className="space-y-16">
            {destinations.map((dest, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center group`}>
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">{dest.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{dest.description}</p>
                    
                    <div className="space-y-4">
                      <a 
                        href={dest.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        {dest.location}
                      </a>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>Best Time: {dest.bestTime}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users className="w-5 h-5 mr-2" />
                        <span>Group Size: {dest.groupSize}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <DollarSign className="w-5 h-5 mr-2" />
                        <span>Cost: {dest.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600" />
              </div>
            ))}
          </div>
        </div>
=======
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {destinations.map((destination, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Left side - Image */}
            <div className="md:w-1/3 relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
            </div>

            {/* Right side - Content */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {destination.title}
                </h3>
                <a
                  href={destination.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>View on Maps</span>
                </a>
              </div>

              <div className="space-y-3 text-gray-300 text-sm mb-4">
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {destination.location}
                </p>
                
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best Time: {destination.bestTime}
                </p>

                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {destination.distance}
                </p>

                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Travel Time: {destination.travelTime}
                </p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 leading-relaxed">
                  {destination.description}
                </p>
              </div>
            </div>
          </div>
        ))}
>>>>>>> 737ee91 (updated files)
      </div>
    </div>
  );
}