// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Image with Next.js Image Component */}
      <Image
        src="/assets/images/hero-image.jpeg" // Path to your image file
        alt="Hero Image"
        width={1920} // Adjust width and height as per your image dimensions
        height={1080}
      />
      {/* Content overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-6">
          Shubham Dhebe
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          A world-renowned filmmaker that inspired a generation of content
          creators from all around the world.
        </p>
        <div className="flex space-x-4 ">
          <button className="bg-secondary  text-white px-4 py-4 rounded-md">
            <Link href="/contact">Get in touch</Link>
          </button>
          <button className="bg-button text-white px-4 py-4 rounded-md">
            <Link href="#partner"> Know More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
