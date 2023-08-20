import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero  from '@/components/Hero'
import Copyright from '@/components/Copyright'
import Cars from '@/components/Cars'
import CarSlider from '@/components/CarSlider'
import HoursSelection from '@/components/HoursSelection'
import Search from '@/components/Search'
import SearchMobile from '@/components/SearchMobile'
import LocationSelection from '@/components/LocationSelection'
import Cta  from '@/components/Cta'
import Brands from '@/components/Brands'
import BackToTopBtn from '@/components/BackToTopBtn'
import About  from '@/components/About'
import Why from '@/components/Why'
import Testimonials from '@/components/Testimonials'
import TestimonialSlider from '@/components/TestimonialSlider'
import DateSelection from '@/components/DateSelection'


export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white
     mx-auto relative overflow-hidden 
    '>
      <Header />
      {/* <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Cta />
      <Footer />
      <BackToTopBtn /> */}
    </main>
  )
}
