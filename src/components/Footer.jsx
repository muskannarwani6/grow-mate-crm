import { Link } from 'react-router-dom';
import { Rocket, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Rocket className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Grow Mate CRM
                            </span>
                        </Link>
                        <p className="text-gray-500 leading-relaxed">
                            Empowering small businesses to manage leads, close deals, and build lasting customer relationships with our all-in-one simple platform.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-blue-600 hover:shadow-md transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-blue-600 hover:shadow-md transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-blue-600 hover:shadow-md transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-blue-600 hover:shadow-md transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link to="/features" className="hover:text-blue-600 transition-colors">Features</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link></li>
                            <li><Link to="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                            <li><Link to="/signup" className="hover:text-blue-600 transition-colors">Request Demo</Link></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                            <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-blue-600 w-5 h-5 shrink-0" />
                                <span>123 Business Hub, MG Road, Bangalore, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-blue-600 w-5 h-5 shrink-0" />
                                <span>+91 800 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-blue-600 w-5 h-5 shrink-0" />
                                <span>support@growmate.com</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h5>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-white border border-gray-200 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full"
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© {currentYear} Grow Mate CRM. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                        <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
