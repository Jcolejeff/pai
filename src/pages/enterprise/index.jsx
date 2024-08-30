import React from 'react'
import Navigation from "../../components/navigation"
import HeroSection from './HeroSection';
import HowPaiWorks from './HowPaiWorks';
import Features from './Features';
import ContactSales from './ContactSales';
import Faq from './Faq';
import Footer from '../../components/footer';

export default function Enterprise  () {
  return <>
  <Navigation />
  <HeroSection/>
  <HowPaiWorks/>
  <Features/>
  <ContactSales/>
  <Faq/>
  <Footer/>
  </>;
}


