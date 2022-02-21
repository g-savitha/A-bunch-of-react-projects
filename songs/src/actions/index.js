//Action creator
export const selectSong = (song) => {
  // returns an action(POJO) with type and (optional: payload) parameters
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
