import './Navbar.css'
import TravelIcon from '../assets/img/Travelicon2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <nav className="nav fixed-top justify-content-end navbar-light bg-light p-4 navbar">
                <div class="navbar-brand a" href="#">
                    <img src={TravelIcon} width="50" height="50" class="d-inline-block align-top" alt="" />
                    <span className='span px-4 fw-bold nav-heading'><Link to='/Home' className='main-link'>Kanini Travels</Link></span>

                </div>
                <Link to={"/PackagesView"} className="nav-link">Packages</Link>
                <Link to={"/Booking"} className="nav-link">Book a trip</Link>
                <Link to={"/FeedbackList"} className="nav-link">Reviews</Link>
                <Link to={"/ImageGallery"}className="nav-link">ImageGallery</Link>
                <Link to={"/"} className="nav-link">Logout</Link>
                
                {/* <a className="nav-link">Images</a>
                <a className="nav-link">Book a trip</a>
                <a className="nav-link">Logout</a> */}
            </nav>

        </div>
    )
}
export default Navbar;