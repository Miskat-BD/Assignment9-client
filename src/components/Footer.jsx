import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo + Description */}
                <div>
                    <h2 className="text-2xl font-bold">MediQueue</h2>
                    <p className="text-gray-400 mt-3 text-sm">
                        A smart tutor booking platform for students to find and book
                        online learning sessions easily.
                    </p>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Find Tutors</li>
                        <li>Book Sessions</li>
                        <li>Online Learning</li>
                        <li>Student Support</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Email: support@mediqueue.com</li>
                        <li>Phone: +880 1234 567890</li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-sky-400">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
                © 2026 MediQueue. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;