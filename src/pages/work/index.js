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
    <RootLayout className="bg-gray-100 h-screen">
      <div className="py-8 md:py-36 mx-4 md:mx-20">
        <div className="flex md:flex-row  items-start lg:items-center sm:mt-24">
          <Link href="/" className="text-white font-semibold text-lg md:mr-4">
            HOME
          </Link>
          <div className="sm:mt-4 w-12 mt-3 ml-4  md:my-4  my-0 lg:w-12 h-px mr-4 opacity-40 bg-white "></div>
          <h2 className="text-cyan-300 font-semibold text-lg">WORK</h2>
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
            'tv shows',
            'music films',
            'reels',
            'ads',
            'weddings',
            'travel',
            'personal projects',
            'after movies',
          ].map((category, index) => (
            <h2
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`mr-4 mb-4 text-base md:text-lg font-medium tracking-widest space-y-4 ${
                selectedCategory === category
                  ? 'text-cyan-300'
                  : 'text-gray-100'
              } hover:text-cyan-800 active:text-cyan-300`}
            >
              {category.toUpperCase()}
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
