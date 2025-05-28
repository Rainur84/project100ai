// src/components/VideoGallery.tsx

import React from 'react';
import { videoList, VideoItem } from '@/data/videoList';

const VideoGallery: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">🎬 AI Video Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoList.map((video: VideoItem) => (
          <div key={video.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;