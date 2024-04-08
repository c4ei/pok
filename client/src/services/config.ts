import { SERVER_PORT, SOCKET_PORT } from "./requests/config/config";

// let SERVER_URL = `${location.protocol}//${location.hostname}`;
// let WEBSOCKET_URL = `ws://${location.hostname}:${SOCKET_PORT}`;

let SERVER_URL = 'https://poker.c4ex.net';
let WEBSOCKET_URL = 'ws://pkapi.c4ex.net';

// if (location.protocol == "http:") {
//   SERVER_URL += `:${SERVER_PORT}`;
// } else {
//   WEBSOCKET_URL = location.origin.replace(/^http/, "ws");
// }

export { SERVER_URL, WEBSOCKET_URL };
