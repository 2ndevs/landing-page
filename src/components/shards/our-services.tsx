import { env } from "@/env";
import { ServiceCard } from "./service-card";

export const OurServices = () => {
  const defaultCardImage = new URL("/hero-dark.png", env.NEXT_PUBLIC_APP_URL);
  return (
    <section className="flex items-center gap-6 flex-col mt-12">
      <header className="flex items-center flex-col">
        <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
          Our services
        </h4>
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          What we can do for You
        </h1>
        <p className="mt-2 text-xl leading-8 text-black/80 dark:text-white text-balance text-center">
          Discover the Perfect Service for Your Needs. Whether you're looking
          for a custom software solution, a powerful landing page, or a complete
          product tailored to your business, we've got you covered.
        </p>
      </header>
      <main className="items-center justify-center flex w-full flex-col gap-4 lg:flex-row py-2">
        <ServiceCard
          title="Custom software"
          paragraph="Transform your idea into a unique software solution. We develop custom applications tailored to the specific needs of your business, delivering high-performance and full adaptability. Let us help drive your success with technology made just for you."
          imageUrl={defaultCardImage.toString()}
        />
        <ServiceCard
          title="Landing page"
          paragraph="Maximize your online presence with an impactful and effective landing page. We create optimized landing pages that capture the essence of your product or service. Reach your audience in a direct and powerful way with stunning design and cutting-edge functionality."
          imageUrl={defaultCardImage.toString()}
        />
        <ServiceCard
          title="Complete software"
          paragraph="Get a complete software solution, perfectly integrated with your business needs. From concept to launch, we provide a full package that combines innovation, efficiency, and ongoing support. Your technology solution, ready to perform at every level."
          imageUrl={defaultCardImage.toString()}
        />
      </main>
    </section>
  );
};
