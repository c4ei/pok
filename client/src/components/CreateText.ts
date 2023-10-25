import * as PIXI from "pixi.js";
import TextConfig from "../interfaces/TextConfig";

export default class Text extends PIXI.Text {
    constructor(config: TextConfig) {
        const { message, x, y, anchorX, anchorY, visible, textConfig } = config;
        super(message, textConfig); 

        this.anchor.set(anchorX, anchorY);
        this.position.set(x, y);
        this.visible = visible;

        this.updateMessage(message);
    }

    public updateMessage(updatedText: string | number) {
      if(typeof updatedText === "number") {
        this.text = this.roundNumbersToK(updatedText)
      }
    }

private roundNumbersToK(updateMessage: number): string {
  return updateMessage >= 1000 ? (Math.floor(updateMessage / 1000) + 'k') : '0';
}

// private roundNumbersToK(updateMessage: number){
//   let roundedNumber = ""
//   if (updateMessage >= 1000) {
//     const modifiedMessage = (Math.floor(updateMessage / 1000)).toString() + "k";
//     roundedNumber =  modifiedMessage;
// }
//   return roundedNumber
// }

}
