import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import useStore from '../store';

function YouTube(props) {
  const setVideos = useStore(({ videoSlice }) => videoSlice.setVideos);

  const search = (text) => {
    youtubeSearch(text).then((videos) => {
      setVideos(videos);
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
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTube;
