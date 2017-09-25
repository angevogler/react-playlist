import React, { Component } from 'react';

class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      artist: "",
      notes:"",
      favorite: false,
    }
  }

  toggleFavorite() {
    this.setState({
      favorite: !this.state.favorite,
    })
  }

  render() {
    const song = this.props.item;

    if (this.state.favorite) {
      return(
        <div>
          <div className="favrorite-btn-container">
            <p onClick={() => this.toggleFavorite()}>&#9829;</p>
          </div>
          <h5>Song Title: <span className="playlist-item-val">{song.title}</span></h5>
          <h5>Artist/Band: <span className="playlist-item-val">{song.artist}</span></h5>
          <h5>Notes: <span className="playlist-item-val">{song.notes}</span></h5>
        </div>
      )
    } else {
      return(
        <div>
          <div className="favrorite-btn-container">
            <p onClick={() => this.toggleFavorite()}>&#9825;</p>
          </div>
          <h5>Song Title: <span className="playlist-item-val">{song.title}</span></h5>
          <h5>Artist/Band: <span className="playlist-item-val">{song.artist}</span></h5>
          <h5>Notes: <span className="playlist-item-val">{song.notes}</span></h5>
        </div>
      )
    }
  }
};

export default PlaylistItem;
