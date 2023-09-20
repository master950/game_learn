System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Singleton", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "364b2CNSi9Jr618L8qmpuAV", "base", undefined);

      _export("Singleton", Singleton = class Singleton {
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }

          return this._instance;
        }

      });

      _defineProperty(Singleton, "_instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=base.js.map