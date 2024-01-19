import photo from "../assets/homepic.png";

import "./Home.scss";
export const Home = () => {
    return (
        <div id="home-container">
            <div id="home-banner">Wedding Website Coming Soon!</div>

            <div id="home-texts">
                <h1 id="home-heading">Please Join Us September 2025</h1>
                <p className="home-text">Details to come </p>
                <p className="home-text"> </p>
                <p className="home-text"></p>
            </div>

            <div id="homediv">
                <img id="home-photo" src={photo} alt="homephoto" />
            </div>
        </div>
    );
};
