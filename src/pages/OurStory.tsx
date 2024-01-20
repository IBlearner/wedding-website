import "./OurStory.scss";
import imageqa from "../assets/qa.jpg";
import imageformal from "../assets/formal.jpg";
import imagenandos from "../assets/nandos1.jpg";
import imagecmc from "../assets/cmc.jpg";
import imagenand from "../assets/nandos2.jpg";
import imagesing from "../assets/singaporpe.jpg";
import imagejapan from "../assets/japan.jpg";
import imagegrad from "../assets/grad.png";
import imageviet from "../assets/halongbay.jpg";
import imagesold from "../assets/sold.jpg";
import imageaccent from "../assets/accenture.jpg";

export const OurStory = () => {
    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <h2 className="years">2009</h2>
                    <p className="descript">
                        First year at high school. Kien Vi & Sam both attended Clairvaux Macillop College at Upper Mt
                        Gravatt but barely knew each other existed.
                    </p>

                    <img id="cmc-photo" src={imagecmc} alt="cmcphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">2011</h2>
                    <p className="descript">
                        In 2011, both of them moved to Queensland Academy for Science, Mathematics & Technology to
                        pursue their love for academia with a bunch of other people from CMC. This is where their love
                        story started on the 11th of April 2011.
                    </p>
                    <img id="qa-photo" src={imageqa} alt="qaphoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="years">2013</h2>
                    <p className="descript">
                        In 2013, both of them graduated from high school to pursue Engineering and Science Degrees from
                        Queensland University of Technology.
                    </p>
                    <img id="formal-photo" src={imageformal} alt="formalphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">2014</h2>
                    <p className="descript">
                        In 2014, they both started university and Sam found her first job at Nandos Garden City.
                    </p>
                    <img id="nando-photo" src={imagenandos} alt="nandophoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="years">2016</h2>
                    <p className="descript">
                        In 2016, they found themselves changing degrees that fit within their passions. Kien Vi joined
                        Sam at Nandos!
                    </p>
                    <img id="nando1-photo" src={imagenand} alt="nando1photo" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">2017</h2>
                    <p className="descript">
                        In 2017, Sam & Kien Vi enjoyed their first overseas trip together to Malaysia, Singapore and
                        Thailand.
                    </p>
                    <img id="singapore-photo" src={imagesing} alt="singphoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="years">2018</h2>
                    <p className="descript">2018 saw them then travel to Japan to enjoy cherry blossom season!</p>
                    <img id="japan-photo" src={imagejapan} alt="japanphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">2020</h2>
                    <p className="descript">
                        In 2020, both of them finally graduated from their Bachelors Degrees where Sam continued to
                        pursue postgraduate studies and Kien Vi was pursuing a Junior Web Developer position.
                    </p>
                    <img id="grad-photo" src={imagegrad} alt="gradphoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="years">2021</h2>
                    <p className="descript">
                        Kien Vi & Sam both finally left Nandos and found full time jobs at Accenture & Mater Hospital
                        respectively!
                    </p>
                    <img id="accen-photo" src={imageaccent} alt="accentphoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">January 2023</h2>
                    <p className="descript">They were blessed to have bought their first home together!</p>
                    <img id="sold-photo" src={imagesold} alt="soldphoto" />
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2 className="years">November 2023</h2>
                    <p className="descript">
                        In November 2023, they went to Vietnam for a holiday and to visit Kien Vi's family. This is
                        where they got engaged, 12 years after being in eachothers life.
                    </p>
                    <img id="engaged-photo" src={imageviet} alt="engagephoto" />
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2 className="years">2024</h2>
                    <p className="descript">
                        Sam graduated from her Masters and is now pursuing her dream job as a Biomedical Data Scientist.
                    </p>
                </div>
            </div>
        </div>
    );
};
