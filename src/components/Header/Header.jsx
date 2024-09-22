import { NavMenu } from "../NavMenu/NavMenu";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <div className="header-menu">
                <h1 className="header-logo">Bakery</h1>

                <NavMenu />
            </div>

            <div className="header-cta">
                <h2 className="header-title">Let&apos;s taste perfection</h2>
                <button className="header-btn">Order Now</button>
            </div>
            
        </header>
    )
}