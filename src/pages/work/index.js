import RootLayout from '../../components/Layout';
import VideoPage from '../../components/VideoPage';
import Link from 'next/link';
import { useState } from 'react';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('tv');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <RootLayout className="bg-gray-100 ">
      <div className="py-36 mx-20">
        <div className="flex">
          <Link href="/" className="text-white font-semibold text-lg">
            HOME
          </Link>
          <div className="w-12 mx-4 mt-4 h-px opacity-40 bg-white"></div>
          <h2 className="text-cyan-300 font-semibold text-lg">WORK</h2>
        </div>

        <h2 className="text-4xl font-bold mb-4 mt-20">
          Projects by Shubham dhebe
        </h2>
        <p>
          A collection of some of Shubham&apos;s best work including drone reel
          compilations, creative storytelling, travel vlogs & client work.
        </p>

        <div className="flex justify-center mt-12">
          <h2
            onClick={() => handleCategoryClick('tv')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'tv' ? 'text-cyan-300' : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            TV SHOWS
          </h2>
          <h2
            onClick={() => handleCategoryClick('films')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'films' ? 'text-cyan-300' : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            FILMS
          </h2>
          <h2
            onClick={() => handleCategoryClick('reels')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'reels' ? 'text-cyan-300' : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            REELS
          </h2>
          <h2
            onClick={() => handleCategoryClick('advertisements')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'advertisements'
                ? 'text-cyan-300'
                : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            ADVERTISEMENTS
          </h2>
          <h2
            onClick={() => handleCategoryClick('promos')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'promos' ? 'text-cyan-300' : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            PROMOS
          </h2>
          <h2
            onClick={() => handleCategoryClick('travel')}
            className={`mr-8 text-lg font-medium ${
              selectedCategory === 'travel' ? 'text-cyan-300' : 'text-gray-100'
            } hover:text-cyan-800 active:text-cyan-300 tracking-widest`}
          >
            TRAVEL
          </h2>
        </div>

        <div className="mt-12">
          <VideoPage category={selectedCategory} />
        </div>
      </div>
    </RootLayout>
  );
};

export default Work;
