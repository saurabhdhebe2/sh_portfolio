// pages/index.js
import AboutMeSection from '@/components/Aboutme';
import GetInTouchForm from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import RootLayout from '@/components/Layout';
import PartnersSection from '@/components/Partnersection';
import WorkSection from '@/components/Worksection';

const Home = () => {
  return (
    <RootLayout>
      <div className="container mx-auto bg-primary py-8 text-white ">
        <HeroSection />
        <PartnersSection />
        {/* <WorkSection /> */}
        {/* <AboutMeSection /> */}
        {/* <GetInTouchForm /> */}
      </div>
    </RootLayout>
  );
};

export default Home;
