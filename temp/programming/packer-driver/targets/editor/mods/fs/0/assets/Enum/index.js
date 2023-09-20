System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM, EVENT_NAME, INPUT_ENUM, ANIM_NAME, DIRECTION;

  _export({
    TILE_TYPE_ENUM: void 0,
    EVENT_NAME: void 0,
    INPUT_ENUM: void 0,
    ANIM_NAME: void 0,
    DIRECTION: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af1d7R84ZBJS72oLl1UPRRm", "index", undefined);

      (function (TILE_TYPE_ENUM) {
        TILE_TYPE_ENUM["WALL_ROW"] = "WALL_ROW";
        TILE_TYPE_ENUM["WALL_COLUMN"] = "WALL_COLUMN";
        TILE_TYPE_ENUM["WALL_LEFT_TOP"] = "WALL_LEFT_TOP";
        TILE_TYPE_ENUM["WALL_LEFT_BOTTOM"] = "WALL_LEFT_BOTTOM";
        TILE_TYPE_ENUM["WALL_RIGHT_TOP"] = "WALL_RIGHT_TOP";
        TILE_TYPE_ENUM["WALL_RIGHT_BOTTOM"] = "WALL_RIGHT_BOTTOM";
        TILE_TYPE_ENUM["CLIFF_RIGHT"] = "CLIFF_RIGHT";
        TILE_TYPE_ENUM["CLIFF_CENTER"] = "CLIFF_CENTER";
        TILE_TYPE_ENUM["CLIFF_LEFT"] = "CLIFF_LEFT";
        TILE_TYPE_ENUM["FLOOR"] = "FLOOR";
      })(TILE_TYPE_ENUM || _export("TILE_TYPE_ENUM", TILE_TYPE_ENUM = {}));

      (function (EVENT_NAME) {
        EVENT_NAME["NEXT_LEVEL"] = "NEXT_LEVEL";
        EVENT_NAME["PLAYERCTRL"] = "PLAYERCTRL";
        EVENT_NAME["PLAYERANIM"] = "PLAYERANIM";
      })(EVENT_NAME || _export("EVENT_NAME", EVENT_NAME = {}));

      (function (INPUT_ENUM) {
        INPUT_ENUM["LEFT"] = "LEFT";
        INPUT_ENUM["RIGHT"] = "RIGHT";
        INPUT_ENUM["TOP"] = "TOP";
        INPUT_ENUM["BOTTOM"] = "BOTTOM";
        INPUT_ENUM["TURNLEFT"] = "TURNLEFT";
        INPUT_ENUM["TURNRIGHT"] = "TURNRIGHT";
      })(INPUT_ENUM || _export("INPUT_ENUM", INPUT_ENUM = {}));

      (function (ANIM_NAME) {
        ANIM_NAME["IDLE"] = "IDLE";
        ANIM_NAME["TURNLEFT"] = "TURNLEFT";
      })(ANIM_NAME || _export("ANIM_NAME", ANIM_NAME = {}));

      (function (DIRECTION) {
        DIRECTION["TOP"] = "TOP";
        DIRECTION["BOTTOM"] = "BOTTOM";
        DIRECTION["LEFT"] = "LEFT";
        DIRECTION["RIGHT"] = "RIGHT";
      })(DIRECTION || _export("DIRECTION", DIRECTION = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map