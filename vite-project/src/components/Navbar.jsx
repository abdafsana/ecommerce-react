import "../../src/index.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav>
        <ul className="navbar display__com">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;