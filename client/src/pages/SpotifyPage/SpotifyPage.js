import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

class SpotifyPage extends Component {
  render() {
    const { data } = this.props;

    if (data && data.spotifyUserDetails && data.spotifyUserDetails.display_name) {
      return (
        <h1>Wassup</h1>
      )
    }

    return (
      <div>
        <a href="/api/spotify/login">
          <button>Login with spotify</button>
        </a>
      </div>
    );
  }
}

export default createFragmentContainer(
  SpotifyPage,
  graphql`
    fragment SpotifyPage on RootQueryType {
      spotifyUserDetails {
        display_name
      }
    }
  `,
);
