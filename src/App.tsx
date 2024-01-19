import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { FAQ } from "./pages/FAQ";
import { RSVP } from "./pages/RSVP";
import { Schedule } from "./pages/Schedule";

function App() {
    const [currentPage, setCurrentPage] = useState("Home");

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

    return (
        <>
            <div id="buttonGroup">
                <button
                    className={`barButtons ${currentPage === "Home" ? "selected" : ""}`}
                    onClick={() => {
                        setCurrentPage("Home");
                    }}
                >
                    Home
                </button>
                <button
                    className={`barButtons ${currentPage === "OurStory" ? "selected" : ""}`}
                    onClick={() => {
                        setCurrentPage("OurStory");
                    }}
                >
                    Our Story
                </button>
                <button
                    className={`barButtons ${currentPage === "Schedule" ? "selected" : ""}`}
                    onClick={() => {
                        setCurrentPage("Schedule");
                    }}
                >
                    Schedule
                </button>
                <button
                    className={`barButtons ${currentPage === "FAQ" ? "selected" : ""}`}
                    onClick={() => {
                        setCurrentPage("FAQ");
                    }}
                >
                    FAQ
                </button>
                <button
                    className={`barButtons ${currentPage === "RSVP" ? "selected" : ""}`}
                    onClick={() => {
                        setCurrentPage("RSVP");
                    }}
                >
                    RSVP
                </button>
            </div>
            {getCurrentPage()}
        </>
    );
}

export default App;
