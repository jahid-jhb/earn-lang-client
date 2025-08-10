import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGoogleplay, SiApple } from 'react-icons/si';
import logo from '/logo.png';
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-base-200 py-5 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 ">
                <div className="flex flex-wrap justify-between items-start">
                    {/* Logo and description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />
                        <p className="text-sm">
                            Learn, grow, and enhance your language skills with the best instructors in the platform.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/find-tutors" className="hover:underline">Find Tutors</Link></li>
                            <li><Link to="/add-tutorials" className="hover:underline">Add Tutorials</Link></li>
                            <li><Link to="/my-tutorials" className="hover:underline">My Tutorials</Link></li>
                            <li><Link to="/my-booked-tutors" className="hover:underline">My Booked Tutors</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <ul>
                            <li><a href="jahid@gmail.com" className="hover:underline">jahid@gmail.com</a></li>
                            <li><a href="tel:+8801300000000" className="hover:underline">+8801300000000</a></li>
                        </ul>
                    </div>

                    {/* Download Section */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-3">Get the App</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:opacity-80">
                                <SiGoogleplay size={40} />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <SiApple size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="w-full text-center mt-8 bg-base-300 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Stay Updated!</h3>
                    <p className="text-sm mb-4">Subscribe to our newsletter and get the latest updates directly to your inbox.</p>
                    
                    {/* ============= */}
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a
                        target='_blank'
                        href="https://www.facebook.com/profile.php?id=61560598102068"
                        className="p-2 rounded-full transition-all"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        target='_blank'
                        href="https://x.com/jahid_jhb"
                        className="p-2 rounded-full transition-all"
                    >
                        <FaXTwitter size={24} />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="p-2 rounded-full transition-all"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="p-2 rounded-full transition-all"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            {/* Footer bottom text */}
            <div className="mt-12 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} EarnLang. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
