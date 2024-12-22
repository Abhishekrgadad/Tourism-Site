import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const activities = [
  {
    title: "Mountain Trekking",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7c8f1b?auto=format&fit=crop&q=80&w=800",
    description: "Scale new heights"
  },
  {
    title: "Desert Safari",
    image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=800",
    description: "Adventure in the dunes"
  },
  {
    title: "Ocean Diving",
    image: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=80&w=800",
    description: "Explore underwater"
  },
  {
    title: "Wildlife Safari",
    image: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=800",
    description: "Meet nature's finest"
  },
  {
    title: "Cave Exploration",
    image: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?auto=format&fit=crop&q=80&w=800",
    description: "Discover hidden wonders"
  },
  {
    title: "Paragliding",
    image: "https://images.unsplash.com/photo-1682687221175-7c0ad966d561?auto=format&fit=crop&q=80&w=800",
    description: "Soar through the skies"
  },
  {
    title: "Rock Climbing",
    image: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?auto=format&fit=crop&q=80&w=800",
    description: "Conquer vertical challenges"
  },
  {
    title: "River Rafting",
    image: "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?auto=format&fit=crop&q=80&w=800",
    description: "Navigate wild waters"
  }
];

export default function MakeMemories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-mountains-and-forest-41790-large.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <div className="relative z-20 bg-gradient-to-r from-black/80 via-black/60 to-transparent p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-5xl font-bold text-white mb-6">Make Memories That Last Forever</h2>
            <p className="text-xl text-gray-200">Choose your next adventure and create unforgettable moments.</p>
          </div>
        </div>
        
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80" />
          
          <div 
            className="flex space-x-6 transition-all duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {activities.map((activity, index) => (
              <div 
                key={index}
                className={`w-72 flex-shrink-0 group transform transition-all duration-700
                  ${index < currentIndex ? 'opacity-0 scale-95 -translate-x-full' : 
                    index === currentIndex ? 'opacity-100 scale-100' : 
                    'opacity-70 scale-95 translate-x-4'}`}
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                      <p className="text-gray-200">{activity.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 right-0 space-x-4 z-30">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}