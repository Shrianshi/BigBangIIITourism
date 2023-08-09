import './NavbarAgent.css'
import TravelIcon from '../assets/img/Travelicon2.png';
import { Link } from 'react-router-dom';

const NavbarAgent = () => {
    return (
        <div className='container-fluid'>
            <nav className="nav fixed-top justify-content-end navbar-light bg-light p-4">
                <div class="navbar-brand a" href="#">
                    <img src={TravelIcon} width="50" height="50" class="d-inline-block align-top" alt="" />
                    <span className='span px-4 fw-bold h3'><Link to='/HomeAgent' className='main-link nav-heading'>Kanini Travels</Link></span>

                </div>
                
                <Link to="/PackageView" className="nav-link">Add Packages</Link>
                
                <Link to="/RegisterAgent" className="nav-link">contact details</Link>
                
                <Link to="/" className="nav-link">Logout</Link>
                
            
            </nav>

        </div>
    )
}
export default NavbarAgent;