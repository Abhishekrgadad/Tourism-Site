import { Cloud, Sun, CloudRain } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WeatherInfo {
  location: string;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
}

const mockWeather: WeatherInfo[] = [
<<<<<<< HEAD
  { location: 'Paris', temperature: 22, condition: 'sunny' },
  { location: 'Tokyo', temperature: 28, condition: 'cloudy' },
  { location: 'Santorini', temperature: 25, condition: 'sunny' }
=======
  { location: 'Kerala', temperature: 24, condition: 'sunny' },
  { location: 'karnataka', temperature: 28, condition: 'cloudy' },
  { location: 'Goa', temperature: 25, condition: 'sunny' }
>>>>>>> 737ee91 (updated files)
];

export default function WeatherWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockWeather.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return null;
    }
  };

  const weather = mockWeather[currentIndex];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold dark:text-white">{weather.location}</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {weather.temperature}°C
          </p>
        </div>
        {getWeatherIcon(weather.condition)}
      </div>
    </div>
  );
}