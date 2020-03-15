import * as tslib_1 from "tslib";
import { LookAtController as AwayLookAtController } from "@awayjs/scene";
import { ControllerBase } from "./ControllerBase";
var LookAtController = (function (_super) {
    tslib_1.__extends(LookAtController, _super);
    function LookAtController(targetObject, lookAtObject) {
        if (targetObject === void 0) { targetObject = null; }
        if (lookAtObject === void 0) { lookAtObject = null; }
        var _this = _super.call(this, targetObject) || this;
        if (_this.assetType == LookAtController.assetType)
            _this._adaptee = new AwayLookAtController(targetObject.adaptee, lookAtObject.adaptee);
        return _this;
    }
    Object.defineProperty(LookAtController.prototype, "assetType", {
        get: function () {
            return LookAtController.assetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LookAtController.prototype, "lookAtPosition", {
        get: function () {
            return this._adaptee.lookAtPosition;
        },
        set: function (val) {
            this._adaptee.lookAtPosition = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LookAtController.prototype, "lookAtObject", {
        get: function () {
            return this._adaptee.lookAtObject.adapter;
        },
        set: function (val) {
            this._adaptee.lookAtObject = val.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    return LookAtController;
}(ControllerBase));
export { LookAtController };
LookAtController.assetType = "[controller LookAtController]";
