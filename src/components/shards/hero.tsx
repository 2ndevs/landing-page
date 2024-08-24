import { cn } from "@/lib/utils";
import { getDictionary } from "@/utils/dictionaries";
import AnimatedShinyText from "@components/magicui/animated-shiny-text";
import WordFadeIn from "@components/magicui/word-fade-in";
import { Button } from "@components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Hero = async () => {
  const dict = await getDictionary();

  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 mt-14">
      <div
        className={cn(
          "group rounded-full border border-muted/10 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 bg-zinc-950"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ {dict?.hero?.introducing}</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>

      <WordFadeIn
        className="sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-bold leading-none tracking-tighter text-balance text-transparent bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6"
        words={dict?.hero?.title}
      />

      <WordFadeIn
        className="text-lg tracking-tight font-normal text-gray-400 md:text-xl text-balance"
        words={dict?.hero?.subtitle}
      />

      <Button className="group mt-12">
        {dict?.hero?.actionButton}
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </Button>
    </section>
  );
};
