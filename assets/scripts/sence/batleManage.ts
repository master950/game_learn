import { _decorator, Component, Node } from 'cc';
import { tileManage } from 'db://assets/scripts/tile/tileManage';
import { createUINode } from 'db://assets/utils/index';
import levels, { ILevel } from 'db://assets/levels/index';
import DataManage from 'db://assets/runtime/dataManage';
import { TILE_HEIGHT, TILE_WIDTH } from '../tile/tile';
import EventManage from 'db://assets/runtime/eventManage';
import { EVENT_NAME } from 'db://assets/Enum/index';
import { PlayerManage } from '../player/playerManage';
const { ccclass, property } = _decorator;

@ccclass('batleManage')
export class batleManage extends Component {

    // 地图信息
    level: ILevel
    stage: Node

    start () {
        this.generateStage();
        this.initLevel();
        this.generatePlayer();
    }

    protected onLoad(): void {
        EventManage.Instance.on(EVENT_NAME.NEXT_LEVEL, this.nextLevel, this);
    }

    protected onDestroy(): void {
        EventManage.Instance.off(EVENT_NAME.NEXT_LEVEL, this.nextLevel);
    }

    // 下一关事件
    nextLevel(){
        DataManage.Instance.levelIndex++;
        this.initLevel();
     }

    initLevel(){
        const level = levels[`level${DataManage.Instance.levelIndex}`];

        if(level){
            this.level = level;
            DataManage.Instance.mapInfo = this.level.mapInfo;
            DataManage.Instance.mapColumnCount = this.level.mapInfo[0].length;
            DataManage.Instance.mapRowCount = this.level.mapInfo.length;
        }

        this.generateTileMap();
    }

    // 清除关卡信息
    clearLevel(){
        // 清除舞台渲染的所有子元素
        this.stage.destroyAllChildren();
        // 清除上一关的关卡数据
        DataManage.Instance.reset();
    }

    generateStage(){
        this.stage = createUINode();
        this.stage.setParent(this.node);
    }

    generateTileMap(){
          // 创建TileMap
          const tileMap = createUINode();
          tileMap.setParent(this.stage);
          const manage = tileMap.addComponent(tileManage);
          manage.init();

          this.adaptPosition();
    }

    generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playerManage = player.addComponent(PlayerManage);
        playerManage.init();
    }

    // 将地图往左上偏移地图一半的长度
    adaptPosition(){
        const {mapColumnCount,mapRowCount} = DataManage.Instance;
        const disX = mapRowCount / 2 * TILE_WIDTH;
        const disY = mapColumnCount / 2 * TILE_HEIGHT + 88;
        this.stage.setPosition(-disX,disY);
    }

}
