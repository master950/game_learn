import { Itile } from 'db://assets/levels/index';
import { Singleton } from 'db://assets/base/base';

export default class DataManage extends Singleton {

    static get Instance() {
        return super.getInstance<DataManage>();
    }

    mapInfo: Array<Array<Itile>>
    mapColumnCount: number = 0
    mapRowCount: number = 0
    levelIndex: number = 1

    reset(){
        this.mapInfo = [];
        this.mapColumnCount = 0;
        this.mapRowCount = 0;
    }
}
