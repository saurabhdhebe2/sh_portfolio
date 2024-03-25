import { useState } from 'react';

const VideoDetail = ({ video }) => {
  return (
    <div className="relative">
      <iframe
        id={`video-${video.id}`}
        className="w-full h-60"
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
