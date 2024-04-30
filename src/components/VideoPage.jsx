import VideoDetail from './VideoDetail';

const VideoPage = ({ category }) => {
  const videos = {
    tv_shows: [
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
      {
        src: 'https://player.vimeo.com/video/913349763?h=aaff662dea',
      },
      {
        src: 'https://player.vimeo.com/video/913364059?h=ee628b6799',
      },
    ],
    music_films: [
      {
        src: 'https://www.youtube.com/embed/MODmzQh551Q?si=TiyRgEF44X_MZOtG',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/biGmrEgmx64?si=6k7Su0I5LO-QffJG',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/i6v-LBQ9jt4?si=8EOsvNYyOEsMu0z-',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/ZxTdI42JNUM?si=8V39cH8VvgqOrVBh',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/9sosXoO-jFI?si=9pY3O5xFzCw6sOor',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/IiIfOnjPFU8?si=sUPFd9rHOXrV_6MX',
        type: 'yt',
      },
    ],
    reels: [
      {
        src: 'https://www.youtube.com/embed/zPBF0NGiEm4',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/jET8om_8XwY',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/AepnA7FfNXU ',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/gzmLeNl55Pc ',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/2XdLWONzHNo ',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/Sifs4QNj22Y',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/dXBwjWlPg0g',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/tjBpvKZfgCY',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/SoKq2UFfuFM',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/EHnUAlx_hPI',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/Vh7a45YKZR0',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/EHnUAlx_hPI',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/Vh7a45YKZR0',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/a9T_KPMZ5GM',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/OGx2b_szn5M',
        type: 'yt',
        isVertical: true,
      },
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
    Documentaries: [
      {
        src: 'https://www.youtube.com/embed/2oDAdTHuXe4?si=xJXqKHpJFyU_nP7T',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/Ni7mibOi0KE?si=8mYfLUZ9EnblEpEk',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/zGLlqqTsd44?si=d4jxGvI2WaNhKsE0',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/UBhdRrCP1h0?si=r6sJWfbO84qzAvYT',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/K1E1WbEMLQo?si=luJZIpEMBjB3UeHo',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/dzrMg1rGzrU?si=Cqz8o73drgPygxhe',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/_2BVfGPy8QU?si=PKqimhEI_XFEUEf0',
        type: 'yt',
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
        src: 'https://www.youtube.com/embed/djC_8Xwzh2o?si=Dck9GDSObz95bveL',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/yVa4J4WvjIg?si=gGZLBGFkzWzd4Tjm ',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/Ixzpam2xgQ0?si=16grcytu07bYHmud  ',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/qqtrBvSJGrg?si=P21Q-kEQni7qPhs0  ',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/Rgoyvp9HdH0?si=FyCupc5uB_f19Ezf  ',
        type: 'yt',
      },
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
            className={` ${video.type == 'yt' ? 'my-28' : 'mb-0'}  ${
              video.isVertical && video.type != 'yt' ? 'my-36' : 'mb-0'
            } lg:my-16`}
            key={index}
          >
            {video && <VideoDetail video={video} />}
          </div>
        ))}
    </div>
  );
};

export default VideoPage;
