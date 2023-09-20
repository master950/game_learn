import { _decorator, Component, Animation, Sprite, UITransform } from 'cc';
import { TILE_HEIGHT, TILE_WIDTH } from 'db://assets/scripts/tile/tile';
import { DIRECTION, EVENT_NAME, INPUT_ENUM } from 'db://assets/Enum';
import EventManage from 'db://assets/runtime/eventManage';
import { PlayerAnimController } from 'db://assets/scripts/player/animation/playerAnimController';
const { ccclass, property } = _decorator;

@ccclass('PlayerManage')
export class PlayerManage extends Component {

  x: number = 0;
  y: number = 0;
  disX: number = 0;
  disY: number = 0;
  private readonly speed = 1 / 10;

  protected update(dt: number): void {
      this.updateXY();
      this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
  }

  init(){
    this.renderFunc();
    EventManage.Instance.on(EVENT_NAME.PLAYERCTRL, this.move, this);
  }

  updateXY(){
    if(this.x > this.disX){
      this.x -= this.speed;
    }else if(this.x < this.disX){
      this.x += this.speed;
    }else if(this.y > this.disY){
      this.y -= this.speed;
    }else if(this.y < this.disY){
      this.y += this.speed;
    }

    if(Math.abs(this.x - this.disX) <= 0.1 && Math.abs(this.y - this.disY) <= 0.1){
      this.x = this.disX;
      this.y = this.disY;
    }
  }

  move(playerDiret: INPUT_ENUM){
    if(playerDiret === INPUT_ENUM.TOP){
      this.disY += 1;
    }else if(playerDiret === INPUT_ENUM.BOTTOM){
      this.disY -= 1;
    }else if(playerDiret === INPUT_ENUM.LEFT){
      this.disX -= 1;
    }else if(playerDiret === INPUT_ENUM.RIGHT){
      this.disX += 1;
    }
  }

  renderFunc(){
    const sprite = this.node.addComponent(Sprite);
    sprite.sizeMode = Sprite.SizeMode.CUSTOM;

    const uiTransform = this.node.getComponent(UITransform);
    uiTransform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

    this.node.addComponent(Animation)
    this.node.addComponent(PlayerAnimController);
  }
}
