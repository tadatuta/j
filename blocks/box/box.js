modules.define('box', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock('box', {
        _onClick: function() {
            this.toggleMod('closed', 'yes');
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._domEvents().on('click', this.prototype._onClick);
        }
    }));

});
