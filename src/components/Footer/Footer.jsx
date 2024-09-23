import { FormBody } from "../FormBody/FormBody.jsx";
import { Review } from "../Review/Review";
import "./Footer.css";

export function Footer() {
	return (
		<footer className="Footer">
			<div className="Footer-content">
				<h2 className="Footer-title">Customer Reviews</h2>

				<div className="Footer-main">

					<FormBody />

					<section className="Footer-reviews">
						<Review
							name="Carlos Celis"
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit"
						/>
						<Review
							name="Diego Cueva"
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit"
						/>
						<Review
							name="Jose"
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit"
						/>
					</section>
				</div>
			</div>
		</footer>
	);
}
