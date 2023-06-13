import React from 'react';

const VideoPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <video className="w-auto h-auto" src="/spotify-wrapped.mov" autoPlay loop muted />
    </div>
  );
};

export default VideoPage;
