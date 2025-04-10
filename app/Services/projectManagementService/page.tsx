import React from 'react';
import ProjectHero from './hero';
import Features from './feature';
import HighLight from './highlight';

export default function ProgectManagementServicePage() {
  return (
    <main className="w-full min-h-screen">
      <ProjectHero />
      <Features/>
      <HighLight/>
       

        
    </main>
  );
}
