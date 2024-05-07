import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function Navbar() {
    return (
        <nav>
            <ul className='navbar display__com'> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </Router>
    );
}

export default App;
