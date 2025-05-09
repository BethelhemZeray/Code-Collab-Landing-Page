"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServices } from "@/redux/slices/serviceSlice";

const PremiumCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
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

    if(services.length === 0) {
      loadServices();
    } else {
      // Initialize selectedServices state using _id (string)
      const initialSelection = services.reduce((acc, service) => {
        if (service._id) {
          acc[service._id] = false;
        }
        return acc;
      }, {} as Record<string, boolean>);
      setSelectedServices(initialSelection);
    }
  }, [dispatch, services.length]);

  const handleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedServices).reduce((total, [id, isSelected]) => {
      if (isSelected) {
        const service = services.find(s => s._id === id);
        return total + (service?.price || 0);
      }
      return total;
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
    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      {/* Services Selection */}
      <div className="p-6 rounded-xl shadow-md bg-yellow-700 lg:flex-1 w-full lg:w-[60%] ">  
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Choose Premium Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {premiumServices.map((service) => (
            <div
              key={service._id}
              className={`bg-gray-800 border w-full border-gray-700 rounded-lg p-4 flex flex-col justify-between transition-all ${
                service._id && selectedServices[service._id] ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`service-${service._id}`}
                  className="form-checkbox h-5 w-5 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                  checked={selectedServices[service._id ?? ""] || false}
                  onChange={() => handleServiceSelection(service._id ?? "")}
                />
                <label 
                  htmlFor={`service-${service._id}`} 
                  className="text-xl font-semibold text-yellow-700 cursor-pointer"
                >
                  {service.name}
                </label>
              </div>

              <p className="text-yellow-400 text-lg font-bold mt-2">
                {service.price ? `$${service.price.toFixed(2)}` : "Custom Pricing"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-[35%] flex flex-col"> 
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex-grow">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Order Summary</h3>
          
          <div className="h-[calc(100%-120px)] overflow-y-auto mb-4">
            {Object.values(selectedServices).some(isSelected => isSelected) ? (
              premiumServices
                .filter(service => service._id && selectedServices[service._id])
                .map(service => (
                  <div key={service._id} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">{service.name}</span>
                    <span className="text-white">${service.price?.toFixed(2) || "0.00"}</span>
                  </div>
                ))
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400">No services selected</p>
              </div>
            )}
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-300">Total:</span>
              <span className="text-2xl font-bold text-yellow-400">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {Object.values(selectedServices).some(isSelected => isSelected) && (
          <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition">
            Proceed to Payment (${calculateTotal().toFixed(2)})
          </button>
        )}
      </div>
    </div>
  );
};

export default PremiumCard;
