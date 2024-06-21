import React from 'react';
import useStore from '../store'; // Adjust the path as necessary

function VideoDetail() {
  // Accessing the selected video directly from the Zustand store
  const video = useStore((state) => state.videoSlice.selected);

  if (!video) {
    return <div>Loading...</div>; // Displaying a loading message if no video is selected
  }

  const { videoId } = video.id; // Assuming video.id directly contains the videoId
  const url = `https://www.youtube.com/embed/${videoId}`; // Constructing the YouTube embed URL

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="YouTube video player" src={url} className="embed-responsive-item" allowFullScreen />
      </div>
      <div className="details">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
