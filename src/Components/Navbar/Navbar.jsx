import React from 'react';
import DronacharyaLogo from '../../assets/Images/logo.jpg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 px-12 bg-white shadow-sm border-b border-gray-100">

            <div className="flex items-center space-x-3"> {/* Increased space-x for better visual separation */}
                <img src={DronacharyaLogo} alt="Dronacharya Logo" className="h-8" /> {/* Adjust height as needed */}
                <span className="font-extrabold text-2xl" style={{ color: '#4b38ef' }}>
            <span style={{ color: '#35b9a1' }}>Dro</span>nacharya
        </span>
            </div>

            <div className="flex space-x-8 text-gray-950 font-medium text-md">
                <a href="#" className="hover:text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600">Sign up as a Tutor</a>
                <a href="#" className="hover:text-blue-600">Plans</a>
            </div>

            <div className="flex items-center space-x-4">
                <button className="bg-[#35b9a1] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2ea28d] transition-colors shadow-md">
                    Login
                </button>
            </div>
        </nav>
    );
};
