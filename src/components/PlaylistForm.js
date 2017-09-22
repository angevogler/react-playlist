import React, { Component } from 'react';

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

  // update state of title
  newTitle(event) {
    this.setState({
      title: event.target.value,
    })
  }

  // update state of artist
  newArtist(event) {
    this.setState({
      artist: event.target.value,
    })
  }

  // update state of notes
  newNotes(event) {
    this.setState({
      notes: event.target.value,
    })
  }

  newSong(event) {
    console.log(this.state.title);
    console.log(this.state.artist);
    console.log(this.state.notes);

    this.props.onChangeValue({
      title: this.state.title,
      artist: this.state.artist,
      notes: this.state.notes,
      favorite: false,
    })
  }



  render() {
    const playlist = this.props.playlist
    console.log(playlist);

    return(
      <div className="playlist-form">
        <h3>Add New Song:</h3>
        <div className="form">
          <input type="text" placeholder="Song Title"
            value={this.state.title}
            onChange={event => this.newTitle(event)}/>
          <input type="text" placeholder="Artist/Band"
            value={this.state.artist}
            onChange={event => this.newArtist(event)}/>
          <textarea placeholder="Add notes:"
            value={this.state.notes}
            onChange={event => this.newNotes(event)}></textarea>
          <button onClick={() => this.newSong()}>Add</button>
        </div>
      </div>
    );
  };
}

export default PlaylistForm;
