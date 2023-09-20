System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PlayerState, PlayerStateMachine, PlayerIdle, PlayerTurnLeft, _crd;

  function _reportPossibleCrUseOfPlayerState(extras) {
    _reporterNs.report("PlayerState", "db://assets/scripts/player/animation/playerState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/scripts/player/animation/playerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerIdle(extras) {
    _reporterNs.report("PlayerIdle", "db://assets/scripts/player/animation/playerIdle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerTurnLeft(extras) {
    _reporterNs.report("PlayerTurnLeft", "db://assets/scripts/player/animation/playerTurnLeft", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PlayerState = _unresolved_2.PlayerState;
    }, function (_unresolved_3) {
      PlayerStateMachine = _unresolved_3.PlayerStateMachine;
    }, function (_unresolved_4) {
      PlayerIdle = _unresolved_4.PlayerIdle;
    }, function (_unresolved_5) {
      PlayerTurnLeft = _unresolved_5.PlayerTurnLeft;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8736yMn+xGeI3TIxWUk98E", "index", undefined);

      _export("PlayerState", PlayerState);

      _export("PlayerStateMachine", PlayerStateMachine);

      _export("PlayerIdle", PlayerIdle);

      _export("PlayerTurnLeft", PlayerTurnLeft);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map