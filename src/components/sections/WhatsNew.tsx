import { useParallax } from '../../hooks/useParallax';

export default function WhatsNew() {
  const offset = useParallax(0.3);

  return (
    <div className="relative py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What's New in Adventure
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Discover our latest additions to make your journey unforgettable. From pristine beaches to mountain peaks, 
            we're constantly expanding our horizons to bring you the most exciting destinations and experiences.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="sticky top-24 h-[500px] rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000" 
              alt="Adventure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}