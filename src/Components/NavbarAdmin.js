import './Navbar.css'
import TravelIcon from '../assets/img/Travelicon2.png';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <div className='container-fluid'>
            <nav className="nav fixed-top justify-content-end navbar-light bg-light p-4 navbar">
                <div class="navbar-brand a" href="#">
                    <img src={TravelIcon} width="50" height="50" class="d-inline-block align-top" alt="" />
                    <span className='span px-4 fw-bold h3'><Link to='/HomeAdmin' className='main-link nav-heading'>Kanini Travels</Link></span>

                </div>
                <Link to={"/Agents"} className="nav-link">Agents</Link>
                <Link to={"/PackagesAdmin"} className="nav-link">Packages</Link>
                <Link to={"/AddImage"}className="nav-link">Add Images</Link>
                <Link to={"/Reviews"}className="nav-link">Reviews</Link>
                {/* <Link to={"/RegisterAgent"}className="nav-link">Book a trip</Link> */}
                <Link to={"/"} className="nav-link">Logout</Link>
            </nav>

        </div>
    )
}
export default NavbarAdmin;