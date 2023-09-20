System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, EventManage, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      _cclegacy._RF.push({}, "522979BOelBR6AHsOkUbwDa", "eventManage", undefined);

      _export("default", EventManage = class EventManage extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "eventDict", new Map());
        }

        static get Instance() {
          return super.getInstance();
        }

        on(eventName, func, ctx) {
          if (this.eventDict.has(eventName)) {
            this.eventDict.get(eventName).push({
              func,
              ctx
            });
          } else {
            this.eventDict.set(eventName, [{
              func,
              ctx
            }]);
          }
        }

        off(eventName, func) {
          if (this.eventDict.has(eventName)) {
            var index = this.eventDict.get(eventName).findIndex(i => i.func != func);
            index > -1 && this.eventDict.get(eventName).splice(index, 1);
          }
        }

        emit(eventName) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          if (this.eventDict.has(eventName)) {
            this.eventDict.get(eventName).forEach((_ref) => {
              var {
                func,
                ctx
              } = _ref;
              if (ctx) func.apply(ctx, params);else func(...params);
            });
          } else {
            console.info("don't have the " + eventName + " event");
          }
        }

        clear() {
          this.eventDict.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eventManage.js.map