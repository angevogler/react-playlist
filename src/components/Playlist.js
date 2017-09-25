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
    }]

    this.state = {
      searchTxt: "",
      playlist: playlist,
      searchedSongs: playlist,
    }

  }

  // add new song to playlist
  handleNewSong(event) {
    console.log('New song: ');
    console.log(event)

    const added = this.state.playlist.slice();
    added.push(event);

    this.setState({ playlist: added });
  }

  // display songs from search component
  findSong(event) {
    let search = this.state.searchTxt.toLowerCase();
    let playlist = this.state.playlist;

    this.setState({
      searchTxt: event.target.value,
    });

    // iterate through the playlist to find each song title
    for (let i = 0; i < playlist.length; i++) {
      // iterate again to be able to compare each letter
      // between the song title and the searchTxt
      for (let j = 0; j < playlist[i].title.length; j++) {
        // if the song[i].title matches the searchTxt
        if (search[j] === playlist[i].title[j].toLowerCase()) {
          // push it into an array
          // set that array of matches = to playlist in state
          console.log(search);
        }
      }
    }

  }

  render() {

    // show the songs
    const songs = this.state.playlist.map(song => {
      if (this.state.favorite) {
        return(
          <div className="playlist-item-container" key={song.title}>
           <div className="playlist-item">
             <PlaylistItem item = {song}/>
           </div>
          </div>
        );
      } else {
        return(
          <div className="playlist-item-container" key={song.title}>
           <div className="playlist-item">
             <PlaylistItem item = {song}/>
           </div>
          </div>
        );
      }
    });

    return(
      <div className="page-container">
        <PlaylistForm playlist={this.state.playlist}
        onChangeValue={(event) => this.handleNewSong(event)}/>
        <div className="playlist">
          <h3>Playlist Title:</h3>
          <div>
            <input type="text" placeholder="Search by Song Title" onChange={ event => this.findSong(event)}/>
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
