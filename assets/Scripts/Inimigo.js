cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        dano : cc.Float,
        _movimentacao : cc.Component,
        _controleAnimacao : cc.Component,
        _gameOver : cc.Node,
        distanciaAtaque : cc.Float,
       
    },

    onLoad: function () {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this.audioMorte = this.getComponent(cc.AudioSource);
       
        this.alvo = cc.find("Personagens/Personagem");
        this.node.on("SofrerDano", this.morrer, this);
    },

    update: function (dt) {
        let direcao = this.alvo.position.sub(this.node.position);
        let distancia = direcao.mag();
        this._controleAnimacao.mudaAnimacao(direcao, "Andar");
        this._movimentacao.setDirecao(direcao);
        this._movimentacao.andarPraFrente();
        
        if(distancia < this.distanciaAtaque){
           this.alvo.emit("SofreDano", {dano : this.dano});
        }
    },
    
    morrer : function(){
        let eventoMorte = new cc.Event.EventCustom("ZumbiMorreu", true);
        this.node.dispatchEvent(eventoMorte);
        this.node.destroy();
   
    }
    
    
    
    
    
    
});
