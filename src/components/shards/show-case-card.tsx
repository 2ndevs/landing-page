import { env } from "@/env";
import { BorderBeam } from "@components/magicui/border-beam";
import Image from "next/image";

export const ShowCaseCard = () => {
	const imageURL = new URL("/hero-dark.png", env.NEXT_PUBLIC_APP_URL);
	return (
		<section className="sm:h-[31.25rem] w-full overflow-hidden sm:p-0 p-4 sm:mt-12 mt-6">
			<div className="relative rounded-lg image-gradient">
				<Image
					className="object-cover"
					alt="Show case card image"
					src={imageURL.toString()}
					height={500}
					width={1024}
				/>
				<BorderBeam size={250} duration={12} delay={9} />
			</div>
		</section>
	);
};
