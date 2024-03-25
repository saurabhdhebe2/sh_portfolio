import { useEffect } from 'react';
import VideoDetail from './VideoDetail';

const VideoPage = ({ category }) => {
  const videos = {
    tv_shows: [
      {
        id: 1,
        url: 'https://player.vimeo.com/video/913364059?h=ee628b6799',
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
    ],
    music_films: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
      {
        id: 3,
        type: 'vimeo',
        url: 'https://player.vimeo.com/video/913349763?h=aaff662dea',
        details: {
          title: 'ISL',
          description:
            'In The Stands with Lallianzuala Chhangte Playing for India Career defining call with Des Fandom',
        },
      },
      // Add more videos as needed
    ],
    reels: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
    ],
    ads: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
        type: 'youtube',
      },
    ],
    personal_projects: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
    ],
    after_movies: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
    ],
    weddings: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
    ],
    travel: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=n60xRrzIk4-gh7ez',
        details: {
          title: 'jassie gill / iifa awards 2019 / BTS',
          description: 'Description of Video 1',
        },
      },
      {
        id: 2,
        type: 'youtube',
        url: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=IT0bzn3JER-IXnaa',
        details: {
          title: 'Malshej Ghat',
          description: 'Description of Video 2',
        },
      },
    ],
  };
  useEffect(() => {
    console.log('==', videos[category]);
  }, []);
  return (
    <div className="grid sm:grid-col-1 gap-2 md:grid-col-2 gap-2 lg:grid-cols-3 gap-4 mx-auto py-8">
      {videos[category].length &&
        videos[category].map((video, index) => (
          <div key={index}>{video && <VideoDetail video={video} />}</div>
        ))}
    </div>
  );
};

export default VideoPage;
