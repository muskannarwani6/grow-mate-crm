import { motion } from 'framer-motion';
import {
    Users,
    Target,
    Zap,
    MessageSquare,
    BarChart2,
    Users2,
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const animations = {
        fadeIn: {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
        },
        stagger: {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span>The #1 CRM for Growing Businesses</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                                Grow Faster with <br />
                                <span className="text-blue-600">Grow Mate CRM</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Manage leads, close deals, and build lasting customer relationships — all in one simple platform designed for small businesses and startups.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    to="/signup"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/40 transition-all flex items-center justify-center space-x-2 active:scale-95"
                                >
                                    <span>Start Free Trial</span>
                                    <ChevronRight size={20} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2 active:scale-95"
                                >
                                    <span>Request Demo</span>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                                            alt="User avatar"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500">
                                    Joined by <span className="font-bold text-gray-900">10,000+</span> teams this month
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Floating elements for visual interest */}
                            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                                    alt="CRM Dashboard Mockup"
                                    className="rounded-2xl w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Card Mockup */}
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="absolute bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block w-64"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-2 bg-green-100 rounded-lg">
                                            <TrendingUp className="text-green-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Revenue Groth</p>
                                            <p className="text-lg font-bold">+28.5%</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '70%' }}
                                            transition={{ delay: 1.8, duration: 1 }}
                                            className="h-full bg-green-500"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-widest">
                            Trusted by 10,000+ Growing Businesses
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <div className="h-10 text-3xl font-black text-gray-900 flex items-center italic">TECHCORP</div>
                        <div className="h-10 text-3xl font-black text-gray-900 flex items-center tracking-tighter">Velocity</div>
                        <div className="h-10 text-3xl font-black text-gray-900 flex items-center">CloudNine</div>
                        <div className="h-10 text-3xl font-black text-gray-900 flex items-center underline decoration-blue-600">SPARK</div>
                        <div className="h-10 text-3xl font-black text-gray-900 flex items-center">Aura.ai</div>
                    </div>

                    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Grow Mate has completely transformed how we handle leads. We closed 30% more deals in our first month.",
                                author: "Sarah Jenkins",
                                role: "CEO at TechFlow",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                            },
                            {
                                text: "The automation workflows saved our team 20 hours a week. It's the most intuitive CRM we've ever used.",
                                author: "Michael Chen",
                                role: "Sales Director",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
                            },
                            {
                                text: "Finally a CRM that doesn't feel like a spreadsheet. Simple, powerful, and actually fun to use.",
                                author: "Elena Rodriguez",
                                role: "Founder, Bloom Creative",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena"
                            }
                        ].map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                {...animations.fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
                            >
                                <div className="flex space-x-1 text-yellow-400 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => <TrendingUp key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-700 text-lg mb-8 italic">"{testimonial.text}"</p>
                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Overview */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Powerful Core Features</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Everything you need to scale your sales</h3>
                        <p className="text-gray-500 text-lg">
                            Say goodbye to messy spreadsheets and hello to a streamlined sales process that works for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8 text-blue-600" />,
                                title: "Lead Management",
                                desc: "Capture and organize leads effortlessly from multiple sources in one centralized dashboard."
                            },
                            {
                                icon: <Target className="w-8 h-8 text-blue-600" />,
                                title: "Sales Pipeline Tracking",
                                desc: "Visualize your entire sales journey and identify which deals need your attention most."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-blue-600" />,
                                title: "Automation & Workflows",
                                desc: "Automate repetitive tasks like follow-ups and data entry to focus on closing more deals."
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                                title: "Email & WhatsApp Integration",
                                desc: "Connect with customers on their favorite platforms directly from within the CRM."
                            },
                            {
                                icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
                                title: "Analytics & Reports",
                                desc: "Gain deep insights into your sales performance with real-time data and customizable reports."
                            },
                            {
                                icon: <Users2 className="w-8 h-8 text-blue-600" />,
                                title: "Team Collaboration",
                                desc: "Work together seamlessly with shared notes, task assignments, and activity tracking."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                {...animations.fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-blue-100 outline-none transition-all duration-300 group"
                            >
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                                <p className="text-gray-500 leading-relaxed mb-6">{feature.desc}</p>
                                <Link to="/features" className="text-blue-600 font-bold inline-flex items-center hover:translate-x-1 transition-transform outline-none">
                                    <span>Learn more</span>
                                    <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. How It Works Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Get started in 3 simple steps</h2>
                        <p className="text-gray-500 text-lg">No complex setups. No steep learning curves. Just growth.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-24 z-0"></div>

                        {[
                            {
                                step: "01",
                                title: "Capture Leads",
                                desc: "Import your existing data or capture new leads from your website automatically.",
                                img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                step: "02",
                                title: "Manage & Track",
                                desc: "Organize leads in your pipeline and follow up at the perfect moment with reminders.",
                                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                step: "03",
                                title: "Close & Grow",
                                desc: "Close more deals and use our deep analytics to scale your sales strategy further.",
                                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold border-8 border-white shadow-xl mb-8 group-hover:scale-110 transition-transform">
                                    {step.step}
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-4 mb-8 overflow-hidden">
                                    <img src={step.img} alt={step.title} className="rounded-2xl w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Benefits Section */}
            <section className="py-24 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                Designed for businesses that care about <span className="text-blue-400">efficiency</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Increase Sales Productivity",
                                        desc: "Spend less time on admin and more time on high-value sales activities with smart tools."
                                    },
                                    {
                                        title: "Improve Customer Retention",
                                        desc: "Never miss a follow-up and or lose customer details. Keep your clients happy and returning."
                                    },
                                    {
                                        title: "Automate Repetitive Tasks",
                                        desc: "Let the CRM handle simple tasks while your team focuses on strategic growth moves."
                                    },
                                    {
                                        title: "Get Real-Time Insights",
                                        desc: "Data-driven decisions are better decisions. See exactly what's working and what's not."
                                    }
                                ].map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...animations.fadeIn}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex space-x-6 items-start"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-blue-400">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                                            <p className="text-blue-200">{benefit.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                                alt="Productivity"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-bottom p-10">
                                <div className="mt-auto">
                                    <p className="text-2xl font-bold flex items-center space-x-2">
                                        <TrendingUp className="text-blue-400 mr-2" />
                                        Average 25% revenue growth in 6 months
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Preview */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Simple Pricing</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4">Plans for every stage of your journey</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <motion.div
                            {...animations.fadeIn}
                            className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Starter</h4>
                            <p className="text-gray-500 mb-8">Perfect for individuals and solo founders.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-gray-900">₹999</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Up to 1,000 Contacts",
                                    "Basic Pipeline View",
                                    "Email Integration",
                                    "Mobile App Access"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-600">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="block text-center py-4 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                Start Free Trial
                            </Link>
                        </motion.div>

                        {/* Professional */}
                        <motion.div
                            {...animations.fadeIn}
                            transition={{ delay: 0.1 }}
                            className="bg-blue-600 p-10 rounded-3xl border border-blue-600 shadow-2xl relative overflow-hidden text-white"
                        >
                            <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest text-white">
                                Most Popular
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Professional</h4>
                            <p className="text-blue-100 mb-8">Ideal for small growing teams.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold">₹1999</span>
                                <span className="text-blue-100">/month</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Unlimited Contacts",
                                    "Multiple Pipelines",
                                    "Advanced Automation",
                                    "WhatsApp Integration",
                                    "Activity Tracking",
                                    "Priority Support"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 size={18} className="text-blue-300" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="block text-center py-4 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all">
                                Get Started
                            </Link>
                        </motion.div>

                        {/* Enterprise */}
                        <motion.div
                            {...animations.fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h4>
                            <p className="text-gray-500 mb-8">For large organizations with complex needs.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-gray-900">Custom</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Custom Integrations",
                                    "Advanced Security",
                                    "Dedicated Account Manager",
                                    "White Labeling",
                                    "SLA Guarantee"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-600">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="block text-center py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors">
                                Contact Sales
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-3xl"
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl lg:text-6xl font-extrabold">Ready to Grow Your Business?</h2>
                            <p className="text-xl text-blue-100">
                                Join 10,000+ happy customers and start scaling your sales today. No credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link to="/signup" className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl shadow-2xl hover:bg-gray-50 transition-all active:scale-95">
                                    Start 14-Day Free Trial
                                </Link>
                                <Link to="/contact" className="px-10 py-5 bg-blue-800/50 text-white border border-blue-400/30 rounded-full font-bold text-xl hover:bg-blue-800 transition-all active:scale-95">
                                    Talk to an Expert
                                </Link>
                            </div>
                            <div className="flex justify-center items-center space-x-8 pt-8 opacity-70">
                                <div className="flex items-center space-x-2">
                                    <ShieldCheck size={20} />
                                    <span className="text-sm font-medium">Safe & Secure</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Zap size={20} />
                                    <span className="text-sm font-medium">Instant Setup</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Smartphone size={20} />
                                    <span className="text-sm font-medium">Mobile Ready</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
