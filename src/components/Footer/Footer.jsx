import { Review } from "../Review/Review";
import "./Footer.css";

export function Footer() {
	return (
		<footer className="Footer">
			<div className="Footer-content">
				<h2 className="Footer-title">Customer Reviews</h2>

				<div className="Footer-main">
					{/* TODO: Form Component */}

					<section className="Footer-reviews">
						<Review />
						<Review />
						<Review />
					</section>
				</div>
			</div>
		</footer>
	);
}
