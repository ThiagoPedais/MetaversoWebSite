import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Explore from '@/sections/Explore'
import FeedBack from '@/sections/FeedBack'
import GetStarted from '@/sections/GetStarted'
import Hero from '@/sections/Hero'
import Insights from '@/sections/Insights'
import WhatsNew from '@/sections/WhatsNew'
import World from '@/sections/World'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <FeedBack />
      <Footer />
    </div>
  )
}
