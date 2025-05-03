"use client";
import React, { useState } from "react";

const SecurityFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is end-to-end encryption?",
      answer:
        "End-to-end encryption ensures that data is encrypted on the sender’s side and decrypted on the receiver’s side, preventing unauthorized access.",
    },
    {
      question: "What is Two-Factor Authentication?",
      answer:
        "Two-Factor Authentication (2FA) adds an additional layer of security by requiring not only a password but also a second factor, such as a code sent to your phone.",
    },
    {
      question: "How do you handle user data?",
      answer:
        "We follow industry standards for data protection, ensuring your personal data is encrypted and securely stored.",
    },
    {
      question: "Is my password safe?",
      answer:
        "Yes, we use strong encryption and hashing algorithms to securely store passwords. We also recommend using unique passwords for each account.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  return (
    <section className="w-full py-20 px-6 sm:px- text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Security FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left py-4 px-6 bg-transparent text-xl font-semibold flex justify-between items-center  transition-all duration-300"
              >
                <span>{faq.question}</span>
                <span className="text-blue-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="text-gray-300 text-sm px-6 mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFAQ;
