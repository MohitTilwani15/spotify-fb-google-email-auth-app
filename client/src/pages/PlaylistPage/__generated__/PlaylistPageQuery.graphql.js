/**
 * @flow
 * @relayHash e579dc227f5a6c2c7d0a256424d07bc0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
export type PlaylistPageQueryVariables = {||};
export type PlaylistPageQueryResponse = {|
  +$fragmentRefs: Layout$ref
|};
*/


/*
query PlaylistPageQuery {
  ...Layout
}

fragment Layout on RootQueryType {
  user {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlaylistPageQuery",
  "id": null,
  "text": "query PlaylistPageQuery {\n  ...Layout\n}\n\nfragment Layout on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlaylistPageQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlaylistPageQuery",
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
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ac4cd6b78094e1d7d89a4d971c466916';
module.exports = node;
