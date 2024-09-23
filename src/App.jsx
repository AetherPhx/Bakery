import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { InfoTwo } from "./components/InfoTwo/InfoTwo";
import { InfoThree } from "./components/InfoThree/InfoThree";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export function App() {
	const urlBanner1 = "/tasteful-recipes.jpg";
	const urlBanner2 = "/tasty.jpg";
	return (
		<div className="layout">
			<Header />
			<Info />
			<Banner bannerTitle='Always' bannerSubtitle='FRESH' backgroundImage={urlBanner1}/>
			<Info />
			<InfoTwo />
			<Banner bannerTitle='Everything' bannerSubtitle='TASTY' backgroundImage={urlBanner2}/>
			<Info />
			<InfoThree />
			<Footer />
		</div>
	);
}

