System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EventManage, EVENT_NAME, _dec, _class, _crd, ccclass, property, control;

  function _reportPossibleCrUseOfEventManage(extras) {
    _reporterNs.report("EventManage", "db://assets/runtime/eventManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIM_NAME(extras) {
    _reporterNs.report("ANIM_NAME", "db://assets/Enum/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_NAME(extras) {
    _reporterNs.report("EVENT_NAME", "db://assets/Enum/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINPUT_ENUM(extras) {
    _reporterNs.report("INPUT_ENUM", "db://assets/Enum/index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventManage = _unresolved_2.default;
    }, function (_unresolved_3) {
      EVENT_NAME = _unresolved_3.EVENT_NAME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d449agBxEtIkKRdSNv+KWLc", "controlManage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("control", control = (_dec = ccclass('control'), _dec(_class = class control extends Component {
        handleClick(evt, type) {
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.emit((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).PLAYERCTRL, type);
        }

        handleAnim(evt, type) {
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.emit((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).PLAYERANIM, type);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=controlManage.js.map