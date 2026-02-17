import { motion } from 'framer-motion';
import { Rocket, Chrome, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side: Features Checklist */}
            <div className="hidden lg:flex lg:w-1/2 bg-gray-900 relative overflow-hidden items-center justify-center p-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>

                <div className="relative z-10 space-y-12">
                    <Link to="/" className="flex items-center space-x-3 text-white">
                        <div className="bg-blue-600 p-2 rounded-xl text-white">
                            <Rocket size={32} />
                        </div>
                        <span className="text-4xl font-black">Grow Mate</span>
                    </Link>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-extrabold text-white leading-tight">
                            Start your 14-day <br /> <span className="text-blue-500">Free Trial</span> today.
                        </h2>
                        <p className="text-xl text-gray-400">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>

                    <ul className="space-y-6">
                        {[
                            "Unlimited pipelines & contacts",
                            "Omnichannel communication tools",
                            "Advanced sales automation",
                            "Real-time analytics & reports",
                            "24/7 Priority customer support"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center space-x-4 text-white text-lg">
                                <CheckCircle2 className="text-blue-500 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md space-y-10 py-12"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-gray-900">Create Account</h1>
                        <p className="text-gray-500">Join 10,000+ growing teams using Grow Mate.</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                            <Chrome size={20} />
                            <span>Sign up with Google</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-400 font-medium">Or use your email</span>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Muskan Gupta"
                                    className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="muskan@company.com"
                                    className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Create Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                            />
                            <p className="text-xs text-gray-400 mt-2">Must be at least 8 characters long.</p>
                        </div>

                        <div className="flex items-start space-x-3">
                            <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required />
                            <label className="text-sm text-gray-500">
                                I agree to the <Link to="/terms" className="text-blue-600 font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                            <span>Create My Account</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 font-medium">
                        Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SignUp;
