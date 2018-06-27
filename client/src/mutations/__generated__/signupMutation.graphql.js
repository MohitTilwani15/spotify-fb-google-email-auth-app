/**
 * @flow
 * @relayHash e3324fd32af0d6adf6e537e68730ae9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signupMutationVariables = {|
  email?: ?string,
  password?: ?string,
|};
export type signupMutationResponse = {|
  +signup: ?{|
    +id: ?string,
    +email: ?string,
  |}
|};
*/


/*
mutation signupMutation(
  $email: String
  $password: String
) {
  signup(email: $email, password: $password) {
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
    "name": "signup",
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
  "name": "signupMutation",
  "id": null,
  "text": "mutation signupMutation(\n  $email: String\n  $password: String\n) {\n  signup(email: $email, password: $password) {\n    id\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signupMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07e4ba5fbda267d6e3fa228d44daaba2';
module.exports = node;
