"use strict";
cc._RF.push(module, '1b807vnoH9LdaCzxB7Kc53C', 'GameOver');
// Scripts/GameOver.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _gameOver: cc.Node,
        _jogador: cc.Componet
    },

    onLoad: function onLoad() {
        cc.director.resume();
        var jogadora = cc.find("Personagens/Personagem");
        this._jogador = jogadora.getComponent("Jogador");
        this._gameOver = cc.find("GameOver");

        var canvas = cc.find("Canvas");
        canvas.on("mousedown", this.jogarNovamente, this);
    },

    jogarNovamente: function jogarNovamente() {
        if (!this._jogador.vivo) {
            cc.director.loadScene("Jogo");
        }
    },

    update: function update(dt) {
        if (!this._jogador.vivo) {
            cc.director.pause();
            this._gameOver.active = true;
        }
    }
});

cc._RF.pop();