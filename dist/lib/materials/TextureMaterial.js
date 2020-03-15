import * as tslib_1 from "tslib";
import { MaterialBase } from "./MaterialBase";
var TextureMaterial = (function (_super) {
    tslib_1.__extends(TextureMaterial, _super);
    function TextureMaterial(texture, smooth, repeat, mipmap) {
        if (smooth === void 0) { smooth = true; }
        if (repeat === void 0) { repeat = false; }
        if (mipmap === void 0) { mipmap = true; }
        var _this = _super.call(this) || this;
        _this._adaptee.ambientMethod.texture = texture.adaptee;
        _this.smooth = smooth;
        _this.repeat = repeat;
        _this.mipmap = mipmap;
        return _this;
    }
    Object.defineProperty(TextureMaterial.prototype, "texture", {
        /**
         *
         * @returns {Texture2DBase}
         */
        get: function () {
            return this._adaptee.ambientMethod.texture.adapter;
        },
        set: function (value) {
            this._adaptee.ambientMethod.texture = value ? value.adaptee : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextureMaterial.prototype, "blendMode", {
        /**
         *
         */
        get: function () {
            return this._adaptee.blendMode;
        },
        set: function (value) {
            this._adaptee.blendMode = value;
        },
        enumerable: true,
        configurable: true
    });
    return TextureMaterial;
}(MaterialBase));
export { TextureMaterial };
