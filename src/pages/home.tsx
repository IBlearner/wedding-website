import photo from "../assets/homeviet2.png";

import "./Home.scss";
export const Home = (props: { navigateToRsvp: () => void }) => {
	const getRsvpButton = () => {
		return (
			<button id="rsvp-button" onClick={() => props.navigateToRsvp()}>
				RSVP
			</button>
		);
	};

	return (
		<div id="home-container">
			<div id="home-photo">
				<img src={photo} alt="homephoto" loading="lazy" />
			</div>
			{getRsvpButton()}
		</div>
	);
};
