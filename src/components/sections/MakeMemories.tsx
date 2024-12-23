import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

<<<<<<< HEAD
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
=======
interface Activity {
  title: string;
  image: string;
  description: string;
  wikipediaUrl: string;
}

const activities = [
  {
    title: "Dharmasthala",
    image: "https://myholidayhappiness.com/uploads/dharmasthala-temple-5373.jpg",
    description: "Dharmasthala is a renowned pilgrimage destination in Karnataka, India, located in the Dakshina Kannada district. It is famous for the Shri Manjunatha Swamy Temple, dedicated to Lord Shiva, where rituals are performed according to Hindu traditions. Dharmasthala is also known for its unique blend of spirituality and philanthropy.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Dharmasthala_Temple"
  },
  {
    title: "INS Museum",
    image: "https://www.trawell.in/admin/images/upload/500908799Karwar_INS_Museum_Main.jpg",
    description: "This warship is now positioned on a special concrete platform at Rabindranath Tagore beach in Karwar city, Karnataka state, India.Mannequins dressed-up as captain, sailors, doctors, etc., are there inside the Museum. Replicas of the missiles are also displayed inside the Warship Museum.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/INS_Chapal_(K94)"
  },
  {
    title: "Rock Garden",
    image: "https://content3.jdmagicbox.com/comp/karwar/i4/9999p8382.8382.181210193220.i2i4/catalogue/rock-garden-karwar-kodibag-karwar-parks-q50tkiu9y1.jpg",
    description: "A rock garden, also known as a rockery and formerly as a rockwork, is a garden, or more often a part of a garden, with a landscaping framework of rocks, stones, and gravel, with planting appropriate to this setting. ",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Rock_garden"
  },
  {
    title: "Gokarna Beach",
    image: "https://redearth.in/blog/wp-content/uploads/2020/12/gk0-3890-h-1554x1036-1.jpeg",
    description: "Gokarna is a small temple town located in the Uttara Kannada district of Karnataka state in southern India,[1] It has a population of around 20,000. Shiva is the most worshipped deity in the town. Gokarna's main temple, Mahabaleshwara, is dedicated to Shiva. The temple houses what is believed by some to be the earliest Shiva lingam (Atmalinga).",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Gokarna,_Karnataka"
  },
  {
    title: "Mahabaleshwar",
    image: "https://c8.alamy.com/comp/2AGG34H/02212019-gokarna-india-entrance-to-temple-maha-ganapathi-temple-inside-music-playing-2AGG34H.jpg",
    description: "Discover hidden wonders",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mahabaleshwar_Temple,_Gokarna"
  },
  {
    title: "Yana Caves",
    image: "https://static.toiimg.com/img/92509470/Master.jpg",
    description: "Yana is a tourist destination located in forest of Katgal Range, which is also a part of Malenadu region of Uttara Kannada district of Karnataka state in India. Yana is one of the wettest villages in the world.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Yana,_India"
  },
  {
    title: "Mirjan Fort",
    image: "https://eindiatourism.in/wp-content/uploads/2024/06/Mirjan_Fort_2.jpg",
    description: "The Mirjan Fort is located on the west coast of the Uttara Kannada district in the southern Indian state of Karnataka. The fort known for its architectural elegance was the location of several battles in the past",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mirjan_Fort"
  },
  {
    title: "Sharawati Backwater",
    image: "https://i0.wp.com/pallavibhat.com/content/uploads/2022/01/Sharavati-Backwater-Boat-ride-2.jpg?resize=1024%2C768&ssl=1",
    description: "Sharavati Backwater Boating is a must-do activity for anyone visiting Honnavar. The backwaters are formed by the Sharavati River, which creates a labyrinth of waterways, islands, and mangrove forests. A boat ride through these backwaters is a tranquil and scenic experience, offering a glimpse of the rich biodiversity of the region.",
    wikipediaUrl: "https://honnavartourism.com/backwater-boating-packages/"
>>>>>>> 737ee91 (updated files)
  }
];

export default function MakeMemories() {
  const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD
=======
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
>>>>>>> 737ee91 (updated files)

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
<<<<<<< HEAD
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-mountains-and-forest-41790-large.mp4" type="video/mp4" />
=======
        <source src="https://www.pexels.com/download/video/28903263/" type="video/mp4" />
>>>>>>> 737ee91 (updated files)
      </video>
      
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
<<<<<<< HEAD
        <div className="w-1/2">
          <div className="relative z-20 bg-gradient-to-r from-black/80 via-black/60 to-transparent p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-5xl font-bold text-white mb-6">Make Memories That Last Forever</h2>
=======
        <div className="w-1/2 -ml-8">
          <div className="relative z-20 bg-gradient-to-r from-black/80 via-black/60 to-transparent p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-8xl font-bold text-white mb-6">Make Memories That Last Forever</h2>
>>>>>>> 737ee91 (updated files)
            <p className="text-xl text-gray-200">Choose your next adventure and create unforgettable moments.</p>
          </div>
        </div>
        
<<<<<<< HEAD
        <div className="w-1/2 relative">
=======
        <div className="w-1/2 relative ml-12">
>>>>>>> 737ee91 (updated files)
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80" />
          
          <div 
            className="flex space-x-6 transition-all duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {activities.map((activity, index) => (
              <div 
                key={index}
<<<<<<< HEAD
                className={`w-72 flex-shrink-0 group transform transition-all duration-700
                  ${index < currentIndex ? 'opacity-0 scale-95 -translate-x-full' : 
                    index === currentIndex ? 'opacity-100 scale-100' : 
                    'opacity-70 scale-95 translate-x-4'}`}
=======
                className={`w-72 flex-shrink-0 group transform transition-all duration-700 cursor-pointer
                  ${index < currentIndex ? 'opacity-0 scale-95 -translate-x-full' : 
                    index === currentIndex ? 'opacity-100 scale-100' : 
                    'opacity-70 scale-95 translate-x-4'}`}
                onClick={() => setSelectedActivity(activity)}
>>>>>>> 737ee91 (updated files)
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
<<<<<<< HEAD
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                      <p className="text-gray-200">{activity.description}</p>
=======
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
>>>>>>> 737ee91 (updated files)
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
<<<<<<< HEAD
=======

      {selectedActivity && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedActivity(null)}
        >
          <div 
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-2xl w-full mx-4 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="flex gap-6">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title}
                  className="w-1/2 h-64 object-cover rounded-lg"
                />
                <div className="w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedActivity.title}</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedActivity.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={selectedActivity.wikipediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full 
                        text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button
                      onClick={() => setSelectedActivity(null)}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full 
                        text-white transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
>>>>>>> 737ee91 (updated files)
    </div>
  );
}