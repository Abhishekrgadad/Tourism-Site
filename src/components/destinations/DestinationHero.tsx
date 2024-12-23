import { useParallax } from '../../hooks/useParallax';

export default function DestinationHero() {
<<<<<<< HEAD
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
=======
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full pt-[56.25%]">
          <iframe 
            src="https://www.youtube.com/embed/VxovC_I9mMc?si=SfzWfEh7Yog8dHXb&controls=0&start=8&autoplay=1&mute=1&loop=1&playlist=VxovC_I9mMc&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="YouTube video player" 
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover pointer-events-none"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-black/40 pointer-events-none"
        style={{ backdropFilter: 'brightness(0.7)' }}
      >
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-gray-200">
              Explore handpicked destinations that will take your breath away
            </p>
          </div>
>>>>>>> 737ee91 (updated files)
        </div>
      </div>
    </div>
  );
}