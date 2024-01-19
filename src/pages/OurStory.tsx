import "./OurStory.scss";
import imageqa from "../assets/QASMT.jpg";
import imageformal from "../assets/formal.jpg";
import imagenandos from "../assets/nandos1.jpg";
import imagecmc from "../assets/cmc.jpg";

export const OurStory = () => {
    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <h2>2009</h2>
                    <p>Met at Clairvaux Mackillop College</p>
                    <img id="cmc-photo" src={imagecmc} alt="cmcphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>2011</h2>
                    <p>Moved to same high school - QASMT</p>
                    <img id="qa-photo" src={imageqa} alt="qaphoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2013</h2>
                    <p>Graduated from QASMT</p>
                    <img id="formal-photo" src={imageformal} alt="formalphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>2014</h2>
                    <p>Started University and Sam got her first job at Nandos</p>
                    <img id="nando-photo" src={imagenandos} alt="nandophoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2016</h2>
                    <p>Changed Degrees and Kien Vi joined Sam at Nandos</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>2017</h2>
                    <p>Trip to Malaysia, Singapore and Thailand</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2018</h2>
                    <p>Trip to Japan</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>2020</h2>
                    <p>Finally graduated from our Bachelors</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2021</h2>
                    <p>Both finally left Nandos and found full time jobs</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>January 2023</h2>
                    <p>Bought our first home!</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>November 2023</h2>
                    <p>Went to Vietnam and got engaged!</p>
                </div>
            </div>
        </div>
    );
};
