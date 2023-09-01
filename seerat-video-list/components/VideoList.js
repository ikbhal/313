// components/VideoList.js
import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div>
      <h2>Seerat Video List</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
