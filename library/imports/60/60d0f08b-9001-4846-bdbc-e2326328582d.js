"use strict";
cc._RF.push(module, '60d0fCLkAFIRr284jJjKFgt', 'GeradorDeInimigos');
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