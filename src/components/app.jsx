import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [videos, setVideos] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };
  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      </div>
    </div>
  );
}

export default App;
