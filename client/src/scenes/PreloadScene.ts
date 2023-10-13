import * as PIXI from "pixi.js";
import sceneManager from "../utility/SceneManager";
import AssetsManager from "../utility/AssetsManager";
import Cookies from "js-cookie";
import BaseScene from "../abstraction/BaseScene";


export default class PreloadScene extends BaseScene {
  constructor() {
    super();

    this.create();
  }

  async create(): Promise<void> {
    await this.loadImages();
    this.handleStartNextScene();
  }

  async loadImages(): Promise<void> {
    const images = [
      "background",
      "table",
      "croupier",
      "default_avatar"
    ];

    let totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
      let sprite = images[i];
      let source = `assets/${sprite}.png`

      AssetsManager.addImage(sprite, source);
    }
  }


  handleStartNextScene(){
    // Cookies.remove('authToken');
    Cookies.get("authToken") ?  sceneManager.startScene("PlayScene") :  sceneManager.startScene("LoginScene"),
    sceneManager.removeScene("BootScene")
}
}