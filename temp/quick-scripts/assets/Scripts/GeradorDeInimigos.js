(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/GeradorDeInimigos.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '60d0fCLkAFIRr284jJjKFgt', 'GeradorDeInimigos', __filename);
// Scripts/GeradorDeInimigos.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tempoParaGerar: cc.Float,
        inimigoPrefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.schedule(this.gerar, this.tempoParaGerar);
    },
    gerar: function gerar() {
        var zumbi = cc.instantiate(this.inimigoPrefab);
        zumbi.parent = this.node.parent;
        zumbi.position = this.node.position;
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GeradorDeInimigos.js.map
        