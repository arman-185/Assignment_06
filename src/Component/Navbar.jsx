import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <nav className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-10">
            <div className="navbar-start">
                <a className="text-4xl font-bold" style={{ color: '#7c3aed' }}>
                    DigiTools
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 text-gray-600 font-medium">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="indicator">
                    <button className="btn btn-primary btn-sm">
                       <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
                <a className="btn btn-ghost btn-sm text-gray-600 font-medium hidden md:flex">Login</a>
              <button className="btn btn-primary rou">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
