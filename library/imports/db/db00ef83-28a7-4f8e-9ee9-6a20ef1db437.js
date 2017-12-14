"use strict";
cc._RF.push(module, 'db00e+DKKdPjp7paiDvHbQ3', 'Inimigo');
// Scripts/Inimigo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        _movimentacao: cc.Component,
        _controleAnimacao: cc.Component,
        _gameOver: cc.Node,
        distanciaAtaque: cc.Float

    },

    onLoad: function onLoad() {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this._gameOver = cc.find("GameOver");
        this.alvo = cc.find("Personagens/Personagem");
        this.node.on("SofrerDano", this.morrer, this);
    },

    update: function update(dt) {
        var direcao = this.alvo.position.sub(this.node.position);
        var distancia = direcao.mag();
        this._controleAnimacao.mudaAnimacao(direcao, "Andar");
        this._movimentacao.setDirecao(direcao);
        this._movimentacao.andarPraFrente();

        if (distancia < this.distanciaAtaque) {
            this.alvo.emit("SofreDano");
        }
    },

    morrer: function morrer() {
        var eventoMorte = new cc.Event.EventCustom("ZumbiMorreu", true);
        this.node.dispatchEvent(eventoMorte);
        this.node.destroy();
    }

});

cc._RF.pop();