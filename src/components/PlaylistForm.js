import React, { Component } from 'react';
import Playlist from '../components/Playlist.js';

class PlaylistForm extends Component {
  constructor(props) {
    super(props);

    this.state ={
      title: "",
      artist: "",
      notes:"",
      favorite: false,
    }
  }

  newSong(event) {
    console.log(event.target.value)
    console.log(this.state.title)
  }



  render() {
    console.log(this.props.playlist);

    return(
      <div className="playlist-form">
        <h3>Add New Song:</h3>
        <div className="form">
          <input type="text" placeholder="Song Title" value={this.state.newTitle} onChange={event => this.newSong(event)}/>
          <input type="text" placeholder="Artist/Band"/>
          <textarea placeholder="Add notes:"></textarea>
          <button onClick={(event) => this.newSong(event)}>Add</button>
        </div>
      </div>
    );
  };
}

export default PlaylistForm;
