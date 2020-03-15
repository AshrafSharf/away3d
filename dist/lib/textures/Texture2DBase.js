var Texture2DBase = (function () {
    function Texture2DBase(adaptee) {
        this._adaptee = adaptee;
        this._adaptee.adapter = this;
    }
    Object.defineProperty(Texture2DBase.prototype, "adaptee", {
        get: function () {
            return this._adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Texture2DBase.prototype.dispose = function () {
        this._adaptee.dispose();
        this._adaptee = null;
    };
    return Texture2DBase;
}());
export { Texture2DBase };
