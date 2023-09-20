
import { _decorator, Component } from 'cc';
import { Tile } from 'db://assets/scripts/tile/tile';
import { createUINode, getRandomSeed } from 'db://assets/utils/index';
import DataManage from 'db://assets/runtime/dataManage';
import ResourceManage from '../../runtime/resourceManage';
const { ccclass, property } = _decorator;

@ccclass('tileManage')
export class tileManage extends Component {

    async init(){
        const { mapInfo } = DataManage.Instance;
        // 加载资源目录所有精灵图片
        const spriteAssets = await ResourceManage.Instance.loadRes('texture/tile/tile');

        for(let i = 0; i< mapInfo.length; i++){
            const column = mapInfo[i];
            for(let j = 0; j < column.length; j++){
                const item = column[j];
                if(item.src === null || item.type === null){
                    continue;
                }

                let src = item.src;
                if((src === 1 || src === 5 || src === 9) && (i%2 === 0 && j%2 === 0)){
                    src += getRandomSeed(0,4);
                }
                const imgSrc = `tile (${src})`;
                const spriteFrame = spriteAssets.find(v=>v.name === imgSrc);
                const node = createUINode();
                const tile = node.addComponent(Tile);
                tile.init(spriteFrame,i,j);
                node.setParent(this.node);
            }
        }
    }
}
