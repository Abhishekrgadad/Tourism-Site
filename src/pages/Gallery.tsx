import { useState } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    title: "Venice Canals"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7c8f1b?auto=format&fit=crop&q=80&w=800",
    title: "Northern Lights"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=800",
    title: "Desert Safari"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=80&w=800",
    title: "Mountain Trek"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=800",
    title: "Tropical Beach"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?auto=format&fit=crop&q=80&w=800",
    title: "City Lights"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | { url: string; title: string }>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Travel Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <h3 className="text-white text-xl font-semibold text-center mt-4">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}