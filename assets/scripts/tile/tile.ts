import { _decorator, Component, SpriteFrame, Sprite, UITransform } from 'cc';
const { ccclass, property } = _decorator;

export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('Tile')
export class Tile extends Component {

    init(spriteFrame: SpriteFrame, i: number, j: number){
        const nodeSprite = this.addComponent(Sprite);
        nodeSprite.spriteFrame = spriteFrame;
        const nodeTransform = this.getComponent(UITransform);
        nodeTransform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
        this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
    }

}
