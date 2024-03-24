import { useState } from 'react';

const VideoDetail = ({ video }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <iframe
        id={`video-${video.id}`}
        className="w-full h-60"
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 text-white transition-opacity duration-300 ${
          showDetails ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
        <p className="text-gray-200 mb-4">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
