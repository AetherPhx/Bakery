import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Banner } from "./components/Banner";

import { Banner } from './components/Banner';
import { Header } from "./Components/Header/Header";
import { Info } from "./components/Info";
export function App() {
	return (
		<div className="layout">
			<Header />
			<Info />
			<Banner />
			<Info />
			<Banner />
			<Info />
			{/* TODO: Add Footer */}
		</div>
	);
}
