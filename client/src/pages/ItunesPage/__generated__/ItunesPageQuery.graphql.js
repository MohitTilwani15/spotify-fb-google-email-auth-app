/**
 * @flow
 * @relayHash 7b893be2e1b7d088e31a1ddf1ad01fee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
export type ItunesPageQueryVariables = {||};
export type ItunesPageQueryResponse = {|
  +$fragmentRefs: Layout$ref
|};
*/


/*
query ItunesPageQuery {
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
  "name": "ItunesPageQuery",
  "id": null,
  "text": "query ItunesPageQuery {\n  ...Layout\n}\n\nfragment Layout on RootQueryType {\n  user {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ItunesPageQuery",
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
    "name": "ItunesPageQuery",
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
(node/*: any*/).hash = 'd94068eec52ba819303c45ebbcd4326b';
module.exports = node;
