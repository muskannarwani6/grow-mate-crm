import { motion } from 'framer-motion';
import {
    Users,
    Target,
    Zap,
    MessageSquare,
    BarChart2,
    Users2,
    CheckCircle2,
    LayoutDashboard,
    Bell,
    Search,
    Cloud,
    Lock
} from 'lucide-react';

const Features = () => {
    const allFeatures = [
        {
            title: "Lead Management",
            desc: "Automatically capture leads from your website, social media, and email. Qualify and distribute them to your sales team instantly.",
            icon: <Users className="w-6 h-6" />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Pipeline Management",
            desc: "Visualize your sales process with drag-and-drop pipeline stages. See exactly where every deal stands in real-time.",
            icon: <Target className="w-6 h-6" />,
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            title: "Automated Workflows",
            desc: "Set up trigger-based actions. Send follow-up emails, update fields, or assign tasks automatically based on deal progress.",
            icon: <Zap className="w-6 h-6" />,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Omnichannel Communication",
            desc: "Talk to customers via Email, WhatsApp, and SMS directly from the deal view. Keep a full history of every interaction.",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Advanced Reporting",
            desc: "Track team performance, conversion rates, and revenue forecasts with custom dashboards and scheduled reports.",
            icon: <BarChart2 className="w-6 h-6" />,
            color: "bg-rose-100 text-rose-600"
        },
        {
            title: "Team Collaboration",
            desc: "Mention teammates in notes, assign tasks, and share calendars to ensure everyone is aligned on the sales strategy.",
            icon: <Users2 className="w-6 h-6" />,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Smart Notifications",
            desc: "Get alerted about new leads, upcoming meetings, or deals that haven't been touched in a while.",
            icon: <Bell className="w-6 h-6" />,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Advanced Search",
            desc: "Find any lead, deal, or contact in seconds with our powerful global search and custom filtering options.",
            icon: <Search className="w-6 h-6" />,
            color: "bg-cyan-100 text-cyan-600"
        },
        {
            title: "Cloud Sync",
            desc: "Access your data from anywhere. Your CRM stays synced across desktop, mobile, and tablet automatically.",
            icon: <Cloud className="w-6 h-6" />,
            color: "bg-sky-100 text-sky-600"
        },
        {
            title: "Enterprise Security",
            desc: "Rest easy with bank-level encryption, role-based access control, and 99.9% uptime guarantee.",
            icon: <Lock className="w-6 h-6" />,
            color: "bg-slate-100 text-slate-600"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-blue-600 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-extrabold mb-6"
                    >
                        Powerful Features build for <br /> modern sales teams
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto"
                    >
                        Grow Mate CRM gives you all the tools you need to find more leads, close more deals, and keep your customers happy.
                    </motion.p>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-blue-100 outline-none transition-all duration-300 group bg-white"
                            >
                                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Why choose Grow Mate?</h2>
                        <p className="text-gray-500">How we stack up against the competition</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="py-6 px-8 text-left text-lg font-bold">Feature</th>
                                    <th className="py-6 px-8 text-center text-lg font-bold">Grow Mate</th>
                                    <th className="py-6 px-8 text-center text-lg font-bold">Others</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    ["Setup Time", "Instant (minutes)", "Days/Weeks"],
                                    ["Ease of Use", "High (No training needed)", "Low (Manuals required)"],
                                    ["Price", "Affordable / Modular", "Expensive / Hidden costs"],
                                    ["Automation", "Full built-in", "Extra add-ons only"],
                                    ["Mobile App", "Native & Included", "Optional / Web wrapper"],
                                    ["Customer Support", "24/7 Priority", "Ticket-based delay"]
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="py-6 px-8 font-bold text-gray-900">{row[0]}</td>
                                        <td className="py-6 px-8 text-center text-blue-600 font-bold">{row[1]}</td>
                                        <td className="py-6 px-8 text-center text-gray-400">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-extrabold text-gray-900">Works with the apps <br /> you already love</h2>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Grow Mate CRM integrates seamlessly with 500+ apps to automate your entire business workflow.
                            </p>
                            <div className="pt-4 grid grid-cols-2 gap-4">
                                {["Gmail & Outlook", "WhatsApp & Slack", "Zapier & Webhooks", "Razorpay & Stripe"].map((int, i) => (
                                    <div key={i} className="flex items-center space-x-2 text-gray-700 font-medium">
                                        <CheckCircle2 size={20} className="text-green-500" />
                                        <span>{int}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-3 gap-6 animate-pulse">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                    <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
