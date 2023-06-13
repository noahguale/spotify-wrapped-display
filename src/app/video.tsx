import React from 'react';
import { Footer } from './Footer';

const VideoPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <video className="w-auto h-auto" src="/spotify-wrapped.mov" autoPlay loop muted />
      <Footer />
    </div>
  );
};

export default VideoPage;
