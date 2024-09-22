import { NavMenu } from "../NavMenu/NavMenu";
import "./Header.css";

export function Header() {
	return (
		<div className="Header-wrapper">
			<header className="Header">
				<div className="Header-menu">
					<h1 className="Header-logo">Bakery</h1>
					<NavMenu />
				</div>

				<div className="Header-cta">
					<h2 className="Header-title">Let&apos;s taste perfection</h2>
					<button className="Header-btn">Order Now</button>
				</div>
			</header>
		</div>
	);
}
