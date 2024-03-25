// components/HeroSection.js
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
        className="opacity-100"
        width="1920"
        height="1080"
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-8 bg-black bg-opacity-90">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-6">
          Shubham Dhebe
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          A world-renowned filmmaker that inspired a generation of content
          creators from all around the world.
        </p>
        <div className="flex space-x-4 mt-20">
          <button className="bg-primary-transparent  text-white px-4 py-4 border-secondary border-2 rounded-md">
            <Link href="/contact">Get in touch</Link>
          </button>
          <button className="bg-primary-transparent  text-white px-4 py-4 border-button border-2 rounded-md">
            <Link href="/work"> PORTFOLIO</Link>
          </button>
        </div>

        <div className="flex space-x-4 mt-36">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-300 border-secondary text-4xl hover:text-gray-400" />
          </Link>
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-300 text-4xl  hover:text-gray-400" />
          </Link>
          {/* YouTube */}
          <Link
            href="https://www.youtube.com/your-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-gray-300 text-4xl  hover:text-gray-400" />
          </Link>
          {/* Vimeo */}
          <Link
            href="https://vimeo.com/your-vimeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVimeo className="text-gray-300 text-4xl  hover:text-gray-400" />
          </Link>
          {/* Gmail */}
          <Link
            href="mailto:your.email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-gray-300 text-4xl  hover:text-gray-400" />
          </Link>
        </div>
        <div className="flex space-x-4 mt-6">
          {/* Add more icons and links as needed */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
