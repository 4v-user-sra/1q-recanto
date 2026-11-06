/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Hero } from './components/Hero';
import { MetaAds } from './components/MetaAds';
import { EnsaiosSection } from './components/EnsaiosSection';
import { Projections } from './components/Projections';
import { StrategicRoadmap } from './components/StrategicRoadmap';
import { SocialMediaPerformance } from './components/SocialMediaPerformance';
import { ThankYou } from './components/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-coral selection:text-brand-white">
      <Hero />
      <MetaAds />
      <EnsaiosSection />
      <Projections />
      <StrategicRoadmap />
      <SocialMediaPerformance />
      <ThankYou />
    </div>
  );
}
