import { Navbar } from "@/components/shards/navbar";
import { Hero } from "@components/shards/hero";

const Home = () => {
  return <div className="max-w-screen-lg">
    {/* # Navigation */}
    <Navbar />

    {/* # Body */}
    <Hero />

    {/* # Footer */}
  </div>
};

export default Home;
