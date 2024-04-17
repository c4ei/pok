import { SERVER_PORT, SOCKET_PORT } from "./requests/config/config";

// let SERVER_URL = `${location.protocol}//${location.hostname}`;
// let WEBSOCKET_URL = `ws://${location.hostname}:${SOCKET_PORT}`;

const SERVER_URL = 'https://poker.c4ex.net';
const WEBSOCKET_URL = 'wss://pkapi.c4ex.net';

// if (location.protocol == "http:") {
//   SERVER_URL += `:${SERVER_PORT}`;
// } else {
//   WEBSOCKET_URL = location.origin.replace(/^http/, "ws");
// }

export { SERVER_URL, WEBSOCKET_URL };
