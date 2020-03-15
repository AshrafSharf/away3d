import * as tslib_1 from "tslib";
import { Vector3D } from "@awayjs/core";
import { Billboard, AlignmentMode, OrientationMode } from "@awayjs/scene";
import { Entity } from "./Entity";
var Sprite3D = (function (_super) {
    tslib_1.__extends(Sprite3D, _super);
    function Sprite3D(mat, width, height) {
        var _this = _super.call(this, new Billboard(mat.adaptee)) || this;
        _this._adaptee.orientationMode = OrientationMode.CAMERA_PLANE;
        _this._adaptee.alignmentMode = AlignmentMode.REGISTRATION_POINT;
        _this._adaptee.width = width;
        _this._adaptee.height = height;
        _this._adaptee.registrationPoint = new Vector3D(width / 2, height / 2, 0);
        return _this;
    }
    Object.defineProperty(Sprite3D.prototype, "material", {
        get: function () {
            return (this._adaptee.material ? this._adaptee.material.adapter : null);
        },
        set: function (value) {
            this._adaptee.material = (value ? value.adaptee : null);
        },
        enumerable: true,
        configurable: true
    });
    return Sprite3D;
}(Entity));
export { Sprite3D };
