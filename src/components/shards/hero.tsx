import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/utils/dictionaries";
import AnimatedShinyText from "@components/magicui/animated-shiny-text";
import BoxFadeIn from "@components/magicui/box-fade-in";
import SparklesText from "@components/magicui/sparkles-text";
import WordFadeIn from "@components/magicui/word-fade-in";
import { Button } from "@components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Hero = async () => {
  const dict = await getDictionary();

  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 mt-14">
      <BoxFadeIn
        direction="none"
        delay={0.1}
        className={cn(
          "group rounded-full border border-muted/10 text-base transition-all ease-in hover:cursor-pointer dark:border-foreground/10 bg-muted/45"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-muted hover:duration-300 hover:dark:text-muted-foreground">
          <span>✨ {dict?.hero?.introducing}</span>
        </AnimatedShinyText>
      </BoxFadeIn>

      <div className="text-center text-balance flex flex-col items-center gap-6">
        <BoxFadeIn className="inline">
          <h1
            className="inline font-bold lg:text-7xl md:text-5xl text-3xl leading-none tracking-tighter text-transparent bg-gradient-to-br from-foreground from-65% to-accent bg-clip-text py-6"
          >
            {dict?.hero?.title}
          </h1>

          <SparklesText sparklesCount={3} text={dict?.hero?.["title-highlight"]} className="inline lg:text-6xl md:text-4xl text-2xl text-accent-foreground" />
        </BoxFadeIn>

        <BoxFadeIn className="flex justify-center" delay={0.75}>
          <WordFadeIn
            className="font-normal lg:text-2xl md:text-xl text-md text-muted-foreground tracking-tight leading-relaxed text-balance max-w-[75%]"
            words={dict?.hero?.subtitle}
          />
        </BoxFadeIn>
      </div>

      <BoxFadeIn className="flex justify-center" delay={1}>
        <Button className="group mt-12">
          {dict?.hero?.actionButton}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </Button>
      </BoxFadeIn>
    </section>
  );
};
