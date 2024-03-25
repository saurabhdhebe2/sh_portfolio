import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaVimeo,
  FaEnvelope,
} from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative p-0 m-0">
      {/* Image with Next.js Image Component */}

      <video
        // className=""
        className="sm:w-auto h-[100%] md:w-auto h-[100%] lg:w-[1920px] h-[980px] absolute inset-0  object-cover"
        // width="1920"
        // height="1080"
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content overlay */}
      <div className="absolute sm:pt-20 py-[500px] md:pt-20 py-[500px]  lg:top-0 left-0 w-full h-full lg:py-[485px] flex flex-col justify-center items-center text-white p-4 md:p-8 bg-black bg-opacity-90 0">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-6">
          Shubham Dhebe
        </h1>
        <p className="text-sm md:text-lg text-center mb-4 md:mb-8">
          A world-renowned filmmaker that inspired a generation of content
          creators from all around the world.
        </p>
        <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:mt-8">
          <button className="bg-primary-transparent text-white px-4 py-2 md:py-4 border-secondary border-2 rounded-md">
            <Link href="/contact">Get in touch</Link>
          </button>
          <button className="bg-primary-transparent text-white px-4 py-2 md:py-4 border-button border-2 rounded-md">
            <Link href="/work">PORTFOLIO</Link>
          </button>
        </div>

        <div className="flex space-x-4 mt-8">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/shubham.dhebe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-300 border-secondary text-3xl md:text-4xl hover:text-gray-400" />
          </Link>
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/shubhamdhebe?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-300 text-3xl md:text-4xl hover:text-gray-400" />
          </Link>
          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@ShubhamDhebe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-gray-300 text-3xl md:text-4xl hover:text-gray-400" />
          </Link>
          {/* Vimeo */}
          <Link
            href="https://vimeo.com/shubhamdhebe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVimeo className="text-gray-300 text-3xl md:text-4xl hover:text-gray-400" />
          </Link>
          {/* Gmail */}
          <Link
            href="sd123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-gray-300 text-3xl md:text-4xl hover:text-gray-400" />
          </Link>
        </div>
        {/* Additional icons and links can be added here */}
      </div>
    </div>
  );
};

export default HeroSection;
