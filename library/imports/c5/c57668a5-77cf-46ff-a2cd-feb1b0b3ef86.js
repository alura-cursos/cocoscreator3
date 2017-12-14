"use strict";
cc._RF.push(module, 'c5766ild89G/6LN/rGws++G', 'Tiro');
// Scripts/Tiro.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _movimentacao: cc.Component
    },
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this._movimentacao = this.getComponent("Movimentacao");
    },
    update: function update() {
        this._movimentacao.andarPraFrente();
    },
    onCollisionEnter: function onCollisionEnter(outro) {
        if (outro.node.group == "inimigo") {

            outro.node.destroy();
        }
        this.node.destroy();
    }

});

cc._RF.pop();