import { motion } from 'framer-motion';
import { MousePointerClick, Settings2, LineChart, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Step 1: Capture Leads",
            desc: "Connect your website forms, social media profiles, and email as sources. Grow Mate automatically pulls in every lead with all available details.",
            icon: <MousePointerClick className="w-10 h-10 text-blue-600" />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Step 2: Manage & Track",
            desc: "Move deals through your custom pipeline stages. Assign tasks, set reminders, and communicate directly with leads from a single dashboard.",
            icon: <Settings2 className="w-10 h-10 text-indigo-600" />,
            image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Step 3: Close & Grow",
            desc: "Use our deep insights to understand what's working. Close more deals and scale your sales process with automated follow-ups.",
            icon: <LineChart className="w-10 h-10 text-emerald-600" />,
            image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    return (
        <div className="pt-20">
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">Simple, yet powerful</h1>
                        <p className="text-xl text-gray-500">How Grow Mate CRM helps you scale your sales from day one.</p>
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:items-center gap-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center border border-gray-100 shadow-sm">
                                        {step.icon}
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900">{step.title}</h2>
                                    <p className="text-xl text-gray-500 leading-relaxed">{step.desc}</p>
                                    <ul className="space-y-4">
                                        {[1, 2, 3].map(item => (
                                            <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                                                <CheckCircle2 className="text-green-500" />
                                                <span>Benefit point {item} for this specific step</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                                >
                                    <img src={step.image} alt={step.title} className="w-full h-[400px] object-cover" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
                    <h2 className="text-4xl font-bold">Ready to see it in action?</h2>
                    <p className="text-xl text-gray-400">Join thousands of teams that have already improved their conversion rates by 25%.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all">Start Free Trial</button>
                        <button className="px-10 py-5 bg-transparent border border-gray-700 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all">Request Demo</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
