import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';

const destinations = [
  {
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
  }
];

export default function DestinationRoadmap() {
  return (
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
      </div>
    </div>
  );
}