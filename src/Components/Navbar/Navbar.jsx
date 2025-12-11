import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    /**** State to control the visibility of the mobile sidebar menu ****/
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Sign up as a Tutor", href: "#" },
        { name: "Plans", href: "#" },
    ];

    return (
        /**** Responsive Padding: Adjusts padding based on screen size ****/
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-12 bg-white shadow-sm border-b border-gray-100 relative">

            <div className="flex items-center space-x-3">
                <img src='/logo.jpg' alt="Dronacharya Logo" className="h-8" />
                <span className="font-extrabold text-2xl" style={{ color: '#4b38ef' }}>
                    <span style={{ color: '#35b9a1' }}>Dro</span>nacharya
                </span>
            </div>

            {/* Desktop Navigation Links:
                Purpose: Show navigation links only on large screens (lg) and up.
                Responsiveness: `hidden` by default (mobile/tablet), `lg:flex` makes it visible and aligned on desktop.
            */}
            <div className="hidden lg:flex space-x-8 text-gray-950 font-medium text-md">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-blue-600">{link.name}</a>
                ))}
            </div>

            {/* Desktop Login Button:
                Purpose: Show the login button only on large screens (lg) and up.
                Responsiveness: `hidden` by default (mobile/tablet), `lg:flex` makes it visible on desktop.
            */}
            <div className="hidden lg:flex items-center space-x-4">
                <button className="bg-[#35b9a1] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2ea28d] transition-colors shadow-md">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button (Hamburger/X Icon):
                Purpose: Show the menu toggle icon on mobile and tablet views.
                Responsiveness: `flex` (visible) by default, `lg:hidden` hides it on desktop.
            */}
            <div className="flex lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-950 focus:outline-none">
                    {/* Toggles between Menu (closed) and X (open) icons */}
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu (Sidebar):
                Purpose: The off-canvas menu containing all links and the Login button for small screens.
                Responsiveness:
                    1. `lg:hidden` ensures it only renders on mobile/tablet.
                    2. Dynamic class based on `isOpen`: `translate-x-full` moves it off-screen (hidden), `translate-x-0` slides it into view.
                    3. `fixed top-0 right-0 h-full w-64` positions it as a full-height sidebar on the right.
            */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6">
                    {/* Close Button at the top of the sidebar */}
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setIsOpen(false)} className="text-gray-950 focus:outline-none">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links */}
                    <ul className="space-y-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="block text-lg font-medium text-gray-950 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            /**** Login Button in the mobile menu (full width) ****/
                            <button
                                className="w-full bg-[#35b9a1] text-white px-5 py-2 mt-4 rounded-md font-semibold text-base hover:bg-[#2ea28d] transition-colors shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay for mobile menu:
                Purpose: A semi-transparent backdrop that closes the menu when clicked outside.
                Responsiveness: `lg:hidden` ensures it's only active on mobile/tablet when the menu is open.
            */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};