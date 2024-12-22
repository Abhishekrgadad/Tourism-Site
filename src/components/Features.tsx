import { Map, Compass, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: "Expert Guided Tours",
    description: "Professional local guides who know every hidden gem"
  },
  {
    icon: Compass,
    title: "Custom Adventures",
    description: "Tailor-made experiences for your unique travel style"
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Easy scheduling with free cancellation options"
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Your safety and comfort are our top priorities"
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 dark:text-white">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}