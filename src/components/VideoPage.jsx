import VideoDetail from './VideoDetail';

const VideoPage = ({ category }) => {
  const videos = {
    tv_shows: [
      {
        src: 'https://player.vimeo.com/video/913349763?h=aaff662dea',
      },
      {
        src: 'https://player.vimeo.com/video/913364059?h=ee628b6799',
      },
    ],
    music_films: [
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
      {
        src: 'https://player.vimeo.com/video/754298465?h=a1f4f8bda4',
      },
    ],
    reels: [
      {
        src: 'https://player.vimeo.com/video/913354685?h=88efceef0e',
        isVertical: true,
      },
      {
        src: 'https://player.vimeo.com/video/784783087?h=1d21263650',
        isVertical: true,
      },
    ],
    ads: [
      {
        src: 'https://player.vimeo.com/video/409644923?h=11401b50f1',
      },
      {
        src: 'https://player.vimeo.com/video/750342201?h=005205d3e6',
      },
    ],
    personal_projects: [
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
    ],
    after_movies: [
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
    ],
    weddings: [
      {
        src: 'https://player.vimeo.com/video/282464036?h=94707a710a',
      },
      {
        src: 'https://player.vimeo.com/video/750338228?h=a9358e08ec',
      },
    ],
    travel: [
      {
        src: 'https://player.vimeo.com/video/750338759?h=6dc02af66b',
      },
      {
        src: 'https://player.vimeo.com/video/409645031?h=237f89cf86',
      },
    ],
  };
  return (
    <div
      className={`grid sm:grid-col-1 gap-1 md:grid-col-2 gap-2 lg:grid-cols-3 gap-4 mx-auto lg:py-8`}
    >
      {videos[category].length &&
        videos[category].map((video, index) => (
          <div key={index}>{video && <VideoDetail video={video} />}</div>
        ))}
    </div>
  );
};

export default VideoPage;
