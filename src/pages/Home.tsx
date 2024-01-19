import photo from "../assets/viewphoto.jpeg";
import "./Home.scss";
export const Home = () => {
    return (
        <div id="home-container">
            <img id="home-photo" src={photo} alt="homephoto" />
            <div id="home-text">Wedding Website Coming Soon!</div>
        </div>
    );
};
