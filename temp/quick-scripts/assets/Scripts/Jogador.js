(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Jogador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd3299InP/hAoKRk6tw0FpIQ', 'Jogador', __filename);
// Scripts/Jogador.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _direcao: cc.Vec2,
        tiro: cc.Prefab,
        _movimentacao: cc.Component,
        _controleAnimacao: cc.Component,
        _canvas: cc.Canvas,
        _camera: cc.Node,
        vivo: true

    },

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this._canvas = cc.find("Canvas");
        this._canvas.on("mousedown", this.atirar, this);
        this._canvas.on("mousemove", this.mudarDirecaoDaAnimcao, this);
        this._camera = cc.find("Camera");
        this.vivo = true;
    },

    update: function update(deltaTime) {
        this._movimentacao.setDirecao(this._direcao);
        this._movimentacao.andarPraFrente();
    },

    mudarDirecaoDaAnimcao: function mudarDirecaoDaAnimcao(event) {
        var direcao = this.calcularDirecaoMouse(event);
        var estado = void 0;
        if (this._direcao.mag() == 0) {
            estado = "Parado";
        } else {
            estado = "Andar";
        }
        this._controleAnimacao.mudaAnimacao(direcao, estado);
    },

    calcularDirecaoMouse: function calcularDirecaoMouse(event) {
        var posicaoMouse = event.getLocation();
        posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y);
        posicaoMouse = this._canvas.convertToNodeSpaceAR(posicaoMouse);
        var posicaoJogadora = this._camera.convertToNodeSpaceAR(this.node.position);

        var direcao = posicaoMouse.sub(posicaoJogadora);
        return direcao;
    },

    atirar: function atirar(event) {
        var direcao = this.calcularDirecaoMouse(event);
        var disparo = cc.instantiate(this.tiro);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.getComponent("Movimentacao").setDirecao(direcao);
    },

    teclaPressionada: function teclaPressionada(event) {

        if (event.keyCode == cc.KEY.a) {
            this._direcao.x = -1;
        }
        if (event.keyCode == cc.KEY.d) {
            this._direcao.x = 1;
        }

        if (event.keyCode == cc.KEY.w) {
            this._direcao.y = 1;
        }
        if (event.keyCode == cc.KEY.s) {
            this._direcao.y = -1;
        }
    },

    teclaSolta: function teclaSolta(event) {
        if (event.keyCode == cc.KEY.a) {
            this._direcao.x = 0;
        }
        if (event.keyCode == cc.KEY.d) {
            this._direcao.x = 0;
        }

        if (event.keyCode == cc.KEY.w) {
            this._direcao.y = 0;
        }
        if (event.keyCode == cc.KEY.s) {
            this._direcao.y = 0;
        }
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
        //# sourceMappingURL=Jogador.js.map
        