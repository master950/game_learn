import { _decorator, Animation, AnimationClip, Component } from 'cc';
import { PlayerStateMachine } from 'db://assets/scripts/player/animation/playerStateMachine';
import { PlayerIdle,PlayerTurnLeft } from 'db://assets/scripts/player/animation';
import EventManage from 'db://assets/runtime/eventManage';
import { ANIM_NAME, DIRECTION, EVENT_NAME } from 'db://assets/Enum';
const { ccclass, property } = _decorator;

@ccclass('PlayerAnimController')
export class PlayerAnimController extends Component {

    public stateMachine: PlayerStateMachine;
    public playerIdle: PlayerIdle;
    public playerTurnLeft: PlayerTurnLeft;
    public animComp: Animation;

    protected onLoad(): void {
        this.stateMachine = new PlayerStateMachine();
        this.playerIdle = new PlayerIdle(this.stateMachine,this,'texture/player/idle/top',AnimationClip.WrapMode.Loop,'idle');
        this.playerTurnLeft = new PlayerTurnLeft(this.stateMachine,this,'texture/player/turnleft/top',AnimationClip.WrapMode.Normal,'turnleft');
        this.animComp = this.node.getComponent<Animation>(Animation);
        EventManage.Instance.on(EVENT_NAME.PLAYERANIM, this.playAnim, this);
    }

    playAnim(type: ANIM_NAME){
        switch(type){
            case ANIM_NAME.IDLE:
                this.idle();
                break;
            case ANIM_NAME.TURNLEFT:
                this.turnLeft();
                break;
        }
    }

    idle(dir: DIRECTION = DIRECTION.TOP){
        this.playerIdle.direction = dir;
     }

    turnLeft(){
        this.stateMachine.changeState(this.playerTurnLeft);
     }

    start () {
        this.stateMachine.initialize(this.playerIdle);
    }

    protected update(dt: number): void {
        this.stateMachine.currState.update();
    }
}
