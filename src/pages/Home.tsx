import photo from "../assets/homeviet2.png";

import "./Home.scss";
export const Home = () => {
	return (
		<div id="home-container">
			<div id="home-photo">
				<img src={photo} alt="homephoto" loading="lazy" />
			</div>
		</div>
	);
};
