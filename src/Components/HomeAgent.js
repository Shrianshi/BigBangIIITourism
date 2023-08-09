import NavbarAgent from "./NavbarAgent";
import Footer from "./Footer";
import Mainimage from "../assets/img/Mainimage4.jpg";

const HomeAgent = () => {
    return (
        <div>
            <NavbarAgent />
            <div className="main-img">
                <img src={Mainimage} className="container-fluid px-1" />
                <div className="image-text "> "Escape the ordinary and embrace the extraordinary."</div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeAgent;