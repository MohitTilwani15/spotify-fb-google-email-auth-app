import React, { Component } from 'react';
import Link from './Link';
import Sidebar from './Sidebar';
import { graphql, createFragmentContainer } from 'react-relay';
import RelayPropTypes from 'react-relay/lib/RelayPropTypes';
import PropTypes from 'prop-types';
import logoutMutation from '../mutations/logout';

class Layout extends Component {
  static contextTypes = {
    relay: RelayPropTypes.Relay,
    history: PropTypes.object.isRequired,
  }

  onLogoutClick() {
    logoutMutation.commit(this.context.relay.environment)
      .then(() => {
        this.context.history.push('/login');
      });
  }

  renderButtons() {
    if (this.props.data.user) {
      return (
        <li>
          {<a onClick={() => this.onLogoutClick()}>Logout</a>}
        </li>
      );
    } else {
      return (
        <div>
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/login">Login</Link></li>
        </div>
      );
    }
  }

  renderHeader() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
             Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    if (this.props.requireAuth && !this.props.data.user) {
      this.context.history.push('/login');
    }

    return (
      <div className="container">
        {!this.props.hideSidebar &&
          <Sidebar />
        }
        {this.renderHeader()}
        {this.props.children}
      </div>
    );
  }
}

export default createFragmentContainer(
  Layout,
  graphql`
    fragment Layout on RootQueryType {
      user {
        id
        email
      }
    }
  `,
);
