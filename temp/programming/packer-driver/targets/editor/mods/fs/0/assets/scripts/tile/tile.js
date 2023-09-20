System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, UITransform, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, Tile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48076SPmr9HmYqnmOHP5sa7", "tile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("Tile", Tile = (_dec = ccclass('Tile'), _dec(_class = class Tile extends Component {
        init(spriteFrame, i, j) {
          const nodeSprite = this.addComponent(Sprite);
          nodeSprite.spriteFrame = spriteFrame;
          const nodeTransform = this.getComponent(UITransform);
          nodeTransform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tile.js.map