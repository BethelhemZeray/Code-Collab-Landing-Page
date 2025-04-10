import React from "react";
import HeroSec from "./heroSec";
import FeaturesSection from "./feature";
import SecuritySection from "./whySecurity";
import SecurityFAQ from "./Faq";

export default function AuthenticationServicePage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSec/>
      <FeaturesSection/>
      <SecuritySection/>
      <SecurityFAQ/>

    </main>
  );
}