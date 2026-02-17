import { motion } from 'framer-motion';
import { Rocket, Chrome, Github, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex">
            {/* Left Side: Branding/Visuals */}
            <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden items-center justify-center p-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>

                <div className="relative z-10 space-y-12">
                    <Link to="/" className="flex items-center space-x-3 text-white">
                        <div className="bg-white p-2 rounded-xl text-blue-600">
                            <Rocket size={32} />
                        </div>
                        <span className="text-4xl font-black">Grow Mate</span>
                    </Link>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-extrabold text-white leading-tight">
                            Revisit your deals and <br /> grow your empire.
                        </h2>
                        <p className="text-xl text-blue-100 max-w-lg">
                            Unlock the full potential of your sales team with our intuitive CRM platform.
                        </p>
                    </div>

                    <div className="bg-blue-700/50 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                        <p className="text-white italic text-lg mb-4">
                            "Grow Mate has been a game-changer for our outbound sales. We've seen a 40% uptick in responses."
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                            <div>
                                <p className="font-bold text-white">David Miller</p>
                                <p className="text-sm text-blue-200">Head of Growth, ScaleX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md space-y-10"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-gray-900">Welcome Back</h1>
                        <p className="text-gray-500">Sign in to manage your sales pipelines.</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                            <Chrome size={20} />
                            <span>Log in with Google</span>
                        </button>
                        <button className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                            <Github size={20} />
                            <span>Log in with GitHub</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-400 font-medium">Or continue with email</span>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="muskan@example.com"
                                className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700">Password</label>
                                <button type="button" className="text-sm font-bold text-blue-600">Forgot password?</button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border border-transparent px-6 py-4 rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                            <span>Sign In</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 font-medium">
                        Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create an account</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
