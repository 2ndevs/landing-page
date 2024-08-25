import { Navbar } from "@/components/shards/navbar";
import { Hero } from "@components/shards/hero";
import { ShowCaseCard } from "@components/shards/show-case-card";

const Home = () => {
  return (
    <div className="max-w-screen-lg">
      {/* # Navigation */}
      <Navbar />

      {/* # Body */}
      <Hero />
      <ShowCaseCard />

      {/* # Footer */}
    </div>
  );
};

export default Home;
