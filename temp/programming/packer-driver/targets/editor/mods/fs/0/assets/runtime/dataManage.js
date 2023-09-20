System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManage, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItile(extras) {
    _reporterNs.report("Itile", "db://assets/levels/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "db://assets/base/base", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24a4cKgro5CZIWwRhW7eK44", "dataManage", undefined);

      _export("default", DataManage = class DataManage extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "mapInfo", void 0);

          _defineProperty(this, "mapColumnCount", 0);

          _defineProperty(this, "mapRowCount", 0);

          _defineProperty(this, "levelIndex", 1);
        }

        static get Instance() {
          return super.getInstance();
        }

        reset() {
          this.mapInfo = [];
          this.mapColumnCount = 0;
          this.mapRowCount = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dataManage.js.map