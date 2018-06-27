import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
  mutation logoutMutation {
    logout {
      id
    }
  }
`;

function commit(environment) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      updater: store => {
        store.getRoot().setValue(null, 'user');
      },
      onCompleted(response, errors) {
        if (errors) {
          reject(errors[0]);
        } else {
          resolve(true);
        }
      },
      onError: reject,
    });
  });
}

export default { commit }