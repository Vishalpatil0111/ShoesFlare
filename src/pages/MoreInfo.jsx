import { motion } from "framer-motion";
import { useState } from "react";

const MoreInfo = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFAQ = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    return (
        <div className="sm:pt-[60px]">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-16 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold"
                >
                    Welcome to Sneakerflare
                </motion.h1>
                <p className="mt-2 text-gray-300">Your go-to destination for premium sneakers and footwear.</p>
            </div>

            {/* Info Sections */}
            <div className="max-w-5xl mx-auto mt-10 space-y-6 px-6">
                {[
                    { title: "About Us", text: "Sneakerflare is dedicated to providing top-quality sneakers with style and comfort. Our goal is to bring the latest trends to sneaker lovers worldwide." },
                    { title: "Shipping Policy", text: "We offer worldwide shipping with fast delivery options. Expect your orders to arrive within 5-10 business days." },
                    { title: "Customer Support", text: "Our support team is available 24/7. If you need assistance, feel free to reach out via email or live chat." }
                ].map((section, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                    >
                        <h2 className="text-2xl font-semibold">{section.title}</h2>
                        <p className="mt-2 text-gray-600">{section.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mt-12 px-6">
                <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                    {[
                        { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and UPI payments." },
                        { question: "Can I return my order?", answer: "Yes, we have a 14-day return policy. Please visit our returns page for details." },
                        { question: "Do you offer free shipping?", answer: "Yes, we provide free shipping on orders over $100." }
                    ].map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-4">
                            <button 
                                className="w-full text-left flex justify-between items-center text-lg font-medium"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{faqOpen === index ? "−" : "+"}</span>
                            </button>
                            {faqOpen === index && (
                                <motion.p 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 text-gray-600"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-12 bg-gray-900 text-white py-6 text-center">
                <p>&copy; {new Date().getFullYear()} Sneakerflare. All rights reserved.</p>
            </div>
        </div>
    );
};

export default MoreInfo;
