import Image from 'next/image';
import RootLayout from '../../components/Layout';
import VideoPage from '../../components/VideoPage';
import Link from 'next/link';
import { useState } from 'react';
import useIsMobile from '../../components/isMobile';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('tv_shows');
  const isMobile = useIsMobile();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <RootLayout isNav={!isMobile}>
      <div className="min-h-screen sm:pt-34 md:pt-52 mx-4 mx-20 lg:py-8">
        <div className="flex sm:pt-36 md:flex-row  items-center lg:items-center">
          <Link
            href="/"
            className="text-white sm:mt-8 md:mt-8 font-semibold text-lg md:mr-4 lg:mt-0 "
          >
            HOME
          </Link>
          <div className="sm: w-12 ml-4 md:my-4 my-0 lg:w-12 h-px mr-4 opacity-40 bg-white "></div>
          <h2 className="text-cyan-300 font-semibold text-lg">WORK</h2>
          {isMobile && (
            <div className="ml-16">
              <Image
                src="/assets/images/shubham_logo.png"
                width={120}
                height={20}
                alt="shubham_logo"
              />
            </div>
          )}
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-8 md:mt-20">
          Projects by Shubham dhebe
        </h2>
        <p className="text-sm md:text-base">
          A collection of some of Shubham&apos;s best work including music
          films, creative storytelling, travel films & client work.
        </p>

        <div className="flex flex-wrap justify-center mt-8 space-x-8 ">
          {[
            'tv_shows',
            'ads',
            'music_films',
            'reels',
            'travel',
            'weddings',
            'passion_projects',
            'Documentaries',
          ].map((category, index) => (
            <h2
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`mr-4 mb-4 text-base md:text-lg font-medium tracking-widest space-y-4 ${
                selectedCategory === category
                  ? 'text-cyan-300'
                  : 'text-gray-100'
              } hover:text-cyan-800 active:text-cyan-300 cursor-pointer`}
            >
              {category.toUpperCase().replace('_', ' ')}
            </h2>
          ))}
        </div>

        <div className="mt-8">
          <VideoPage category={selectedCategory} />
        </div>
      </div>
    </RootLayout>
  );
};

export default Work;
