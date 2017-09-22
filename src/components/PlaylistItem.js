import React, { Component } from 'react';
import Playlist from '../components/Playlist.js';

class PlaylistItem extends Component {
  render() {
    const song = this.props.item;

    return(
      <div>
        <h5>Song Title: <span className="playlist-item-val">{song.title}</span></h5>
        <h5>Artist/Band: <span className="playlist-item-val">{song.artist}</span></h5>
        <h5>Notes: <span className="playlist-item-val">{song.notes}</span></h5>
      </div>
    )
  }
};

export default PlaylistItem;
