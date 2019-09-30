import React, { Component } from "react";

import axios from "axios";

import apiKey from "./config";

import PhotoContainer from "./PhotoContainer";

export default class FetchContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      query: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${this.props.query}&size=q&per_page=16&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          query: ""
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <div id="results">
        <div className="photo-container">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <PhotoContainer data={this.state.photos} />
          )}
        </div>
      </div>
    );
  }
}
