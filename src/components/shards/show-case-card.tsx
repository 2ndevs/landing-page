import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import WordFadeIn from "@components/magicui/word-fade-in";
import Image from "next/image";

export const ShowCaseCard = () => {
  return (
    <NeonGradientCard className="my-20 items-center justify-center text-center h-full max-h-[25rem]">
      <div className="w-full h-full items-center justify-center flex text-5xl font-bold">
        <WordFadeIn words="something" />
      </div>
    </NeonGradientCard>
  );
};
