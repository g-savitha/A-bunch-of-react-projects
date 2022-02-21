import React from 'react';

import { connect } from 'react-redux';

function SongDetail({ selectedSong }) {
  if (!selectedSong)
    return (
      <div>
        <h5>Please Select a song!</h5>
      </div>
    );
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
