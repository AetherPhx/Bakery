import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { InfoTwo } from "./components/InfoTwo/InfoTwo";
import { InfoThree } from "./components/InfoThree/InfoThree";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export function App() {
	return (
		<div className="layout">
			<Header />
			<Info title="Discover" subtitle="our story" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="learn more"/>
			<Banner />
			
			<InfoTwo title="Explore" subtitle="Menu" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="see full menu"/>
			<Banner />
			
			<InfoThree title="Baker's" subtitle="Delight" contentText=" Lorem ipsum dolor sit amet consectetur adipisicIng elit. Numquam voluptatum magnam temporibus dolorum, fuga commodi." link="make reservation"/>
			<Footer />
		</div>
	);
}
