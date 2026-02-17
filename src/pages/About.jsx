import { motion } from 'framer-motion';
import { Heart, Shield, Zap, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            <section className="py-24 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 mb-8">We're on a mission to <br /><span className="text-blue-600">democratize sales growth</span></h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Grow Mate CRM was founded on a simple belief: every small business deserves world-class tools to manage their customers and grow their revenue, without the enterprise complexity.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-extrabold text-gray-900">Born in the heart of startup hustle.</h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                In 2024, our founders saw many small businesses struggling with outdated tools or overly complex CRM systems that required months of training. We decided to build something different — a CRM that feels natural, works the way you think, and actually helps you close deals instead of slowing you down.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <p className="text-4xl font-black text-blue-600 mb-2">10k+</p>
                                    <p className="text-gray-500 font-medium">Active Businesses</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-blue-600 mb-2">50+</p>
                                    <p className="text-gray-500 font-medium">Global Team Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                                alt="Team collab"
                                className="rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Heart className="text-rose-500" />, title: "Customer First", desc: "We build for you, not for shareholders." },
                            { icon: <Zap className="text-amber-500" />, title: "Radical Simplicity", desc: "If it's not simple, it's not finished." },
                            { icon: <Shield className="text-blue-500" />, title: "Absolute Trust", desc: "Your data is your most valuable asset." },
                            { icon: <TrendingUp className="text-emerald-500" />, title: "Growth Mindset", desc: "We improve every single day." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-sm border border-gray-100">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                                <p className="text-gray-500">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
