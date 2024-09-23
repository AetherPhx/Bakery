import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer/";

export function App() {
	return (
		<div className="layout">
			<Header />
			<Info />
			<Banner />
			<Info />
			<Banner />
			<Info />
			<Footer />
		</div>
	);
}
