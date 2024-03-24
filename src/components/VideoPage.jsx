import VideoDetail from './VideoDetail';

const VideoPage = () => {
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
      details: {
        title: 'jassie gill / iifa awards 2019 / BTS',
        description: 'Description of Video 1',
      },
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
      details: {
        title: 'Malshej Ghat',
        description: 'Description of Video 2',
      },
    },
    // Add more videos as needed
  ];

  return (
    <div className="container mx-auto py-8">
      {videos.map((video, index) => (
        <VideoDetail
          key={video.id}
          videoUrl={video.url}
          videoDetails={video.details}
          reverse={index % 2 === 0} // Alternate between video and details
        />
      ))}
    </div>
  );
};

export default VideoPage;
