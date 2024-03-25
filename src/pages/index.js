// pages/index.js
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/Partnersection';

const Home = () => {
  return (
    // <RootLayout>
    <div className=" w-full bg-primary p-0 text-white ">
      <HeroSection />
      <PartnersSection />
      {/* <WorkSection /> */}
      {/* <AboutMeSection /> */}
      {/* <GetInTouchForm /> */}
    </div>
    // </RootLayout>
  );
};

export default Home;
