import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20">
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">Get in touch</h1>
                        <p className="text-xl text-gray-500">We'd love to hear from you. Our team is always here to chat.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start space-x-6">
                                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email us</h4>
                                    <p className="text-gray-500 mb-2">Our team is here to help.</p>
                                    <a href="mailto:support@growmate.com" className="text-blue-600 font-bold">support@growmate.com</a>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start space-x-6">
                                <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Live Chat</h4>
                                    <p className="text-gray-500 mb-2">Speak to us in real-time.</p>
                                    <button className="text-green-600 font-bold">Start a chat</button>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start space-x-6">
                                <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Call us</h4>
                                    <p className="text-gray-500 mb-2">Mon-Fri from 9am to 6pm.</p>
                                    <a href="tel:+918001234567" className="text-purple-600 font-bold">+91 800 123 4567</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white p-10 lg:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl"
                            >
                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="Muskan"
                                                className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Gupta"
                                                className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="muskan@example.com"
                                            className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Company Size</label>
                                        <select className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all appearance-none">
                                            <option>1-10 employees</option>
                                            <option>11-50 employees</option>
                                            <option>51-200 employees</option>
                                            <option>200+ employees</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Message</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Tell us about your requirements..."
                                            className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center space-x-3">
                                        <span>Send Message</span>
                                        <Send size={20} />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-100 h-96 rounded-[3rem] overflow-hidden relative flex items-center justify-center border-4 border-white shadow-2xl">
                        <div className="text-center space-y-4">
                            <MapPin size={48} className="mx-auto text-blue-600" />
                            <div>
                                <h4 className="font-extrabold text-2xl text-gray-900">Visit our office</h4>
                                <p className="text-gray-500">123 Business Hub, MG Road, Bangalore, India</p>
                            </div>
                        </div>
                        {/* Artistic overlay */}
                        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
