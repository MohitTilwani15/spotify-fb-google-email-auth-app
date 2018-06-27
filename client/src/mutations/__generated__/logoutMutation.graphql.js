/**
 * @flow
 * @relayHash 016b09d4e67542b5c5b5fb55557fff86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type logoutMutationVariables = {||};
export type logoutMutationResponse = {|
  +logout: ?{|
    +id: ?string
  |}
|};
*/


/*
mutation logoutMutation {
  logout {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logout",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "logoutMutation",
  "id": null,
  "text": "mutation logoutMutation {\n  logout {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "logoutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "logoutMutation",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ceaf0bfbb275fb214660fb8b6b78aa4';
module.exports = node;
