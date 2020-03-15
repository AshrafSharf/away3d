import * as tslib_1 from "tslib";
import { Camera } from "@awayjs/scene";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
var Camera3D = (function (_super) {
    tslib_1.__extends(Camera3D, _super);
    function Camera3D() {
        return _super.call(this, new Camera()) || this;
    }
    Object.defineProperty(Camera3D.prototype, "lens", {
        get: function () {
            return this._adaptee.projection;
        },
        set: function (value) {
            this._adaptee.projection = value;
        },
        enumerable: true,
        configurable: true
    });
    Camera3D.prototype.project = function (vector3D) {
        return this._adaptee.project(vector3D);
    };
    Camera3D.prototype.unproject = function (nX, nY, sZ, target) {
        return this._adaptee.unproject(nX, nY, sZ, target);
    };
    return Camera3D;
}(ObjectContainer3D));
export { Camera3D };
