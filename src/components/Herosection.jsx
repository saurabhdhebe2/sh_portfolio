import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import useIsMobile from '../components/isMobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative p-0 m-0 min-h-screen">
      {/* Image with Next.js Image Component */}
      {isMobile ? (
        <Image
          src="/assets/images/home_background.jpg"
          className="block md:hidden md:w-[100%]  h-screen absolute inset-0 object-cover"
          alt="hero_image"
          width={500}
          height={1200}
        />
      ) : (
        <video
          className="hidden md:w-[100%] md:block h-screen absolute inset-0 object-cover "
          autoPlay
          muted
          loop
        >
          <source
            className="hidden  md:block "
            src="/assets/videos/hero-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      {/* Content overlay */}
      <div className="bg-black bg-opacity-60 w-auto  absolute inset-0 object-cover  flex flex-col justify-center items-center text-white p-4 mt-[-100px] md:p-8 md:mt-0 md:bg-black md:bg-opacity-90">
        <p className="font-bebas-neue text-md text-center font-extralight tracking-widest">
          FILMMAKER | PHOTOGRAPHER
        </p>
        <h4 className="font-bebas-neue text-5xl lg:text-5xl  text-center font-thin text-custom-gray ">
          Shubham Dhebe
        </h4>
        <p className="font-bebas-neue sm:text-sm md:text-xl text-center font-extralight tracking-widest mb-4 md:mb-6">
          @shubham.dhebe
        </p>
        <div className="flex flex-row space-x-4 mt-4 md:space-x-4 md:flex-row md:space-y-0 md:my-8">
          <button className="bg-primary-transparent text-white px-4 py-2 md:py-4 border-button border-2 rounded-md hover:text-gray-300">
            <Link
              className="font-bebas-neue text-2xl font-thin tracking-wide"
              href="/contact"
            >
              Get in touch
            </Link>
          </button>
          <button className="bg-primary-transparent text-white px-4 py-2 md:py-4 border-secondary border-2 rounded-md hover:text-gray-300">
            <Link
              className="font-bebas-neue text-2xl font-thin tracking-wide"
              href="/work"
            >
              PORTFOLIO
            </Link>
          </button>
        </div>
      </div>
      {/* Social buttons */}
      <div className="absolute bottom-32 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 ">
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/shubham.dhebe"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          <FaInstagram className="text-white font-bebas-neue font-extrabold border-button border rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 " />
        </Link>
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/shubhamdhebe?"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <FaLinkedin className="text-white font-bebas-neue font-extrabold border-button border rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 " />
        </Link>
        {/* YouTube */}
        <Link
          href="https://www.youtube.com/@ShubhamDhebe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <FaYoutube className="text-white font-bebas-neue font-extrabold border-button border rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 " />
        </Link>
        {/* Gmail */}
        <Link
          href="mailto:sd123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <FaEnvelope className="text-white font-bebas-neue font-extrabold border-button border rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 " />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
