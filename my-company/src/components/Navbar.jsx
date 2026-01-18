import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <ul style={
                {display: "flex", justifyContent: "space-between",
                listStyle: "none", marginLeft: "1400px", gap: "20px"
                }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;