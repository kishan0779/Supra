"use client"
import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import Section from './Components/Section/Section'
import BgOverview from '@/public/bg-overview.jpeg'
import BgInterior from '@/public/bg-interior.jpeg'
import BgCharging from '@/public/bg-charging.jpeg'
import BgConnectivity from '@/public/bg-connectivity.jpeg'
import BgSafety from '@/public/bg-safety.jpeg'
import Lenis from "@studio-freight/lenis";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  }, []);
  return (
    <div>
      <HeroSection />
      <Section
        image={BgOverview}
        tag='Overview'
        title='Elevate adventure in the luxury electric SUV of tomorrow'
        description='More space. Elevate adventure in the luxury electric SUV of tomorrowElevate adventure in the luxury electric SUV of tomorrow '
      />
      <Section
        image={BgInterior}
        tag='Interior'
        title='Interior space. superrior taste.'
        description='More space. Elevate adventure in the luxury electric SUV of tomorrowElevate adventure in the luxury electric SUV of tomorrow '
      />
      <Section
        image={BgCharging}
        tag='Charging'
        title='Lond-distance in lightning speed.'
        description='More space. Elevate adventure in the luxury electric SUV of tomorrowElevate adventure in the luxury electric SUV of tomorrow '
      />
      <Section
        image={BgConnectivity}
        tag='Connectivity'
        title='Feel the world at your fingertips'
        description='More space. Elevate adventure in the luxury electric SUV of tomorrowElevate adventure in the luxury electric SUV of tomorrow '
      />
      <Section
        image={BgSafety}
        tag='Safety'
        title='Designed for peace of mind'
        description='More space. Elevate adventure in the luxury electric SUV of tomorrowElevate adventure in the luxury electric SUV of tomorrow '
      />
    </div>
  )
}

export default page