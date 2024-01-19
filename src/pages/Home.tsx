import photo from "../assets/homepic.png";

import "./Home.scss";
export const Home = () => {
    return (
        <div id="home-container">
            <div id="home-text">Wedding Website Coming Soon!</div>
            <img id="home-photo" src={photo} alt="homephoto" />
        </div>
    );
};
