import { PlayerState } from 'db://assets/scripts/player/animation/playerState';

export class PlayerStateMachine{

    public currState: PlayerState;

    initialize(_currState: PlayerState){
        this.currState = _currState;
        this.currState.enter();
    }

    changeState(_state: PlayerState){
        this.currState.exit();
        this.currState = _state;
        this.currState.enter();
    }

    get _currState(){
        return this.currState;
    }
}
