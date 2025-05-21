"use client";
import React, { useEffect, useState } from "react";
import Free from "../../components/freeplan";
import Premium from "../../components/premium";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServices } from "@/redux/slices/serviceSlice";

const GetStartedCard: React.FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const servicesList = useSelector(
    (state: RootState) => state.service.services
  ); // Access services from Redux store
  const [, setIsFetching] = useState(true);
  const router = useRouter();

  //filter free services from servicesList
  const freeServices = servicesList.filter(
    (service) => service.type === "free"
  );
  //filter premium services from servicesList
  const premiumServices = servicesList.filter(
    (service) => service.type === "premium"
  );

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsFetching(true);
        await dispatch(fetchServices());
      } finally {
        setIsFetching(false);
      }
    };
    loadServices();
  }, [dispatch]);

  const getStartedAsFree = () => {
    router.push("/getstarted/free");
  };

  const getStartedAsPremium = () => {
    router.push("/getstarted/premium");
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-white px-4 md:px-12 py-32">
      {/* ✅ Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        Get Started
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mt-2 text-center">
        Choose the best plan and start your journey today!
      </p>

      {/* ✅ Plan Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 w-full max-w-4xl">
        <Free onStart={getStartedAsFree} servicesList={freeServices}/>
        <Premium onStart={getStartedAsPremium} servicesList={premiumServices}/>
      </div>
    </section>
  );
};

export default GetStartedCard;
// Removed placeholder function as useSelector is now properly imported.
