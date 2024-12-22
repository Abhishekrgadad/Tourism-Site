import { useParallax } from '../../hooks/useParallax';

export default function DestinationHero() {
  const offset = useParallax(0.3);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-mountains-and-forest-41790-large.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-gray-200">
            Explore handpicked destinations that will take your breath away
          </p>
        </div>
      </div>
    </div>
  );
}