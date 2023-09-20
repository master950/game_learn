System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Animation, Sprite, UITransform, TILE_HEIGHT, TILE_WIDTH, EVENT_NAME, INPUT_ENUM, EventManage, PlayerAnimController, _dec, _class, _temp, _crd, ccclass, property, PlayerManage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/scripts/tile/tile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/scripts/tile/tile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_NAME(extras) {
    _reporterNs.report("EVENT_NAME", "db://assets/Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINPUT_ENUM(extras) {
    _reporterNs.report("INPUT_ENUM", "db://assets/Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManage(extras) {
    _reporterNs.report("EventManage", "db://assets/runtime/eventManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAnimController(extras) {
    _reporterNs.report("PlayerAnimController", "db://assets/scripts/player/animation/playerAnimController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      TILE_HEIGHT = _unresolved_2.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_2.TILE_WIDTH;
    }, function (_unresolved_3) {
      EVENT_NAME = _unresolved_3.EVENT_NAME;
      INPUT_ENUM = _unresolved_3.INPUT_ENUM;
    }, function (_unresolved_4) {
      EventManage = _unresolved_4.default;
    }, function (_unresolved_5) {
      PlayerAnimController = _unresolved_5.PlayerAnimController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "134eauvPh5GUYCPkSRGZpne", "playerManage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerManage", PlayerManage = (_dec = ccclass('PlayerManage'), _dec(_class = (_temp = class PlayerManage extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "disX", 0);

          _defineProperty(this, "disY", 0);

          _defineProperty(this, "speed", 1 / 10);
        }

        update(dt) {
          this.updateXY();
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) - (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 1.5, this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 1.5);
        }

        init() {
          this.renderFunc();
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.on((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).PLAYERCTRL, this.move, this);
        }

        updateXY() {
          if (this.x > this.disX) {
            this.x -= this.speed;
          } else if (this.x < this.disX) {
            this.x += this.speed;
          } else if (this.y > this.disY) {
            this.y -= this.speed;
          } else if (this.y < this.disY) {
            this.y += this.speed;
          }

          if (Math.abs(this.x - this.disX) <= 0.1 && Math.abs(this.y - this.disY) <= 0.1) {
            this.x = this.disX;
            this.y = this.disY;
          }
        }

        move(playerDiret) {
          if (playerDiret === (_crd && INPUT_ENUM === void 0 ? (_reportPossibleCrUseOfINPUT_ENUM({
            error: Error()
          }), INPUT_ENUM) : INPUT_ENUM).TOP) {
            this.disY += 1;
          } else if (playerDiret === (_crd && INPUT_ENUM === void 0 ? (_reportPossibleCrUseOfINPUT_ENUM({
            error: Error()
          }), INPUT_ENUM) : INPUT_ENUM).BOTTOM) {
            this.disY -= 1;
          } else if (playerDiret === (_crd && INPUT_ENUM === void 0 ? (_reportPossibleCrUseOfINPUT_ENUM({
            error: Error()
          }), INPUT_ENUM) : INPUT_ENUM).LEFT) {
            this.disX -= 1;
          } else if (playerDiret === (_crd && INPUT_ENUM === void 0 ? (_reportPossibleCrUseOfINPUT_ENUM({
            error: Error()
          }), INPUT_ENUM) : INPUT_ENUM).RIGHT) {
            this.disX += 1;
          }
        }

        renderFunc() {
          var sprite = this.node.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var uiTransform = this.node.getComponent(UITransform);
          uiTransform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
          this.node.addComponent(Animation);
          this.node.addComponent(_crd && PlayerAnimController === void 0 ? (_reportPossibleCrUseOfPlayerAnimController({
            error: Error()
          }), PlayerAnimController) : PlayerAnimController);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerManage.js.map