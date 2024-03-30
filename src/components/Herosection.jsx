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
        // <Image
        //   src="/assets/images/home_background.jpg"
        //   className="block md:hidden md:w-[100%]  h-screen absolute inset-0 object-cover"
        //   alt="hero_image"
        //   width={500}
        //   height={1200}
        // />
        <video
          className="block md:hidden md:w-[100%]  h-screen absolute inset-0 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            className="hidden  md:block "
            src="/assets/videos/mobile_background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
      <div className="bg-black bg-opacity-60 w-auto  absolute inset-0 object-cover  flex flex-col justify-center items-center text-white p-4 mt-[-100px] md:p-8 md:mt-0 md:bg-black md:bg-opacity-60">
        <p className="font-bebas-neue text-md text-center font-extralight tracking-widest">
          FILMMAKER | STORYTELLER
        </p>
        <h4 className="font-bebas-neue text-5xl lg:text-5xl  text-center font-thin text-custom-gray ">
          Shubham Dhebe
        </h4>
        <p className="font-bebas-neue sm:text-sm md:text-lg text-center font-extralight tracking-widest mb-4 md:mb-6">
          48fps go faster!
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
      <div className="absolute bottom-32 md:bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-4 ">
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/shubham.dhebe"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="text-white font-bebas-neue font-extrabold border-secondary border-2 rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 "
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </Link>
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/shubhamdhebe?"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="text-white font-bebas-neue font-extrabold border-secondary border-2 rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 "
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
        </Link>
        {/* YouTube */}
        <Link
          href="https://www.youtube.com/@ShubhamDhebe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            className="text-white font-bebas-neue font-extrabold border-secondary border-2 rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 "
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
          </svg>
        </Link>
        {/* Gmail */}
        <Link
          href="mailto:work@shubhamdhebe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-customized-gray hover:text-black hover:bg-opacity-20 transition duration-300"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white font-bebas-neue font-extrabold border-secondary border-2 rounded-lg p-2 text-4xl md:text-4xl hover:text-black  hover:bg-white transition duration-300 "
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
