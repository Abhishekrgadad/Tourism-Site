import WeatherWidget from '../components/weather/WeatherWidget';
import SocialShare from '../components/social/SocialShare';
import DestinationHero from '../components/destinations/DestinationHero';
import DestinationRoadmap from '../components/destinations/DestinationRoadmap';

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <DestinationHero />
      
      <div className="max-w-7xl mx-auto px-4 -mt-8 z-10 relative">
        <WeatherWidget />
      </div>
      
      <DestinationRoadmap />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
        <SocialShare 
          url={window.location.href} 
          title="Check out these amazing destinations!" 
        />
      </div>
    </div>
  );
}