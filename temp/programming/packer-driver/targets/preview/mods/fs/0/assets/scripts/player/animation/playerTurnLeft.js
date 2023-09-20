System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PlayerState, _dec, _class, _crd, ccclass, property, PlayerTurnLeft;

  function _reportPossibleCrUseOfPlayerAnimController(extras) {
    _reporterNs.report("PlayerAnimController", "db://assets/scripts/player/animation/playerAnimController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerState(extras) {
    _reporterNs.report("PlayerState", "db://assets/scripts/player/animation/playerState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/scripts/player/animation/playerStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PlayerState = _unresolved_2.PlayerState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d82a1fmZVBAO5W4OBjIB6lt", "playerTurnLeft", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerTurnLeft", PlayerTurnLeft = (_dec = ccclass('PlayerTurnLeft'), _dec(_class = class PlayerTurnLeft extends (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
        error: Error()
      }), PlayerState) : PlayerState) {
        constructor(stateMachine, animManage, anim, mode, name) {
          super(stateMachine, animManage, anim, mode, name);
        }

        enter() {
          super.enter();
        }

        update() {
          super.update();
        }

        exit() {
          super.exit();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerTurnLeft.js.map