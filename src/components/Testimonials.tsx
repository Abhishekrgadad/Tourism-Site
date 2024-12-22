import { useRef, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "The most amazing travel experience of my life! Every detail was perfectly planned.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "David Chen",
    location: "Sydney, Australia",
    quote: "Professional service with a personal touch. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    quote: "Exceeded all expectations. The local guides were knowledgeable and friendly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
  // Duplicate testimonials for continuous scroll
  // ... (duplicate the array)
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">What Our Travelers Say</h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-8 w-full"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}