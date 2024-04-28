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
      {
        src: 'https://www.youtube.com/embed/190Dkfa4WaA?si=Q1--5JwennCyBYG_',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/wCdyZnggx5A?si=5byOEcO6o4c8S7e4',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/yRv0x6_k8K8?si=aIPIq6QUbLa12XmT',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/BukU1uTku9k?si=ua9J69PdBiWC-ajg',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/2eBULBNFrp0?si=uQd7o3i8wQrag6zD',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/6faZ77L94Go?si=NsRSg9HEhmkz6ZB-',
        type: 'yt',
      },
    ],
    music_films: [
      {
        src: 'https://player.vimeo.com/video/809083723?h=2d1e3dbc1b',
      },
      {
        src: 'https://player.vimeo.com/video/754298465?h=a1f4f8bda4',
      },
      {
        src: 'https://www.youtube.com/embed/MODmzQh551Q?si=TiyRgEF44X_MZOtG',
        type: 'yt',
      },
      {
        src: 'https://player.vimeo.com/video/754298465?h=a1f4f8bda4',
      },
      {
        src: 'https://www.youtube.com/embed/biGmrEgmx64?si=6k7Su0I5LO-QffJG',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/i6v-LBQ9jt4?si=8EOsvNYyOEsMu0z-',
        type: 'yt',
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
          <div
            className={`${video.type == 'yt' ? 'my-16' : 'mb-0'} lg:my-16`}
            key={index}
          >
            {video && <VideoDetail video={video} />}
          </div>
        ))}
    </div>
  );
};

export default VideoPage;
