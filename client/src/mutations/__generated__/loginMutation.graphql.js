/**
 * @flow
 * @relayHash de257ec4d6f89ac998e80cce07e79d3a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  email?: ?string,
  password?: ?string,
|};
export type loginMutationResponse = {|
  +login: ?{|
    +id: ?string,
    +email: ?string,
  |}
|};
*/


/*
mutation loginMutation(
  $email: String
  $password: String
) {
  login(email: $email, password: $password) {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String"
      }
    ],
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "loginMutation",
  "id": null,
  "text": "mutation loginMutation(\n  $email: String\n  $password: String\n) {\n  login(email: $email, password: $password) {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "loginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "loginMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c0910efc2e6e338c779b6ab835b9a226';
module.exports = node;
