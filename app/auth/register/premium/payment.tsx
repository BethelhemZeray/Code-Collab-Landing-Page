import React, { useState } from "react";

const paymentOptions = ["PayPal", "Telebirr", "Chapa"];

const PaymentForm = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    billing: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const renderCardForm = () => (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      {/* Card Number */}
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          pattern="\d{4} \d{4} \d{4} \d{4}"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>

      {/* Expiry & CVC Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            pattern="\d{2}/\d{2}"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="flex-1">
          <label htmlFor="cvc" className="block text-sm font-medium text-gray-300 mb-1">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            value={formData.cvc}
            onChange={handleInputChange}
            pattern="\d{3}"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
            placeholder="123"
            required
          />
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <label htmlFor="billing" className="block text-sm font-medium text-gray-300 mb-1">
          Billing Address
        </label>
        <input
          type="text"
          id="billing"
          value={formData.billing}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
          placeholder="123 Premium Street, NY"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
      >
        Pay with {selectedMethod}
      </button>
    </form>
  );

  return (
    <div className="w-full min-h-screen max-w-3xl mx-auto py-8 px-4">
      <div className="bg-yellow-700 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Select Payment Method</h2>

        {/* Payment Method Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {paymentOptions.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setSelectedMethod(method)}
              className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                selectedMethod === method
                  ? "bg-yellow-500 text-black border-yellow-600 scale-105"
                  : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
              }`}
            >
              {method}
            </button>
          ))}
        </div>

        {/* Render Dynamic Form */}
        {selectedMethod === "PayPal" && (
          <div className="bg-gray-800 p-6 rounded-lg text-white border border-gray-700 text-center">
            <p className="mb-4 text-lg">You will be redirected to PayPal to complete the payment.</p>
            <button 
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Continue to PayPal
            </button>
          </div>
        )}

        {(selectedMethod === "Telebirr" || selectedMethod === "Chapa") && renderCardForm()}
      </div>
   
    </div>
  );
};

export default PaymentForm;