import React from 'react';
import CLIHero from './heroSec';
import CLI from './CLI'
import CLIHighlights from './highlight';
import HowToUseCLI from './use';
import EditorCLIIntro from './CLIDes';

export default function CLIServicePage() {
  return (
    <main className="w-full min-h-screen">
        <CLIHero/>
        <EditorCLIIntro/>
        <CLI/>
        <CLIHighlights/>
        <HowToUseCLI/>

        
    </main>
  );
}