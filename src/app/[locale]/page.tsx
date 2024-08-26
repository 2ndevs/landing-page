import { Navbar } from "@components/shards/navbar";
import Particles from "@components/magicui/particles";
import { Hero } from "@components/shards/hero";
import { OurServices } from "@components/shards/our-services";
import { ShowCaseCard } from "@components/shards/show-case-card";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-lg">
        <Navbar />
        <Hero />
        <ShowCaseCard />
        <OurServices />
        {/* # Footer */}
      </div>

      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={50}
        ease={80}
        refresh
      />
    </>
  );
};

export default Home;
