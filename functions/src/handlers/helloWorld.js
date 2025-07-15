import {onRequest} from "firebase-functions/v2/https";

export const hello = onRequest((request, response) => {
  response.json({message: "Hello from Firebase! updated"});
});
