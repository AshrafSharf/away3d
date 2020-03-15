import * as tslib_1 from "tslib";
import { ObjectContainer3D } from './ObjectContainer3D';
var Scene3D = (function (_super) {
    tslib_1.__extends(Scene3D, _super);
    function Scene3D(renderer, adaptee) {
        return _super.call(this, adaptee) || this;
    }
    Scene3D.prototype.addChild = function (child) {
        this._adaptee.addChild(child.adaptee);
        return child;
    };
    Scene3D.prototype.removeChild = function (child) {
        this._adaptee.removeChild(child.adaptee);
    };
    return Scene3D;
}(ObjectContainer3D));
export { Scene3D };
