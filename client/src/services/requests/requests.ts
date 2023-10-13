import { requestGet, requestPost } from "./helper";

export const AUTHENTICATION = (data:object) => {
  return requestPost(data, "authentication");
};

export const REGISTRATION = (data: object) => {
  return requestPost(data, "registration");
};

export const PLAYER_STATE = (data: object) => {
  return requestPost(data, "playerState");
};