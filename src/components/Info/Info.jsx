import "./Info.css";

export function Info() {
	return (
		<section className="info">
			<div className="info__content">
				<div className="info__content__text">
					<h2>Discover</h2>
					<h3>our story</h3>
					<p className="info__content__parrafo">
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						voluptatum magnam temporibus dolorum, fuga commodi.
					</p>
					<a href="#">Lear more</a>
				</div>
				<div className="info__content__img">
					<div className="info__content__img_uno">
						<img src="/src/asest/img/story-img.jpg" alt="imagen" />
					</div>
				</div>
			</div>
			<div className="info__content">
				<div className="info__content__img">
					<div className="info__content__img_uno">
						<img src="/src/asest/img/story-img.jpg" alt="imagen" />
					</div>
				</div>
				<div className="info__content__text">
					<h2>Explore</h2>
					<h3>menu</h3>
					<p className="info__content__parrafo">
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						voluptatum magnam temporibus dolorum, fuga commodi.
					</p>
					<a href="#">see full menu</a>
				</div>
			</div>
		</section>
	);
}
