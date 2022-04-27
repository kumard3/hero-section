/* eslint-disable @next/next/link-passhref */
import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'
import HeroSection3 from '../components/HeroSection3'
import HeroSection4 from '../components/HeroSection4'
import HeroSection5 from '../components/HeroSection5'
import HeroSection6 from '../components/HeroSection6'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden  text-center dark:bg-black dark:text-gray-200">
      <HeroSection6 />
      <HeroSection5 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection />
    </div>
  )
}
