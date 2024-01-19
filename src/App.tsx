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
            <button
                onClick={() => {
                    setCurrentPage("Home");
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    setCurrentPage("OurStory");
                }}
            >
                Our Story
            </button>
            <button
                onClick={() => {
                    setCurrentPage("Schedule");
                }}
            >
                Schedule
            </button>
            <button
                onClick={() => {
                    setCurrentPage("FAQ");
                }}
            >
                FAQ Page
            </button>
            <button
                onClick={() => {
                    setCurrentPage("RSVP");
                }}
            >
                RSVP
            </button>
            {getCurrentPage()}
        </>
    );
}

export default App;
