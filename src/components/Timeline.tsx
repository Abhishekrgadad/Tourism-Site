interface Destination {
  title: string;
  description: string;
  image: string;
  position: 'left' | 'right';
}

const destinations: Destination[] = [
  {
    title: "Santorini, Greece",
    description: "Discover the iconic white-washed buildings and stunning sunsets of this Mediterranean paradise.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800",
    position: "right"
  },
  {
    title: "Kyoto, Japan",
    description: "Experience the perfect blend of ancient traditions and modern culture in Japan's former capital.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    position: "left"
  },
  {
    title: "Machu Picchu, Peru",
    description: "Explore the mysterious ancient Incan citadel set high in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    position: "right"
  },
  {
    title: "Bali, Indonesia",
    description: "Experience the perfect blend of tropical beaches, lush rice terraces, and spiritual temples.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    position: "left"
  },
  {
    title: "Swiss Alps",
    description: "Breathtaking mountain landscapes, pristine lakes, and charming villages await your adventure.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    position: "right"
  }
];

export default function Timeline() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Popular Destinations</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
          
          <div className="space-y-20">
            {destinations.map((dest, index) => (
              <div key={index} className={`relative flex ${dest.position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} group`}>
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white rounded-lg shadow-lg p-6 ${dest.position === 'left' ? 'md:ml-6' : 'md:mr-6'} transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-3">{dest.title}</h3>
                    <p className="text-gray-600">{dest.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-4">
                  <img 
                    src={dest.image} 
                    alt={dest.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  />
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