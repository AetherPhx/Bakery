import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Banner } from "./components/Banner";
import { InfoTwo } from "./components/InfoTwo/InfoTwo";
import {InfoThree} from "./components/InfoThree/InfoThree";

export function App() {
	return (
		<div className="layout">
			<Header />
			<Info />
			<Banner />
			<InfoTwo />
			<Banner />
			<InfoThree/>
			{/* TODO: Add Footer */}
		</div>
	);
}
