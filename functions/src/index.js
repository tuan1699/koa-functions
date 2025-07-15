/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
// import logger from "firebase-functions/logger";
// import {hello} from "./handlers/helloWorld.js";
import functions from "firebase-functions";
import apiHandler from "./handlers/api.js";

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// export const helloWorld = onRequest(hello);

/**
 * Firebase URL with format:
 * http://127.0.0.1:5001/<project-id>/<region>/<function-name>
 * http://127.0.0.1:5001/avada-onboarding/us-central1/helloWorld/api/helloWorld
 */
export const helloWorld = onRequest(apiHandler.callback());
