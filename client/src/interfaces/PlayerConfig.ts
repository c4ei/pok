import TextConfig from "../interfaces/TextConfig";
import CardsConfig from "../interfaces/CardsConfig";
import SpriteConfig from "../interfaces/SpriteConfig";
import BetConfig from "../interfaces/BetConfig";

export default interface PlayerConfig {
    x: number,
    y: number,
    id: string,
    sit: number,
    position: string,
    sprite: SpriteConfig,
    nickname: TextConfig,
    money: TextConfig,
    bet: BetConfig
    cards: SpriteConfig[],
    cardsAnimPositions: {
        animStartPosition: {x: number, y:number }[],
        animEndPosition: {x: number, y:number }[],        
    }
    // cards: CardsConfig,
  }


