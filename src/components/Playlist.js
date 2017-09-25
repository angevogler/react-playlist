import React, { Component } from 'react';

import PlaylistForm from './PlaylistForm.js';
import PlaylistItem from './PlaylistItem.js';

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

  // change value of favorite in the state
  handleFavorite(event) {
    console.log(event)

    console.log(this.state.playlist);

    const favorites = this.state.playlist.slice();
    console.log("favorites before push")
    console.log(favorites)

    favorites.push(event);

    console.log("favorites after push")
    console.log(favorites);
    // this.setState({ playlist: favorites});
  }

  // display songs from search component
  handleSearch(event) {
    let playlist = this.state.playlist;
    let matches = [];

    this.setState({
      searchTxt: event.target.value,
    }, function() {
      let search = this.state.searchTxt.toLowerCase();

      // iterate through the playlist to find each song title
      for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].title.toLowerCase().includes(search)) {
          matches.push(playlist[i]);
        }
      }
    });

    this.setState({
      searchedSongs: matches,
    });
  }

  render() {

    let songs;
    let matches;
    // show the songs
    if (this.state.searchTxt === "") {
      console.log(this.state.playlist)
      songs = this.state.playlist.map(song => {
        console.log(song.title);
        return(
          <div className="playlist-item-container" key={song.title}>
           <div className="playlist-item">
             <PlaylistItem item = {song} onChangeValue={(event) => this.handleFavorite(event)}/>
           </div>
          </div>
        );
      });
    } else if (this.state.searchTxt !== "") {
      console.log(this.state.searchTxt);
      console.log(this.state.searchedSongs);
      matches = this.state.searchedSongs.map(match => {
        console.log(match.title);
        return(
          <div className="playlist-item-container" key={match.title}>
           <div className="playlist-item">
             <PlaylistItem item = {match} onChangeValue={(event) => this.handleFavorite(event)}/>
           </div>
          </div>
        );
      })
    }


    return(
      <div className="page-container">
        <PlaylistForm playlist={this.state.playlist}
        onChangeValue={(event) => this.handleNewSong(event)}/>
        <div className="playlist">
          <h3>Playlist</h3>
          <div>
            <input type="text" placeholder="Search by Song Title" onChange={ event => this.handleSearch(event)}/>
          </div>
          <div>
            {songs}
            {matches}
          </div>
        </div>
      </div>
    );
  };
};

export default Playlist;
