import { NavLink, Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="min-h-screen bg-pink-100 font-serif flex flex-col ">
            <nav className="bg-white text-pink-50 px-8 py-4 flex items-center justify-between shadow-lg">
                <NavLink to = "/" className = "text-2xl font-bold tracking-wide">
                RAGA </NavLink>
                <div className="space-x-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-pink-300 font-bold underline" : "text-red-950 hover:text-pink-300 font-bold transition-colors duration-300"}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-pink-300 font-bold underline" : "text-red-950 hover:text-pink-300 font-bold transition-colors duration-300"}>
                        About
                    </NavLink>
                    <NavLink to="/catalogues" className={({ isActive }) => isActive ? "text-pink-300 font-bold underline" : "text-red-950 hover:text-pink-300 font-bold transition-colors duration-300"}>
                        Catalogues
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-pink-300 font-bold underline" : "text-red-950 hover:text-pink-300 font-bold transition-colors duration-300"}>
                        Contact Us
                    </NavLink>
                    <Link to="/contact" className="ml-4 px-4 py-2 bg-pink-300 text-pink-900 rounded hover:bg-pink-400 transition-colors duration-300"
                    >
                        Book Now
                    </Link>
                </div>
            </nav>
        </ div>
    );
}