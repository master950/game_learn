System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Layers, Node, UITransform, _crd, createUINode, getRandomSeed;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Layers = _cc.Layers;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6807EfyCtCR4hGxHBUsb0j", "index", undefined);

      _export("createUINode", createUINode = (name = '') => {
        const node = new Node(name);
        const transform = node.addComponent(UITransform);
        transform.setAnchorPoint(0, 1);
        node.layer = 1 << Layers.nameToLayer('UI_2D');
        return node;
      });

      _export("getRandomSeed", getRandomSeed = (start, end) => Math.floor(start + (end - start) * Math.random()));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map