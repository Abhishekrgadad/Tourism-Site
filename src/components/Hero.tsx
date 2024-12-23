import { useTheme } from '../context/ThemeContext';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const { theme } = useTheme();
  const offset = useParallax(0.5);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
        style={{ transform: `translateY(${offset}px)` }}
      >
<<<<<<< HEAD
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-sunset-41374-large.mp4" type="video/mp4" />
=======
        <source src="/video.mp4" type="video/mp4"/> 
>>>>>>> 737ee91 (updated files)
      </video>
      
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/40'}`} />
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
<<<<<<< HEAD
            "Adventure is worthwhile in itself"
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-slide-up">
            Discover the world's most breathtaking destinations
=======
          Travel far, travel wide, and travel deep  the world is waiting for you.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-slide-up">
            Discover the Karnataka's most breathtaking destinations
>>>>>>> 737ee91 (updated files)
          </p>
        </div>
      </div>
    </div>
  );
}