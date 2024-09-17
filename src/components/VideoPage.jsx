import VideoDetail from './VideoDetail';

const VideoPage = ({ category }) => {
  const videos = {
    tv_shows: [
      {
        src: 'https://www.youtube.com/embed/m3O1lnPJszk?si=bbgsMFuHUIUuZLyA',
        type: 'yt',
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
      // {
      //   src: 'https://www.youtube.com/embed/6faZ77L94Go?si=NsRSg9HEhmkz6ZB-',
      //   type: 'yt',
      // },
    ],
    music_films: [
      {
        src: '  https://www.youtube.com/embed/l2W-6rrpGFs?si=NbkK0WIYKvnIHuDY',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/eALyYAwV774?si=B68zypoNDULn4Oii',
        type: 'yt',
      },
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
        src: 'https://www.youtube.com/embed/uZEHtPJA25M',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/VRkrLLMJsqA',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/MkOl5xNfToM',
        type: 'yt',
        isVertical: true,
      },
    ],
    ads: [
      {
        src: 'https://www.youtube.com/embed/hCuAPduXktc',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/_laYrdrel08',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/_kGccUm4Xxg?si=3RTWb7A6Q1IND5vS',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/rPV6AZmIRlc?si=6DUNgXLqPdBUTlVi',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/hd2-nzxSAic?si=1PGvIKq74yyMtGW5',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/9l9sGa_J92o?si=1wA7In_MegfLJ_eb',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/KxhRUlMfS2s',
        type: 'yt',
      },
    ],
    passion_projects: [
      {
        src: 'https://www.youtube.com/embed/Z7zOJvWq06M?si=I5IN2fhJ88bI5MWT',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/21Y_FDUq1uY?si=hXEhZYRcQL7SJO3z',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/g3_JoqycZbI?si=UiPFL6dsT1PZ--a4',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/CVYLh1BGAP4?si=4jQzWjFOyv_FEmcd',
        type: 'yt',
      },

      {
        src: 'https://www.youtube.com/embed/urdljVOrmhA?si=uyPdVdZHU__Xo_ro',
        type: 'yt',
      },
    ],
    // Documentaries: [
    //   {
    //     src: 'https://www.youtube.com/embed/2oDAdTHuXe4?si=xJXqKHpJFyU_nP7T',
    //     type: 'yt',
    //   },
    //   {
    //     src: 'https://www.youtube.com/embed/Ni7mibOi0KE?si=8mYfLUZ9EnblEpEk',
    //     type: 'yt',
    //   },
    //   {
    //     src: 'https://www.youtube.com/embed/zGLlqqTsd44?si=d4jxGvI2WaNhKsE0',
    //     type: 'yt',
    //   },
    //   {
    //     src: 'https://www.youtube.com/embed/UBhdRrCP1h0?si=r6sJWfbO84qzAvYT',
    //     type: 'yt',
    //   },
    //   {
    //     src: 'https://www.youtube.com/embed/K1E1WbEMLQo?si=luJZIpEMBjB3UeHo',
    //     type: 'yt',
    //   },

    //   {
    //     src: 'https://www.youtube.com/embed/dzrMg1rGzrU?si=Cqz8o73drgPygxhe',
    //     type: 'yt',
    //   },
    //   {
    //     src: 'https://www.youtube.com/embed/_2BVfGPy8QU?si=PKqimhEI_XFEUEf0',
    //     type: 'yt',
    //   },
    // ],
    weddings: [
      {
        src: 'https://www.youtube.com/embed/p9cwnNzpUbM?si=tvj4AlWzHJ31uhlj',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/5ZF6uO-wQJ4?si=0QPQ7-7Bn4Z9YZjn',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/w5nA8HbU3Xw?si=dDV2l1qOSir6qppN',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/aH4kTecqcdA?si=GMnZRARPsMdp-atQ',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/ArjSgoIBzg8?si=OBmtHBJ7Fu4q2i18',
        type: 'yt',
      },
      {
        src: 'https://www.youtube.com/embed/uhTFQGZ9Fzo?si=ABHxORPRhwkk9xEU',
        type: 'yt',
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
        src: 'https://www.youtube.com/embed/YgY71xZ0peY  ',
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
    ],
  };
  return (
    <div
      className={`grid sm:grid-col-1 gap-1 md:grid-col-2 gap-2 lg:grid-cols-3 gap-4 mx-auto lg:py-8`}
    >
      {videos[category].length &&
        videos[category].map((video, index) => (
          <div
            className={`${
              video.isVertical && video.type != 'yt' ? 'my-36' : 'mt-4'
            } ${video.type == 'yt' ? 'my-28 mt-4' : 'my-8'}   lg:my-16`}
            key={index}
          >
            {video && <VideoDetail video={video} />}
          </div>
        ))}
    </div>
  );
};

export default VideoPage;
