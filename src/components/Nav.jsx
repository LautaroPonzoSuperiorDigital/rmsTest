import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";
import Logout from "../assets/img/Logout.svg";
import Search from "../assets/img/Search.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/listings.css";

 const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            {/* Logo */}
            <div className="navbar-brand">
              <img className="logoNav" src={Logo} alt="Logo" />
            </div>
    
            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link custom-item" to="/listings">
                    LISTINGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-item" to="/tenants">
                    TENANTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-item" to="/applicants">
                    APPLICANTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-item" to="/documents">
                    DOCUMENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-item" to="/subAdmins">
                    SUB ADMINS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link chat" to="/chats">
                    CHATS
                    <img className="Search" src={Search} alt="Search" />
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav ms-auto username">
              <li className="nav-item d-flex align-items-center">
                <Link className="nav-link user" to="/profile">
                  <span className="username-text">John Smith</span>
                </Link>
                <Link className="nav-link logout" to="/login">
                  <img className="Logout" src={Logout} alt="Logout" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
 
export default Nav;
