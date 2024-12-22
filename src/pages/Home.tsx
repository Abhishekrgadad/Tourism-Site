import Hero from '../components/Hero';
import WhatsNew from '../components/sections/WhatsNew';
import MakeMemories from '../components/sections/MakeMemories';
import Events from '../components/sections/Events';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <WhatsNew />
      <MakeMemories />
      <Events />
      <Testimonials />
    </div>
  );
}