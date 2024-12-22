const VideoDetail = ({ video }) => {
  return (
    <div className="relative">
      <iframe
        id={`video-${video?.id}`}
        loading="lazy"
        className={`w-[90%] h-[200px] md:h-80 md:my-[20px] mx-auto lg:my-[-50px] lg:bg-black`}
        src={video?.src}
        title="Vimeo video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
