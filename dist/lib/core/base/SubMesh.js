var SubMesh = (function () {
    function SubMesh(adaptee) {
        this._adaptee = adaptee;
    }
    Object.defineProperty(SubMesh.prototype, "material", {
        get: function () {
            return this._adaptee.material.adapter;
        },
        set: function (value) {
            this._adaptee.material = value.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    return SubMesh;
}());
export { SubMesh };
