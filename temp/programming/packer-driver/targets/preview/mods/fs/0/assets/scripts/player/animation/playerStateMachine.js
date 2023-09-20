System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PlayerStateMachine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerState(extras) {
    _reporterNs.report("PlayerState", "db://assets/scripts/player/animation/playerState", _context.meta, extras);
  }

  _export("PlayerStateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "074c4j7E0ZPI71XmnMGaTC6", "playerStateMachine", undefined);

      _export("PlayerStateMachine", PlayerStateMachine = class PlayerStateMachine {
        constructor() {
          _defineProperty(this, "currState", void 0);
        }

        initialize(_currState) {
          this.currState = _currState;
          this.currState.enter();
        }

        changeState(_state) {
          this.currState.exit();
          this.currState = _state;
          this.currState.enter();
        }

        get _currState() {
          return this.currState;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerStateMachine.js.map