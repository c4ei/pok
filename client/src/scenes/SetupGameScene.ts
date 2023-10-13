import * as PIXI from "pixi.js";
import sceneManager from "../utility/SceneManager";
import PlayerStorage from "../utility/PlayerStorage";
import {PLAYER_STATE } from "../services/requests/requests";
import ColyseusClient from "../services/colyseus/ColyseusClient";
import Cookies from "js-cookie";
import BaseScene from "../abstraction/BaseScene";

export default class SetupGameScene extends BaseScene {
  authToken: string | undefined
    constructor() {
      super();

      this.init()
    }

    async init(){
      this.authToken = this.getAuthToken()
    //   await this.fetchPlayerData()
      await this.tryJoinToGameRoom()
      this.startSocketListeners()
    }

    // async fetchPlayerData(){
    //   const authToken = this.authToken
    //   const playerState = await (await PLAYER_STATE({authToken})).json();
    //   PlayerStorage.setData(playerState)
    // }

     private async tryJoinToGameRoom(){
      const isPlayerJoined = await ColyseusClient.joinGameRoom(Cookies.get("authToken"))
      return isPlayerJoined
    }

    private getAuthToken(): string | undefined{
      return Cookies.get("authToken")
    }

    private startSocketListeners(){
        ColyseusClient.setupListeners()
    }
  }
  