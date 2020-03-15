import { ControllerBase as AwayControllerBase } from "@awayjs/scene";
var ControllerBase = (function () {
    function ControllerBase(targetObject) {
        if (targetObject === void 0) { targetObject = null; }
        if (this.assetType == ControllerBase.assetType)
            this._adaptee = new AwayControllerBase(targetObject.adaptee);
    }
    Object.defineProperty(ControllerBase.prototype, "assetType", {
        get: function () {
            return ControllerBase.assetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllerBase.prototype, "targetObject", {
        get: function () {
            return this._adaptee.targetObject.adapter;
        },
        set: function (val) {
            this._adaptee.targetObject = val.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllerBase.prototype, "autoUpdate", {
        get: function () {
            return this._adaptee.autoUpdate;
        },
        set: function (val) {
            this._adaptee.autoUpdate = val;
        },
        enumerable: true,
        configurable: true
    });
    ControllerBase.prototype.update = function (interpolate) {
        if (interpolate === void 0) { interpolate = true; }
        this._adaptee.update(interpolate);
    };
    return ControllerBase;
}());
export { ControllerBase };
ControllerBase.assetType = "[controller ControllerBase]";
