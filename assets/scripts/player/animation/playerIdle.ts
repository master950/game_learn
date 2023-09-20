import { _decorator, AnimationClip} from 'cc';
import { PlayerAnimController } from 'db://assets/scripts/player/animation/playerAnimController';
import { PlayerState } from 'db://assets/scripts/player/animation/playerState';
import { PlayerStateMachine } from 'db://assets/scripts/player/animation/playerStateMachine';
import { DIRECTION } from 'db://assets/Enum';
const { ccclass, property } = _decorator;

@ccclass('PlayerIdle')
export class PlayerIdle extends PlayerState {
    private _pathMap: Map<DIRECTION, string>;
    private stateMap: Map<DIRECTION,AnimationClip>;
    private _direction: DIRECTION = DIRECTION.TOP;

    constructor(stateMachine: PlayerStateMachine, animManage: PlayerAnimController, anim: string, mode: AnimationClip.WrapMode,name: string, _dir?: DIRECTION){
        super(stateMachine,animManage,anim,mode,name);
        this._direction = _dir;
        this._pathMap = new Map();
        this._pathMap.set(DIRECTION.TOP,'texture/player/idle/top');
        this._pathMap.set(DIRECTION.BOTTOM,'texture/player/idle/bottom');
        this._pathMap.set(DIRECTION.LEFT,'texture/player/idle/left');
        this._pathMap.set(DIRECTION.RIGHT,'texture/player/idle/right');
        this.stateMap = new Map<DIRECTION,AnimationClip>();
    }

    get pathMap(){ return this._pathMap; }

    get direction(){ return this._direction; }

    set direction(dir: DIRECTION){
        this._direction = dir;
        if(this.stateMap.has(dir)){
            this.animClip = this.stateMap.get(dir);
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
        }else {
            this.animPath = this.pathMap.get(dir);
            this.createAnimClip().then(()=>{
                this.stateMap.set(dir, this.animClip);
            });
        }
    }

    enter(): void {
        super.enter();
        this.stateMap.set(this.direction, this.animClip);
    }

    update(): void {
        super.update();
    }

    exit(): void {
        super.exit();
    }
}
