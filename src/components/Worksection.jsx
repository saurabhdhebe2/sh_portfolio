// components/WorkSection.js
import { useState } from 'react';
import ImageOverlay from './Imageoverlay';

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const workSections = [
    {
      title: 'Photography',
      description: 'Discover stunning photography works',
      imageUrl: '/assets/images/photography.jpg',
    },
    {
      title: 'Films',
      description: 'Explore captivating films',
      imageUrl: '/assets/images/films.jpg',
    },
    // Add more work sections as needed
  ];

  return (
    <div id="work" className="">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Work</h2>
        <div className="h-10 bg-gray-400 w-px my-4 "></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-20">
        {workSections.map((work, index) => (
          <div
            key={index}
            className="relative w-[600px] mb-8"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ImageOverlay
              imageUrl={work.imageUrl}
              hovered={hoveredIndex === index}
            >
              <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
              <p className="text-lg text-center">{work.description}</p>
            </ImageOverlay>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
