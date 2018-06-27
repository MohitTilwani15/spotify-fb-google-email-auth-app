import React, { Component } from 'react';
import Link from './Link';

class Sidebar extends Component {
  render() {
    return (
      <ul className="side-nav fixed">
        <li>
          <div className="userView">
            <img className="background" alt="music" src="https://goo.gl/images/kvyVrP" />
            <a href="#!name"><span className="white-text name">John Doe</span></a>
            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li><a><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li>
          <Link href="/playlist">Playlists</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li><a className="subheader">Music Apps</a></li>
        <li>
          <Link href="/itunes" className="waves-effect">Itunes</Link>
        </li>
        <li>
          <Link href="/spotify" className="waves-effect">Spotify</Link>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
