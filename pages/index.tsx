/* eslint-disable @next/next/link-passhref */
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";

export default function Home() {
  return (
    <div className="min-h-screen   text-center dark:bg-black dark:text-gray-200">
      <HeroSection2 />
      <HeroSection />
    </div>
  );
}
