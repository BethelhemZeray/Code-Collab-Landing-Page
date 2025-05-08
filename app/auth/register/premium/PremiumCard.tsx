"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServices } from "@/redux/slices/serviceSlice";

const PremiumCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        await dispatch(fetchServices());
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if(services.length === 0 ){
      loadServices();
    } 
  }, [dispatch]);

  const handleCheckboxChange = (id: number) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const premiumServices = services.filter((service) => service.type === "premium");

  if (isLoading) {
    return <div className="text-center py-10 text-gray-400">Loading services...</div>;
  }

  if (premiumServices.length === 0) {
    return <div className="text-center py-10 text-gray-400">No premium services found.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Services Selection - now with height determined by content */}
      <div className="p-6 rounded-xl shadow-md bg-yellow-400 lg:flex-1">  
        <h2 className="text-2xl font-bold text-yellow-700 mb-6 text-center">Choose Premium Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {premiumServices.map((service) => (
            <div
              key={service.id}
              className={`bg-gray-800 border w-full border-gray-700 rounded-lg p-4 flex flex-col justify-between transition-all ${
                selectedServices.includes(service.id) ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleCheckboxChange(service.id)}
                />
                <h3 className="text-xl font-semibold text-yellow-700">{service.name}</h3>
              </div>

              <p className="text-yellow-400 text-lg font-bold mt-2">
                {service.price ? `$${service.price}` : "Custom Pricing"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Summary Box - now matching height of services container */}
      <div className="w-full lg:w-80 bg-gray-800 p-6 rounded-xl border border-gray-700 h-full">
        <div className="h-full flex flex-col">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Order Summary</h3>
          
          {/* Selected Services List */}
          <div className="flex-grow overflow-y-auto mb-4">
            {selectedServices.length > 0 ? (
              selectedServices.map(serviceId => {
                const service = services.find(s => s.id === serviceId);
                return (
                  <div key={serviceId} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">{service?.name}</span>
                    <span className="text-white">${service?.price || 0}</span>
                  </div>
                );
              })
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 text-center py-4">No services selected</p>
              </div>
            )}
          </div>

          
          <div className="w-full lg:h-80 bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-300">Total:</span>
              <span className="text-2xl font-bold text-yellow-400">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          {selectedServices.length > 0 && (
            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition">
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;