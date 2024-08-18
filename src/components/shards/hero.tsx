import AnimatedShinyText from "@components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

export const Hero = () => (
  <section className="flex flex-col w-full items-center justify-center gap-6">
    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
      <span>✨ Introducing Magic UI</span>
      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedShinyText>

    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni,
      cupiditate dolor quo sit dolore.
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam
      consequatur dicta in quod ratione harum itaque explicabo et quas
      distinctio.
    </p>
  </section>
);
