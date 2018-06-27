import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
  mutation signupMutation($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

function commit(environment, email, password) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      updater: store => {
        const user = store.getRootField('signup');
        if (user) store.getRoot().setLinkedRecord(user, 'user');
      },
      variables: { email, password },
      onCompleted(response, errors) {
        if (errors) {
          reject(errors[0]);
        } else {
          resolve(response);
        }
      },
      onError: reject,
    });
  });
}

export default { commit }