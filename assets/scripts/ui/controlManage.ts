
import { _decorator, Component, Event, Node } from 'cc';
import EventManage from 'db://assets/runtime/eventManage';
import { ANIM_NAME, EVENT_NAME, INPUT_ENUM } from 'db://assets/Enum/index';
const { ccclass, property } = _decorator;

@ccclass('control')
export class control extends Component {

    handleClick(evt: Event, type: string){
        EventManage.Instance.emit(EVENT_NAME.PLAYERCTRL, type as INPUT_ENUM);
    }

    handleAnim(evt: Event, type: string){
        EventManage.Instance.emit(EVENT_NAME.PLAYERANIM, type as ANIM_NAME);
    }
}
