import { Navbar } from "@components/shards/navbar";
import { Hero } from "@components/shards/hero";
import { OurServices } from "@components/shards/our-services";

const Home = () => {
  return (
    <div className="max-w-screen-lg">
      {/* # Navigation */}
      <Navbar />

      {/* # Body */}
      <Hero />
      <OurServices />

      {/* # Footer */}
    </div>
  );
};

export default Home;
