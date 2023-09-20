System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, tileManage, createUINode, levels, DataManage, TILE_HEIGHT, TILE_WIDTH, EventManage, EVENT_NAME, PlayerManage, _dec, _class, _temp, _crd, ccclass, property, batleManage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOftileManage(extras) {
    _reporterNs.report("tileManage", "db://assets/scripts/tile/tileManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/utils/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "db://assets/levels/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "db://assets/levels/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManage(extras) {
    _reporterNs.report("DataManage", "db://assets/runtime/dataManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../tile/tile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../tile/tile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManage(extras) {
    _reporterNs.report("EventManage", "db://assets/runtime/eventManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_NAME(extras) {
    _reporterNs.report("EVENT_NAME", "db://assets/Enum/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManage(extras) {
    _reporterNs.report("PlayerManage", "../player/playerManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      tileManage = _unresolved_2.tileManage;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
    }, function (_unresolved_4) {
      levels = _unresolved_4.default;
    }, function (_unresolved_5) {
      DataManage = _unresolved_5.default;
    }, function (_unresolved_6) {
      TILE_HEIGHT = _unresolved_6.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_6.TILE_WIDTH;
    }, function (_unresolved_7) {
      EventManage = _unresolved_7.default;
    }, function (_unresolved_8) {
      EVENT_NAME = _unresolved_8.EVENT_NAME;
    }, function (_unresolved_9) {
      PlayerManage = _unresolved_9.PlayerManage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32ccck7AThF2YF0Szxe2S1Y", "batleManage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("batleManage", batleManage = (_dec = ccclass('batleManage'), _dec(_class = (_temp = class batleManage extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "level", void 0);

          _defineProperty(this, "stage", void 0);
        }

        start() {
          this.generateStage();
          this.initLevel();
          this.generatePlayer();
        }

        onLoad() {
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.on((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).NEXT_LEVEL, this.nextLevel, this);
        }

        onDestroy() {
          (_crd && EventManage === void 0 ? (_reportPossibleCrUseOfEventManage({
            error: Error()
          }), EventManage) : EventManage).Instance.off((_crd && EVENT_NAME === void 0 ? (_reportPossibleCrUseOfEVENT_NAME({
            error: Error()
          }), EVENT_NAME) : EVENT_NAME).NEXT_LEVEL, this.nextLevel);
        } // 下一关事件


        nextLevel() {
          (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
            error: Error()
          }), DataManage) : DataManage).Instance.levelIndex++;
          this.initLevel();
        }

        initLevel() {
          const level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${(_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
            error: Error()
          }), DataManage) : DataManage).Instance.levelIndex}`];

          if (level) {
            this.level = level;
            (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
              error: Error()
            }), DataManage) : DataManage).Instance.mapInfo = this.level.mapInfo;
            (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
              error: Error()
            }), DataManage) : DataManage).Instance.mapColumnCount = this.level.mapInfo[0].length;
            (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
              error: Error()
            }), DataManage) : DataManage).Instance.mapRowCount = this.level.mapInfo.length;
          }

          this.generateTileMap();
        } // 清除关卡信息


        clearLevel() {
          // 清除舞台渲染的所有子元素
          this.stage.destroyAllChildren(); // 清除上一关的关卡数据

          (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
            error: Error()
          }), DataManage) : DataManage).Instance.reset();
        }

        generateStage() {
          this.stage = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          this.stage.setParent(this.node);
        }

        generateTileMap() {
          // 创建TileMap
          const tileMap = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          tileMap.setParent(this.stage);
          const manage = tileMap.addComponent(_crd && tileManage === void 0 ? (_reportPossibleCrUseOftileManage({
            error: Error()
          }), tileManage) : tileManage);
          manage.init();
          this.adaptPosition();
        }

        generatePlayer() {
          const player = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          player.setParent(this.stage);
          const playerManage = player.addComponent(_crd && PlayerManage === void 0 ? (_reportPossibleCrUseOfPlayerManage({
            error: Error()
          }), PlayerManage) : PlayerManage);
          playerManage.init();
        } // 将地图往左上偏移地图一半的长度


        adaptPosition() {
          const {
            mapColumnCount,
            mapRowCount
          } = (_crd && DataManage === void 0 ? (_reportPossibleCrUseOfDataManage({
            error: Error()
          }), DataManage) : DataManage).Instance;
          const disX = mapRowCount / 2 * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH);
          const disY = mapColumnCount / 2 * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + 88;
          this.stage.setPosition(-disX, disY);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=batleManage.js.map