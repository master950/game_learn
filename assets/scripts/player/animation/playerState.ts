import { _decorator, AnimationClip, Animation, animation, Sprite, SpriteFrame } from 'cc';
import { PlayerAnimController } from 'db://assets/scripts/player/animation/playerAnimController';
import ResourceManage from 'db://assets/runtime/resourceManage';
import { PlayerStateMachine } from 'db://assets/scripts/player/animation/playerStateMachine';
import { DIRECTION } from 'db://assets/Enum';

export class PlayerState{
    public stateMachine: PlayerStateMachine;
    public animationManage: PlayerAnimController;
    public animMode: AnimationClip.WrapMode;
    public animClip: AnimationClip;
    private whiteList = ['turnleft'];
    private _animName: string;
    private _animPath: string;
    FRAME_TIME = 1/10;

    constructor(_stateMachine: PlayerStateMachine, _animManage: PlayerAnimController, _anim: string, _mode: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal, _animName: string = ''){
        this.stateMachine = _stateMachine;
        this.animationManage = _animManage;
        this._animPath = _anim;
        this.animMode = _mode;
        this._animName = _animName;
    }

    get animName(){return this._animName;}
    set animName(name: string) { this._animName = name }

    get animPath() { return this._animPath; }
    set animPath(path: string) { this._animPath = path; }

    async createAnimClip(){
        const spriteFrames = await ResourceManage.Instance.loadRes(this.animPath);

        return new Promise((resolve, reject)=> {
            this.animClip = new AnimationClip(this.animName);
            const frams: Array<[number,SpriteFrame]> = spriteFrames.map((item,index)=>[this.FRAME_TIME * index, item])
            const track  = new animation.ObjectTrack();
            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame');
            track.channel.curve.assignSorted(frams);

            // 最后将轨道添加到动画剪辑以应用
            this.animClip.addTrack(track);
            this.animClip.duration = frams.length * this.FRAME_TIME; // 整个动画剪辑的周期
            this.animClip.wrapMode = this.animMode;
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
        })
    }

    enter(){
        if(!this.animClip) { this.createAnimClip(); }
        else {
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
        }
        this.animationManage.animComp.on(Animation.EventType.FINISHED, ()=>{
            const name = this.animationManage.animComp.defaultClip.name;
            if(this.whiteList.some(v=> v.includes(name))) this.animationManage.idle();
        })
    }

    update(){

    }

    exit(){
        this.animationManage.animComp.stop();
    }

}
