import { Link } from "react-router-dom";

function Navbar() {
    
    return (
        <nav className="bg-teal-600 text-white p-4 flex justify-between fixed top-0 w-full z-50 shadow-lg">
          <h1 className="font-bold">ViralX</h1>
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/Explore">Explore</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Favorites">Favorites</Link>
          </div>
        </nav>

    );
}


export default Navbar;