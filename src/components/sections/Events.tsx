import { useRef, useEffect, useState } from 'react';

const baseEvents = [
  {
    title: "Mountain Festival",
    date: "June 15-20, 2024",
    image: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=800",
    description: "Annual celebration of mountain culture and adventure sports"
  },
  {
    title: "Desert Night Trek",
    date: "July 10, 2024",
    image: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=800",
    description: "Experience the magic of desert under stars"
  },
  {
    title: "Ocean Photography",
    date: "August 5-8, 2024",
    image: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?auto=format&fit=crop&q=80&w=800",
    description: "Workshop with renowned marine photographers"
  }
];

const events = [...baseEvents, ...baseEvents, ...baseEvents];

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isPaused) return;
      
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Upcoming Events</h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {events.map((event, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 group"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm text-yellow-400 mb-2">{event.date}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-200">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}