import "./NavMenu.css";
export function NavMenu() {
    return (
        <nav className="NavMenu">
            <ul className="NavMenu-list">
                <li className="NavMenu-item"><a className="NavMenu-link" href="#">Home</a></li>
                <li className="NavMenu-item"><a className="NavMenu-link" href="#">About Us</a></li>
                <li className="NavMenu-item"><a className="NavMenu-link" href="#">Reservation</a></li>
                <li className="NavMenu-item"><a className="NavMenu-link" href="#">Bakers</a></li>
            </ul>
        </nav>
    )
}