const VideoDetail = ({ video }) => {
  return (
    <div className="relative">
      <iframe
        id={`video-${video.id}`}
        className={`w-[90%] h-80 mx-auto my-[-50px] lg:bg-black`}
        src={video.src}
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
