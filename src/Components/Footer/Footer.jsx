import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    const footerData = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "#" },
                { name: "About Us", href: "#" },
                { name: "Subscription Plans", href: "#" },
                { name: "Contact Us", href: "#" }
            ],
        },
        {
            title: "For Users",
            links: [
                { name: "Tutor Registration", href: "#" },
                { name: "Login", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" }
            ],
        },
    ];

    // Custom colors from the Navbar/Logo for the brand elements
    const primaryColor = '#4b38ef';
    const secondaryColor = '#35b9a1';

    return (
        // Footer: Contains the main dark background and internal top padding
        <footer className="bg-[#0f172a] pt-16">
            {/* Max-width container, NO horizontal padding to remove container margins */}
            <div className="max-w-7xl mx-auto">
                {/* Grid Container: ADD horizontal padding here for content spacing */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 pb-12 px-4 sm:px-6 lg:px-8">

                    {/* Column 1: Logo and Description */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-4 pr-10">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="font-extrabold text-2xl text-white">
                                <span style={{ color: secondaryColor }}>Dro</span>nacharya
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm mb-6">
                            Connecting students with the best tutors across India. Find the perfect match for your learning needs.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Columns 2-3: Quick Links and For Users */}
                    {footerData.map((section, index) => (
                        // Added offset padding to grid items to align with wrapper padding
                        <div key={index} className="col-span-1 md:col-span-2 lg:col-span-2 lg:pl-4">
                            <h6 className="font-bold text-lg text-white mb-4">
                                {section.title}
                            </h6>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 4: Contact Us */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pl-4">
                        <h6 className="font-bold text-lg text-white mb-4">
                            Contact Us
                        </h6>
                        <ul className="space-y-3">
                            {/* Address */}
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: secondaryColor }} />
                                <span className="text-gray-400 text-sm">
                                    109, Manas Square, Sugamau Road, <br/>
                                    Indira Nagar, Lucknow, UP 226016, India
                                </span>
                            </li>
                            {/* Phone */}
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3" style={{ color: secondaryColor }} />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            {/* Email */}
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3" style={{ color: secondaryColor }} />
                                <a href="mailto:care@dronacharyatutorials.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    care@dronacharyatutorials.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 py-4 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Dronacharya. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}