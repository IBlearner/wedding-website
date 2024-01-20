import photo from "../assets/homeviet.png";

import "./Home.scss";
export const Home = () => {
    return (
        <div id="home-container">
            <div id="home-texts">
                <h1 id="home-heading">Please Join Us September 2025</h1>
                <p className="home-text">
                    We would love everyone to join us at ______ on ______ September 2025 at ___:___pm. Please see the
                    FAQ page for any queries and RVSP by the ____ of August 2025 to ensure all dietary requirements are
                    met. Thank you everyone! Hope to see you all there!
                </p>
                <p className="home-text"> </p>
                <p className="home-text"></p>
            </div>

            <div id="homediv">
                <img id="home-photo" src={photo} alt="homephoto" />
            </div>
        </div>
    );
};
