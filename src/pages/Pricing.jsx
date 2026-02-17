import { motion } from 'framer-motion';
import { CheckCircle2, Minus, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: isAnnual ? "99" : "119",
            desc: "For solo founders and freelancers.",
            features: ["1,000 Contacts", "1 Sales Pipeline", "Email Integration", "Mobile App Access", "Basic Analytics"],
            cta: "Start Free Trial",
            popular: false
        },
        {
            name: "Professional",
            price: isAnnual ? "199" : "249",
            desc: "Ideal for fast-growing small teams.",
            features: ["Unlimited Contacts", "5 Sales Pipelines", "WhatsApp Integration", "Automation Workflows", "Team Collaboration", "Custom Reports"],
            cta: "Get Started",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For organizations with complex needs.",
            features: ["Multiple Sub-accounts", "API Access", "SSO & SAML", "Dedicated Manager", "White-labeling", "Custom Contracts"],
            cta: "Contact Sales",
            popular: false
        }
    ];

    const compareFeatures = [
        { name: "Contacts", starter: "1,000", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Sales Pipelines", starter: "1", pro: "5", enterprise: "Unlimited" },
        { name: "Automation", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
        { name: "WhatsApp Sync", starter: false, pro: true, enterprise: true },
        { name: "Email Sync", starter: true, pro: true, enterprise: true },
        { name: "Reporting", starter: "Basic", pro: "Pro", enterprise: "Advanced" },
        { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
    ];

    const faqs = [
        { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial on all plans. No credit card required to start." },
        { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard." },
        { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for registered non-profits. Contact our sales team for more info." },
        { q: "What happens after my trial ends?", a: "After 14 days, you can choose a plan to continue using Grow Mate CRM. Your data will be safe for another 30 days." }
    ];

    return (
        <div className="pt-20">
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">Simple, transparent pricing</h1>
                    <p className="text-xl text-gray-500 mb-12">Choose the plan that fits your business stage.</p>

                    <div className="flex items-center justify-center space-x-4 mb-16">
                        <span className={`text-sm font-bold ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-16 h-8 bg-blue-600 rounded-full relative p-1 transition-all"
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-all ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        <span className={`text-sm font-bold ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Annual (Save 20%)</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative bg-white p-10 rounded-3xl border ${plan.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-sm'} text-left`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 mb-8 h-12">{plan.desc}</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-extrabold text-gray-900">{plan.price !== "Custom" ? `$${plan.price}` : "Custom"}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle2 size={18} className="text-blue-600" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                                    className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                                >
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Compare all features</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-6 font-bold text-gray-900">Feature</th>
                                    <th className="py-6 font-bold text-blue-600">Starter</th>
                                    <th className="py-6 font-bold text-blue-600">Professional</th>
                                    <th className="py-6 font-bold text-blue-600">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareFeatures.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 text-gray-700">{row.name}</td>
                                        <td className="py-5 font-medium">
                                            {typeof row.starter === 'boolean' ? (row.starter ? <CheckCircle2 className="text-green-500" /> : <Minus className="text-gray-300" />) : row.starter}
                                        </td>
                                        <td className="py-5 font-medium">
                                            {typeof row.pro === 'boolean' ? (row.pro ? <CheckCircle2 className="text-green-500" /> : <Minus className="text-gray-300" />) : row.pro}
                                        </td>
                                        <td className="py-5 font-medium">
                                            {typeof row.enterprise === 'boolean' ? (row.enterprise ? <CheckCircle2 className="text-green-500" /> : <Minus className="text-gray-300" />) : row.enterprise}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                    <Info size={18} className="mr-2 text-blue-600" />
                                    {faq.q}
                                </h4>
                                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
                <p className="text-xl text-blue-100 mb-10">Our team is here to help you find the perfect plan for your business.</p>
                <Link to="/contact" className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all">
                    Talk to an Expert
                </Link>
            </section>
        </div>
    );
};

export default Pricing;
