import "./Review.css";

export const Review = () => {
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
				<p className="Review-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
				</p>
			</main>

			<footer className="Review-footer">
				<p className="Review-author">Name Surname</p>
			</footer>
		</article>
	);
};
