import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export function App() {
	const urlBanner1 = "/tasteful-recipes.jpg";
	const urlBanner2 = "/tasty.jpg";
	return (
		<div className="layout">
			<Header />
			<Info title="Discover" subtitle="our story" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="learn more"/>
			<Banner bannerTitle='Always' bannerSubtitle='FRESH' backgroundImage={urlBanner1}/>
			<Info title="Explore" subtitle="Menu" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="see full menu"/>
			<Banner bannerTitle='Everything' bannerSubtitle='TASTY' backgroundImage={urlBanner2}/>
			<Info title="Baker's" subtitle="Delight" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="make reservation" />
			<Footer />
		</div>
	);
}

