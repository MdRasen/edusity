import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
