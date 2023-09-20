System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, AnimationClip, Component, PlayerStateMachine, PlayerIdle, PlayerTurnLeft, EventManage, ANIM_NAME, DIRECTION, EVENT_NAME, _dec, _class, _temp, _crd, ccclass, property, PlayerAnimController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/scripts/player/animation/playerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerIdle(extras) {
    _reporterNs.report("PlayerIdle", "db://assets/scripts/player/animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerTurnLeft(extras) {
    _reporterNs.report("PlayerTurnLeft", "db://assets/scripts/player/animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManage(extras) {
    _reporterNs.report("EventManage", "db://assets/runtime/eventManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIM_NAME(extras) {
    _reporterNs.report("ANIM_NAME", "db://assets/Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION(extras) {
    _reporterNs.report("DIRECTION", "db://assets/Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_NAME(extras) {
    _reporterNs.report("EVENT_NAME", "db://assets/Enum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PlayerStateMachine = _unresolved_2.PlayerStateMachine;
    }, function (_unresolved_3) {
      PlayerIdle = _unresolved_3.PlayerIdle;
      PlayerTurnLeft = _unresolved_3.PlayerTurnLeft;
    }, function (_unresolved_4) {
      EventManage = _unresolved_4.default;
    }, function (_unresolved_5) {
      ANIM_NAME = _unresolved_5.ANIM_NAME;
      DIRECTION = _unresolved_5.DIRECTION;
      EVENT_NAME = _unresolved_5.EVENT_NAME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96baeScTNxNFJ+Ld0h0Ekrw", "playerAnimController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerAnimController", PlayerAnimController = (_dec = ccclass('PlayerAnimController'), _dec(_class = (_temp = class PlayerAnimController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateMachine", void 0);

          _defineProperty(this, "playerIdle", void 0);

          _defineProperty(this, "playerTurnLeft", void 0);

          _defineProperty(this, "animComp", void 0);
        }

        onLoad() {
          this.stateMachine = new (_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine)();
          this.playerIdle = new (_crd && PlayerIdle === void 0 ? (_reportPossibleCrUseOfPlayerIdle({
            error: Error()
          }), PlayerIdle) : PlayerIdle)(this.stateMachine, this, 'texture/player/idle/top', AnimationClip.WrapMode.Loop, 'idle');
          this.playerTurnLeft = new (_crd && PlayerTurnLeft === void 0 ? (_reportPossibleCrUseOfPlayerTurnLeft({
            error: Error()
          }), PlayerTurnLeft) : PlayerTurnLeft)(this.stateMachine, this, 'texture/player/turnleft/top', AnimationClip.WrapMode.Normal, 'turnleft');
          this.animComp = this.node.getComponent(Animation);
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.on((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).PLAYERANIM, this.playAnim, this);
        }

        playAnim(type) {
          switch (type) {
            case (_crd && ANIM_NAME === void 0 ? (_reportPossibleCrUseOfANIM_NAME({
              error: Error()
            }), ANIM_NAME) : ANIM_NAME).IDLE:
              this.idle();
              break;

            case (_crd && ANIM_NAME === void 0 ? (_reportPossibleCrUseOfANIM_NAME({
              error: Error()
            }), ANIM_NAME) : ANIM_NAME).TURNLEFT:
              this.turnLeft();
              break;
          }
        }

        idle(dir = (_crd && DIRECTION === void 0 ? (_reportPossibleCrUseOfDIRECTION({
          error: Error()
        }), DIRECTION) : DIRECTION).TOP) {
          this.playerIdle.direction = dir;
        }

        turnLeft() {
          this.stateMachine.changeState(this.playerTurnLeft);
        }

        start() {
          this.stateMachine.initialize(this.playerIdle);
        }

        update(dt) {
          this.stateMachine.currState.update();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerAnimController.js.map