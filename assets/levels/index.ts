import { TILE_TYPE_ENUM} from 'db://assets/Enum';
import level1 from 'db://assets/levels/level1'
import level2 from 'db://assets/levels/level2'

// 图块
export interface Itile {
    src: number
    type: TILE_TYPE_ENUM | null
}
// 地图配置数据
export interface ILevel{
    mapInfo: Array<Array<Itile>>
}

const levels: Record<string,ILevel> = {
    level1,
    level2
}

export default levels;
