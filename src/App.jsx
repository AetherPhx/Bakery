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
			<Info />
			<Banner />
			<Info />
			<InfoTwo />
			<Banner />
			<Info />
			<InfoThree />
			<Footer />
		</div>
	);
}
