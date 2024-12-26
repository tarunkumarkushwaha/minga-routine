import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-400">
            <div className="flex justify-between items-center relative p-3">
                <h1 className="sm:text-xl text-sm font-bold bg-gray-200 p-2 rounded-lg">
                    <span className="text-blue-500">Min</span>
                    <span className="text-green-500">Ga</span>
                    <span className="text-yellow-500"> Routine</span>
                </h1>

                <button
                    className="lg:hidden p-2 bg-gray-200 rounded-lg hover:bg-gray-300 z-20 relative"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                <div
                    className={`absolute top-14 right-0 left-0 lg:p-0 p-5 w-full bg-slate-400 lg:static lg:flex lg:w-auto flex-col lg:flex-row gap-3 items-center transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
                        } lg:block`}
                >
                    <Link to="/" className={`px-4 py-2 rounded-lg hover:bg-blue-600 ${location.pathname === "/" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}>
                        Home
                    </Link>

                    <Link to="/savedroutines" className={`px-4 py-2 rounded-lg hover:bg-blue-600 ${location.pathname === "/savedroutines" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}>
                        Saved Routines
                    </Link>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;