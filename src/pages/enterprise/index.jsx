import React from 'react'
import Navigation from "../../components/navigation"
import HeroSection from './HeroSection';
import HowPaiWorks from './HowPaiWorks';
import Features from './Features';

export default function Enterprise  () {
  return <>
  <Navigation />
  <HeroSection/>
  <HowPaiWorks/>
  <Features/>
  </>;
}


