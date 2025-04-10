"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  { question: "What is Code Collab?", answer: "Code Collab is a platform for developers to collaborate on projects in real-time." },
  { question: "How do I get started?", answer: "Click on the 'Get Started' button to create an account and start exploring." },
  { question: "Is Code Collab free to use?", answer: "Yes, Code Collab offers a free plan with premium features available for upgrade." },
  { question: "How can I contact support?", answer: "You can reach out to support via the Contact Us page or email us at support@codecollab.com." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold py-3 focus:outline-none"
            >
              {faq.question}
              <motion.span
                className="text-blue-500 text-xl"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? "×" : "+"}
              </motion.span>
            </button>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 mt-2"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
