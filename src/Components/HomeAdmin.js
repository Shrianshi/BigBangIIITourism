import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";
import Backimage from '../assets/img/Backimage6.jpg'

const HomeAdmin=()=>{
    return(
        <div>
            <NavbarAdmin/>
            <div className="main-img mt-5">
                <img src={Backimage} className="container-fluid px-1" />
                <div className="image-text "> "Explore, Dream, Discover, Repeat."</div>
            </div>
            <Footer></Footer>
        </div>
       )
   
}

export default HomeAdmin;