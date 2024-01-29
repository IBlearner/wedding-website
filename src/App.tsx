import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { FAQ } from "./pages/FAQ";
import { RSVP } from "./pages/RSVP";
import { Schedule } from "./pages/Schedule";

function App() {
	const [currentPage, setCurrentPage] = useState<string>("Home");
	const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(true);

	const getCurrentPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		} else if (currentPage === "OurStory") {
			return <OurStory />;
		} else if (currentPage === "Schedule") {
			return <Schedule />;
		} else if (currentPage === "FAQ") {
			return <FAQ />;
		} else if (currentPage === "RSVP") {
			return <RSVP />;
		}
	};

	const checkDeviceIsMobile = () => {
		return window.innerWidth <= 768;
	};

	const getMobileMenuButton = () => {
		return (
			<button id="mobile-menu-button" onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
				~
			</button>
		);
	};

	const closeMobileMenu = () => {
		setMobileMenuVisible(false);
	};

	return (
		<>
			<div id="home-banner">
				<h1 className="home-name">╼ Kien Vi </h1>
				<h2 id="home-other">&</h2>
				<h1 className="home-name">Samantha ╾ </h1>
				{checkDeviceIsMobile() ? getMobileMenuButton() : null}
			</div>
			{mobileMenuVisible ? (
				<div id="buttonGroup">
					<button
						className={`barButtons ${currentPage === "Home" ? "selected" : ""}`}
						onClick={() => {
							setCurrentPage("Home");
							closeMobileMenu();
						}}
					>
						❀ Home ❀
					</button>
					<button
						className={`barButtons ${currentPage === "OurStory" ? "selected" : ""}`}
						onClick={() => {
							setCurrentPage("OurStory");
							closeMobileMenu();
						}}
					>
						❀ Our Story ❀
					</button>
					<button
						className={`barButtons ${currentPage === "Schedule" ? "selected" : ""}`}
						onClick={() => {
							setCurrentPage("Schedule");
							closeMobileMenu();
						}}
					>
						❀ Schedule ❀
					</button>
					<button
						className={`barButtons ${currentPage === "FAQ" ? "selected" : ""}`}
						onClick={() => {
							setCurrentPage("FAQ");
							closeMobileMenu();
						}}
					>
						❀ FAQ ❀
					</button>
					<button
						className={`barButtons ${currentPage === "RSVP" ? "selected" : ""}`}
						onClick={() => {
							setCurrentPage("RSVP");
							closeMobileMenu();
						}}
					>
						❀ RSVP ❀
					</button>
				</div>
			) : null}

			{getCurrentPage()}
		</>
	);
}

export default App;
