System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationClip, Animation, animation, Sprite, ResourceManage, PlayerState, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerAnimController(extras) {
    _reporterNs.report("PlayerAnimController", "db://assets/scripts/player/animation/playerAnimController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceManage(extras) {
    _reporterNs.report("ResourceManage", "db://assets/runtime/resourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/scripts/player/animation/playerStateMachine", _context.meta, extras);
  }

  _export("PlayerState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
      Animation = _cc.Animation;
      animation = _cc.animation;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ResourceManage = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "296e9Z/pF9ASo7tdmP/JLJA", "playerState", undefined);

      _export("PlayerState", PlayerState = class PlayerState {
        constructor(_stateMachine, _animManage, _anim, _mode = AnimationClip.WrapMode.Normal, _animName = '') {
          _defineProperty(this, "stateMachine", void 0);

          _defineProperty(this, "animationManage", void 0);

          _defineProperty(this, "animMode", void 0);

          _defineProperty(this, "animClip", void 0);

          _defineProperty(this, "whiteList", ['turnleft']);

          _defineProperty(this, "_animName", void 0);

          _defineProperty(this, "_animPath", void 0);

          _defineProperty(this, "FRAME_TIME", 1 / 10);

          this.stateMachine = _stateMachine;
          this.animationManage = _animManage;
          this._animPath = _anim;
          this.animMode = _mode;
          this._animName = _animName;
        }

        get animName() {
          return this._animName;
        }

        set animName(name) {
          this._animName = name;
        }

        get animPath() {
          return this._animPath;
        }

        set animPath(path) {
          this._animPath = path;
        }

        async createAnimClip() {
          const spriteFrames = await (_crd && ResourceManage === void 0 ? (_reportPossibleCrUseOfResourceManage({
            error: Error()
          }), ResourceManage) : ResourceManage).Instance.loadRes(this.animPath);
          return new Promise((resolve, reject) => {
            this.animClip = new AnimationClip(this.animName);
            const frams = spriteFrames.map((item, index) => [this.FRAME_TIME * index, item]);
            const track = new animation.ObjectTrack();
            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame');
            track.channel.curve.assignSorted(frams); // 最后将轨道添加到动画剪辑以应用

            this.animClip.addTrack(track);
            this.animClip.duration = frams.length * this.FRAME_TIME; // 整个动画剪辑的周期

            this.animClip.wrapMode = this.animMode;
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
          });
        }

        enter() {
          if (!this.animClip) {
            this.createAnimClip();
          } else {
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
          }

          this.animationManage.animComp.on(Animation.EventType.FINISHED, () => {
            const name = this.animationManage.animComp.defaultClip.name;
            if (this.whiteList.some(v => v.includes(name))) this.animationManage.idle();
          });
        }

        update() {}

        exit() {
          this.animationManage.animComp.stop();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerState.js.map