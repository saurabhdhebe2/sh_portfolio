import VideoDetail from './VideoDetail';

const VideoPage = (props) => {
  const videos = {
    tv_shows_and_podcast: [
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
    ],
    reels: [
      {
        src: 'https://www.youtube.com/embed/zPBF0NGiEm4',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/Lvvsdk6VJOI?si=pp9rh0G5R-ze03de',
        type: 'yt',
        isVertical: true,
      },
      {
        src: 'https://www.youtube.com/embed/w_UU-EfSq3c ',
        type: 'yt',
        isVertical: true,
      },
     
    ],
    ads_and_corporate_films: [
      {
        src: 'https://www.youtube.com/embed/hd2-nzxSAic?si=1PGvIKq74yyMtGW5',
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
    ],
    travel_films: [
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
     
    ],
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
    ],
   
  };
  return (
    <div className="mx-auto lg:pb-20">
    {Object.entries(videos).map(([category, videoList]) => (
      <div key={category} className="sm:mt-0 md:mt-16 mb-8">
        {/* Category Name */}
        <div className="sm:my-8 md:mb-6 lg:mb-16 pl-6">
          <h2 className="font-bebas-neue font-bold text-2xl  capitalize">
            {category?.replace(/_/g, ' ')}
          </h2>
        </div>
        {/* Videos Grid */}
        <div className="grid sm:mt-6 sm:grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoList.map((video, index) => (
            <div
              key={video?.src}
              className={`${
                video.isVertical && video.type !== "yt" ? "my-36" :  "sm:mt-8 md:mt-4"
              } ${video.type === "yt" ? "sm:mt-8 sm:mb-4 md:mt-16 md:mb-12" : "my-8"} md:my-16`}
            >
              {video && <VideoDetail video={video} />}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  
  

  );
};

export default VideoPage;
