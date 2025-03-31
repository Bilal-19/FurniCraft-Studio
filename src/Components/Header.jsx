import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white text-gray-900 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <img src="/header_logo.png" className="h-fit" alt="FurniCraft Logo" />
                </Link>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Navigation Menu */}
                <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white font-normal ff-roboto text-[#374151]">
                        <li>
                            <NavLink to="/" className="block py-2 hover:underline underline-offset-4">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 hover:underline underline-offset-4">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="block py-2 hover:underline underline-offset-4">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="block py-2 hover:underline underline-offset-4">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials" className="block py-2 hover:underline underline-offset-4">
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 hover:underline underline-offset-4">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}