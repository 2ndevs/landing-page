import { MagicCard } from "@components/magicui/magic-card";
import { Button } from "@components/ui/button";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  paragraph: string;
  imageUrl: string;
  imageAlt?: string;
};

export const ServiceCard = ({
  title,
  paragraph,
  imageUrl,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <MagicCard
      className="cursor-pointer shadow-2xl w-full"
      gradientColor="#262626"
    >
      <Image
        src={imageUrl}
        alt={imageAlt ?? `${title} card image`}
        className="w-full h-48 object-cover aspect-auto"
        width="400"
        height="200"
      />
      <div className="flex flex-col gap-2 pt-2 pb-4 px-4 w-full">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm leading-snug text-balance text-zinc-400 text-justify">
          {paragraph}
        </p>
        <Button className="w-full">See more</Button>
      </div>
    </MagicCard>
  );
};
