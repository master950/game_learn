System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Tile, createUINode, getRandomSeed, DataManage, ResourceManage, _dec, _class, _crd, ccclass, property, tileManage;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTile(extras) {
    _reporterNs.report("Tile", "db://assets/scripts/tile/tile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/utils/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRandomSeed(extras) {
    _reporterNs.report("getRandomSeed", "db://assets/utils/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManage(extras) {
    _reporterNs.report("DataManage", "db://assets/runtime/dataManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceManage(extras) {
    _reporterNs.report("ResourceManage", "../../runtime/resourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Tile = _unresolved_2.Tile;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
      getRandomSeed = _unresolved_3.getRandomSeed;
    }, function (_unresolved_4) {
      DataManage = _unresolved_4.default;
    }, function (_unresolved_5) {
      ResourceManage = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f248ciunilNaa46jqVkQA0+", "tileManage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tileManage", tileManage = (_dec = ccclass('tileManage'), _dec(_class = class tileManage extends Component {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var {
              mapInfo
            } = (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
              error: Error()
            }), DataManage) : DataManage).Instance; // 加载资源目录所有精灵图片

            var spriteAssets = yield (_crd && ResourceManage === void 0 ? (_reportPossibleCrUseOfResourceManage({
              error: Error()
            }), ResourceManage) : ResourceManage).Instance.loadRes('texture/tile/tile');

            for (var i = 0; i < mapInfo.length; i++) {
              var column = mapInfo[i];

              var _loop = function _loop(j) {
                var item = column[j];

                if (item.src === null || item.type === null) {
                  return "continue";
                }

                var src = item.src;

                if ((src === 1 || src === 5 || src === 9) && i % 2 === 0 && j % 2 === 0) {
                  src += (_crd && getRandomSeed === void 0 ? (_reportPossibleCrUseOfgetRandomSeed({
                    error: Error()
                  }), getRandomSeed) : getRandomSeed)(0, 4);
                }

                var imgSrc = "tile (" + src + ")";
                var spriteFrame = spriteAssets.find(v => v.name === imgSrc);
                var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                  error: Error()
                }), createUINode) : createUINode)();
                var tile = node.addComponent(_crd && Tile === void 0 ? (_reportPossibleCrUseOfTile({
                  error: Error()
                }), Tile) : Tile);
                tile.init(spriteFrame, i, j);
                node.setParent(_this.node);
              };

              for (var j = 0; j < column.length; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
              }
            }
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tileManage.js.map