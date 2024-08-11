import { useEffect, useState } from "react";
import "./App.scss";
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { FAQ } from "./pages/faq";
import { RSVP } from "./pages/rsvp";
import { Schedule } from "./pages/schedule";
import { Footer } from "./components/footer/footer";
import { formatDistanceStrict } from "date-fns";
// Icon imports
import { IoIosMenu } from "react-icons/io";

function App() {
	const [currentPage, setCurrentPage] = useState<string>("Home");
	const [menuVisible, setMenuVisible] = useState<boolean>(false);
	const weddingDay = new Date(2026, 3, 11);

	useEffect(() => {
		document.getElementById("mobile-menu-button")?.addEventListener("click", () => {
			document.getElementById("mobile-menu-button")!.style.pointerEvents = "none";
			setTimeout(() => {
				document.getElementById("mobile-menu-button")!.style.pointerEvents = "auto";
			}, 1000);
		});
	}, []);

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
			<div id="mobile-menu-button" onClick={() => setMenuVisible(!menuVisible)}>
				<IoIosMenu size={24} />
			</div>
		);
	};

	const closeMobileMenu = () => {
		setMenuVisible(false);
	};

	const getHomeBanner = () => {
		return (
			<div id="home-banner">
				<h1>Kienvi & Samantha</h1>
				<div>11th April 2026 • Brisbane Australia</div>
				<div>{formatDistanceStrict(Date.now(), weddingDay, { unit: "day" })} more days to go!</div>
			</div>
		);
	};

	return (
		<>
			{getHomeBanner()}
			{checkDeviceIsMobile() ? getMobileMenuButton() : null}

			<div id="menu-tabs" className={`${menuVisible ? "menu-visible" : "menu-hidden"}`}>
				<button
					className={`menu-tab ${currentPage === "Home" ? "selected" : ""}`}
					onClick={() => {
						setCurrentPage("Home");
						closeMobileMenu();
					}}
				>
					HOME
				</button>
				<button
					className={`menu-tab ${currentPage === "OurStory" ? "selected" : ""}`}
					onClick={() => {
						setCurrentPage("OurStory");
						closeMobileMenu();
					}}
				>
					OUR STORY
				</button>
				<button
					className={`menu-tab ${currentPage === "Schedule" ? "selected" : ""}`}
					onClick={() => {
						setCurrentPage("Schedule");
						closeMobileMenu();
					}}
				>
					SCHEDULE
				</button>
				<button
					className={`menu-tab ${currentPage === "FAQ" ? "selected" : ""}`}
					onClick={() => {
						setCurrentPage("FAQ");
						closeMobileMenu();
					}}
				>
					FAQ
				</button>
				<button
					className={`menu-tab ${currentPage === "RSVP" ? "selected" : ""}`}
					onClick={() => {
						setCurrentPage("RSVP");
						closeMobileMenu();
					}}
				>
					RSVP
				</button>
			</div>

			{getCurrentPage()}
			{<Footer />}
		</>
	);
}

export default App;
