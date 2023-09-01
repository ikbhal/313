// components/Playlist.js
import React from 'react';

const Playlist = () => {
  const playlistUrl = 'https://www.youtube.com/playlist?list=PLvlDRNpJgZHPNIG-YEcBgOp0Ca2aCSK1z';

  return (
    <div>
      <h2>Seerat Video Playlist</h2>
      <iframe
        width="560"
        height="315"
        src={playlistUrl}
        title="Seerat Video Playlist"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Playlist;
