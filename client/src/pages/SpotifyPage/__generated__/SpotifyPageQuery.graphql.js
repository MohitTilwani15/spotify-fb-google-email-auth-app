/**
 * @flow
 * @relayHash ea42bbffdc3cea194df81595d74333d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
type SpotifyPage$ref = any;
export type SpotifyPageQueryVariables = {||};
export type SpotifyPageQueryResponse = {|
  +$fragmentRefs: Layout$ref & SpotifyPage$ref
|};
*/


/*
query SpotifyPageQuery {
  ...Layout
  ...SpotifyPage
}

fragment Layout on RootQueryType {
  user {
    id
    email
  }
}

fragment SpotifyPage on RootQueryType {
  spotifyUserDetails {
    display_name
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "SpotifyPageQuery",
  "id": null,
  "text": "query SpotifyPageQuery {\n  ...Layout\n  ...SpotifyPage\n}\n\nfragment Layout on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n\nfragment SpotifyPage on RootQueryType {\n  spotifyUserDetails {\n    display_name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SpotifyPageQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "SpotifyPage",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SpotifyPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "spotifyUserDetails",
        "storageKey": null,
        "args": null,
        "concreteType": "SpotifyUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "display_name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '9923e7603d5e15f760168c0b8c99c977';
module.exports = node;
