System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PlayerState, DIRECTION, _dec, _class, _temp, _crd, ccclass, property, PlayerIdle;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerAnimController(extras) {
    _reporterNs.report("PlayerAnimController", "db://assets/scripts/player/animation/playerAnimController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerState(extras) {
    _reporterNs.report("PlayerState", "db://assets/scripts/player/animation/playerState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/scripts/player/animation/playerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION(extras) {
    _reporterNs.report("DIRECTION", "db://assets/Enum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PlayerState = _unresolved_2.PlayerState;
    }, function (_unresolved_3) {
      DIRECTION = _unresolved_3.DIRECTION;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcb365HDp9BmbBkbzgnkA0b", "playerIdle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerIdle", PlayerIdle = (_dec = ccclass('PlayerIdle'), _dec(_class = (_temp = class PlayerIdle extends (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
        error: Error()
      }), PlayerState) : PlayerState) {
        constructor(stateMachine, animManage, anim, mode, name, _dir) {
          super(stateMachine, animManage, anim, mode, name);

          _defineProperty(this, "_pathMap", void 0);

          _defineProperty(this, "stateMap", void 0);

          _defineProperty(this, "_direction", (_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
            error: Error()
          }), DIRECTION) : DIRECTION).TOP);

          this._direction = _dir;
          this._pathMap = new Map();

          this._pathMap.set((_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
            error: Error()
          }), DIRECTION) : DIRECTION).TOP, 'texture/player/idle/top');

          this._pathMap.set((_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
            error: Error()
          }), DIRECTION) : DIRECTION).BOTTOM, 'texture/player/idle/bottom');

          this._pathMap.set((_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
            error: Error()
          }), DIRECTION) : DIRECTION).LEFT, 'texture/player/idle/left');

          this._pathMap.set((_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
            error: Error()
          }), DIRECTION) : DIRECTION).RIGHT, 'texture/player/idle/right');

          this.stateMap = new Map();
        }

        get pathMap() {
          return this._pathMap;
        }

        get direction() {
          return this._direction;
        }

        set direction(dir) {
          this._direction = dir;

          if (this.stateMap.has(dir)) {
            this.animClip = this.stateMap.get(dir);
            this.animationManage.animComp.defaultClip = this.animClip;
            this.animationManage.animComp.play();
          } else {
            this.animPath = this.pathMap.get(dir);
            this.createAnimClip().then(() => {
              this.stateMap.set(dir, this.animClip);
            });
          }
        }

        enter() {
          super.enter();
          this.stateMap.set(this.direction, this.animClip);
        }

        update() {
          super.update();
        }

        exit() {
          super.exit();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerIdle.js.map