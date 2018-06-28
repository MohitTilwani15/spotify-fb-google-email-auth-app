import React, { Component } from 'react';
import axios from 'axios';

class SpotifyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    axios.get('/api/spotify/me', { withCredentials: true })
      .then((data) => {
        this.setState({ data: data.data });
      });
  }

  render() {
    return (
      <div>
        <button>Login with spotify</button>
      </div>
    );
  }
}

export default SpotifyPage;
