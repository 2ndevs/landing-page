import { env } from "@/env";
import { getDictionary } from "@/lib/utils/dictionaries";
import { ServiceCard } from "./service-card";

export const OurServices = async () => {
	const dict = await getDictionary();
	const defaultCardImage = new URL("/hero-dark.png", env.NEXT_PUBLIC_APP_URL);

	return (
		<section className="flex items-center gap-6 flex-col sm:mt-12 mt-6">
			<header className="flex items-center flex-col">
				<h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
					{dict["our-services"].subtitle}
				</h4>
				<h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl sm:text-right text-balance text-center">
					{dict["our-services"].title}
				</h1>
				<p className="mt-2 sm:text-xl sm:leading-8 text-black/80 dark:text-white text-balance text-center">
					{dict["our-services"].paragraph}
				</p>
			</header>
			<main className="items-center justify-center flex w-full flex-col gap-4 lg:flex-row py-2 sm:px-0 px-4">
				<ServiceCard
					title={dict["our-services"]["custom-softwares"].title}
					paragraph={dict["our-services"]["custom-softwares"].paragraph}
					imageUrl={defaultCardImage.toString()}
				/>
				<ServiceCard
					title={dict["our-services"]["landing-page"].title}
					paragraph={dict["our-services"]["landing-page"].paragraph}
					imageUrl={defaultCardImage.toString()}
				/>
				<ServiceCard
					title={dict["our-services"]["complete-softwares"].title}
					paragraph={dict["our-services"]["complete-softwares"].paragraph}
					imageUrl={defaultCardImage.toString()}
				/>
			</main>
		</section>
	);
};
