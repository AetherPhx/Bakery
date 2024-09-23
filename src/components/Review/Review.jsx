import "./Review.css";

export const Review = ({ name, review }) => {
	return (
		<article className="Review">
			<header className="Review-header">
				<img
					className="Review-rating"
					src="estrellas.png"
					alt="Customer Rating"
				/>
				<span className="Review-close">X</span>
			</header>

			<main className="Review-content">
				<p className="Review-text">{review}</p>
			</main>

			<footer className="Review-footer">
				<p className="Review-author">{name}</p>
			</footer>
		</article>
	);
};
