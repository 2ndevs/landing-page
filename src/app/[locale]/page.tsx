import { Navbar } from "@/components/shards/navbar";
import Particles from "@components/magicui/particles";
import { Hero } from "@components/shards/hero";

const Home = () => {
  return <>
    <div className="max-w-screen-lg">
      <Navbar />
      <Hero />
      {/* # Footer */}
    </div>

    <Particles
      className="absolute inset-0 pointer-events-none"
      quantity={50}
      ease={80}
      refresh
    />
  </>
};

export default Home;
