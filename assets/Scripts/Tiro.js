cc.Class({
    extends: cc.Component,

    properties: {
        _movimentacao : cc.Component,
    },
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        this._movimentacao = this.getComponent("Movimentacao");
    },
    update : function(){
        this._movimentacao.andarPraFrente();  
    },
    onCollisionEnter:function(outro){
        outro.node.emit("SofrerDano");
        this.node.destroy();
    }

});
