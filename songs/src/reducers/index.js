import { combineReducers } from 'redux';

const songsReducer = () => {
  return {
    songs: [
      { title: 'Cake by the Ocean', duration: '4:05' },
      { title: 'Black and Yellow', duration: '2:30' },
      { title: 'Thank u, next', duration: '3:15' },
      { title: 'Boyfriend', duration: '3:15' },
    ],
    favoriteTitle: 'Thank u, next',
  };
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  else return selectedSong;
};

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default reducers;
