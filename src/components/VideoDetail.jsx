const VideoDetail = ({ videoUrl, videoDetails, reverse }) => {
  return (
    <div className="w-full flex items-start mb-20">
      {/* Video or Details Section */}
      <div className={`w-1/2 ${reverse ? 'ml-4' : 'mr-4'}`}>
        {reverse ? (
          <>
            <h2 className="text-lg font-semibold mb-2">{videoDetails.title}</h2>
            <p className="text-gray-600 mb-4">{videoDetails.description}</p>
            {/* Add more details as needed */}
          </>
        ) : (
          <iframe
            className="w-full h-80"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      </div>

      {/* Video or Details Section */}
      <div className={`w-1/2 ${reverse ? 'mr-4' : 'ml-4'}`}>
        {reverse ? (
          <iframe
            className="w-full h-80"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-2">{videoDetails.title}</h2>
            <p className="text-gray-600 mb-4">{videoDetails.description}</p>
            {/* Add more details as needed */}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
