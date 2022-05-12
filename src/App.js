import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Out from './Out.js';
import "./App.css";
export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeModeName = this.onChangeModeName.bind(this);
    this.onSubmitMode = this.onSubmitMode.bind(this);
    ////////////////////////////////
    this.onChangeAuthorModeName = this.onChangeAuthorModeName.bind(this);
    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onChangeAuthorPhotoUrl = this.onChangeAuthorPhotoUrl.bind(this);
    this.onChangeAuthorLike = this.onChangeAuthorLike.bind(this);
    this.onSubmitAuthor = this.onSubmitAuthor.bind(this);
    ////////////////////////////////
    this.onChangeSongTime = this.onChangeSongTime.bind(this);
    this.onChangeSongSpeakerName = this.onChangeSongSpeakerName.bind(this);
    this.onChangeSongTitle = this.onChangeSongTitle.bind(this);
    this.onChangeSongUrl = this.onChangeSongUrl.bind(this);
    this.onSubmitSong = this.onSubmitSong.bind(this);

    // Setting up state
    this.state = {
      modeName : '',

      authorModeName:'',
      authorName:'',
      authorPhotoUrl:'',
      authorLike:'',

      songModeName: '',
      songAuthorName: '',
      songTitle: '',
      songUrl: '',
      songTime: ''
    }
  }

  onChangeModeName(e) {
    this.setState({ modeName: e.target.value })
  }
/////////////////////////////////////////////
  onChangeAuthorModeName(e) {
    this.setState({ authorModeName: e.target.value })
  }
  onChangeAuthorName(e) {
    this.setState({ authorName: e.target.value })
  }
  onChangeAuthorPhotoUrl(e) {
    this.setState({ authorPhotoUrl: e.target.value })
  }
  onChangeAuthorLike(e) {
    this.setState({ authorLike: e.target.value })
  }
//////////////////////////////////////////////////////////////////
  onChangeSongTime(e) {
    this.setState({ songTime: e.target.value })
  }
  onChangeSongSpeakerName(e) {
    this.setState({ songAuthorName: e.target.value })
  }
  onChangeSongTitle(e) {
    this.setState({ songTitle: e.target.value })
  }
  onChangeSongUrl(e) {
    this.setState({ songUrl: e.target.value })
  }
  onSubmitMode(e) {
    e.preventDefault()
    // console.log("sldkfslkdfjsldkfjls");
    const modeObject = {
      modeName: this.state.modeName
    };
    axios.post('http://localhost:8290/liveRadio/createMode', modeObject)
      .then(res => console.log(res.data));

    // this.setState({ modeName: ''})
  }
/////////////////////////////////////////////
  onSubmitAuthor(e) {
    e.preventDefault()
    const authorObject = {
      modeName: this.state.authorModeName,
      authorName: this.state.authorName,
      authorPhotoUrl: this.state.authorPhotoUrl,
      authorLike : this.state.authorLike
    };
    axios.post('http://localhost:8290/liveRadio/createAuthor', authorObject)
      .then(res => console.log(res.data));

    // this.setState({ authorModeName: '', authorName: '', authorPhotoUrl: '', authorLike: '' })
  }
/////////////////////////////////////////////
  onSubmitSong(e) {
    e.preventDefault()
    const songObject = {
      modeName: this.state.songModeName,
      authorName: this.state.songAuthorName,
      songTitle: this.state.songTitle,
      songUrl : this.state.songUrl,
      songTime : this.state.songTime
    };
    axios.post('http://localhost:8290/liveRadio/createSong', songObject)
      .then(res => console.log(res.data));

    // this.setState({ songModeName: '', songAuthorName: '', songTitle: '', songUrl: '', songTime: '' })
  }

  
  render() {
    return (<div className="form-wrapper" style={{display:'flex'}}>
      <Form onSubmit={this.onSubmitMode}>
        <Form.Group controlId="Mode">
          <Form.Label>Mode</Form.Label>
          <Form.Control type="text" value={this.state.modeName} onChange={this.onChangeModeName} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Add a new mode
        </Button>
      </Form>


      <Form onSubmit={this.onSubmitAuthor}>
        <Form.Group controlId="AuthorMode">
          <Form.Label>Mode</Form.Label>
          <Form.Control type="text" value={this.state.authorModeName} onChange={this.onChangeAuthorModeName} />
        </Form.Group>
        <Form.Group controlId="AuthorName">
          <Form.Label>SpeakerName</Form.Label>
          <Form.Control type="text" value={this.state.authorName} onChange={this.onChangeAuthorName} />
        </Form.Group>
        <Form.Group controlId="AuthorPhotoUrl">
          <Form.Label>SpeakerPhotoUrl</Form.Label>
          <Form.Control type="text" value={this.state.authorPhotoUrl} onChange={this.onChangeAuthorPhotoUrl} />
        </Form.Group>
        <Form.Group controlId="AuthorLike">
          <Form.Label>SpeakerLike</Form.Label>
          <Form.Control type="text" value={this.state.authorLike} onChange={this.onChangeAuthorLike} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Add a new Speaker
        </Button>
      </Form>


      <Form onSubmit={this.onSubmitSong}>
        
        <Form.Group controlId="SongAuthorName">
          <Form.Label>Speaker</Form.Label>
          <Form.Control type="text" value={this.state.songAuthorName} onChange={this.onChangeSongSpeakerName} />
        </Form.Group>
        <Form.Group controlId="SongTitle">
          <Form.Label>SoundTitle</Form.Label>
          <Form.Control type="text" value={this.state.songTitle} onChange={this.onChangeSongTitle} />
        </Form.Group>
        <Form.Group controlId="SongUrl">
          <Form.Label>SoundUrl</Form.Label>
          <Form.Control type="text" value={this.state.songUrl} onChange={this.onChangeSongUrl} />
        </Form.Group>
        <Form.Group controlId="SongTime">
          <Form.Label>SongTime</Form.Label>
          <Form.Control type="text" value={this.state.songTime} onChange={this.onChangeSongTime} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Add a new sound
        </Button>
      </Form>
      <Out/>
    </div>);
  }
}