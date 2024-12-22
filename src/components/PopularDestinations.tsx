import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: "Paris, France",
    description: "The City of Light beckons with its iconic architecture and rich culture",
    distance: "5,843 km",
    coordinates: "48.8566° N, 2.3522° E",
    mapUrl: "https://www.google.com/maps?q=48.8566,2.3522"
  },
  {
    name: "Tokyo, Japan",
    description: "A fascinating blend of ultra-modern and traditional",
    distance: "9,435 km",
    coordinates: "35.6762° N, 139.6503° E",
    mapUrl: "https://www.google.com/maps?q=35.6762,139.6503"
  },
  {
    name: "Santorini, Greece",
    description: "Stunning sunsets and white-washed architecture",
    distance: "4,923 km",
    coordinates: "36.3932° N, 25.4615° E",
    mapUrl: "https://www.google.com/maps?q=36.3932,25.4615"
  }
];

export default function PopularDestinations() {
  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Popular Destinations</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30" />
          
          <div className="space-y-16">
            {destinations.map((dest, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center group`}>
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">{dest.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{dest.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <a 
                          href={dest.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          {dest.coordinates}
                        </a>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <span>Distance: {dest.distance}</span>
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