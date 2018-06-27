import React, { Component } from 'react';
import RelayPropTypes from 'react-relay/lib/RelayPropTypes';
import PropTypes from 'prop-types';

import AuthForm from '../../components/AuthForm';
import signupMutation from '../../mutations/signup';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
    relay: RelayPropTypes.Relay,
  };

  onSubmit({ email, password }) {
    signupMutation.commit(this.context.relay.environment, email, password)
    .then(() => {
      this.context.history.push('/')
    })
    .catch((err) => {
      console.log(err);
      this.setState({ error: err.message });
    });
  }

  render() {
    return (
      <div>
        <AuthForm
          error={this.state.error}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default SignUpForm;