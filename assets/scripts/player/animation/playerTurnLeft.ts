import { _decorator, AnimationClip} from 'cc';
import { PlayerAnimController } from 'db://assets/scripts/player/animation/playerAnimController';
import { PlayerState } from 'db://assets/scripts/player/animation/playerState';
import { PlayerStateMachine } from 'db://assets/scripts/player/animation/playerStateMachine';
const { ccclass, property } = _decorator;

@ccclass('PlayerTurnLeft')
export class PlayerTurnLeft extends PlayerState {

    constructor(stateMachine: PlayerStateMachine, animManage: PlayerAnimController, anim: string, mode: AnimationClip.WrapMode,name: string){
        super(stateMachine,animManage,anim,mode,name);
    }

    enter(): void {
        super.enter();
    }

    update(): void {
        super.update();
    }

    exit(): void {
        super.exit();
    }
}
