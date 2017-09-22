import React, { Component } from 'react';
import PlaylistForm from '../components/PlaylistForm.js';
import PlaylistItem from '../components/PlaylistItem.js';

class Playlist extends Component {
  constructor(props) {
    super(props);

    let playlist = [{
      title: "Truckin'",
      artist: "Grateful Dead",
      notes: "What a long strange trip it's been",
      favorite: false,
    }, {
      title: "What's My Age Again?",
      artist: "blink-182",
      notes: "Nobody likes you when you're 23",
      favorite: false,
    }

    ]

    this.state = {
      searchText: "",
      playlist: playlist,
      searchedSongs: playlist,
    }

  }

  handleNewSong(event) {
    playlist.push()
  }

  render() {

    const songs = this.state.playlist.map(song => {
      return(
        <div className="playlist-item-container" key={song.title}>
         <div className="favrorite-btn-container">
           <button>Favorite</button>
         </div>
         <div className="playlist-item">
           <PlaylistItem item = {song}/>
         </div>
        </div>
      );
    });

    return(
      <div className="page-container">
        <PlaylistForm playlist={this.state.playlist}
        onChangeValue={(event) => this.handleNewSong(event)}/>
        <div className="playlist">
          <h3>Playlist Title:</h3>
          <div>
            <input type="text" placeholder="Search by Song Title"/>
          </div>
          <div>
            {songs}
          </div>
        </div>
      </div>
    );
  };
};

export default Playlist;
