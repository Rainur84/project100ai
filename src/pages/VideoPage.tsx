import React from 'react';
import { Helmet } from 'react-helmet-async';
import VideoGallery from '../components/VideoGallery';

const VideoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Videos – NeuroBox</title>
        <meta name="description" content="Watch the best AI-related videos, shorts, and comparisons." />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Top AI Videos</h1>
        <VideoGallery />
      </div>
    </>
  );
};

export default VideoPage;