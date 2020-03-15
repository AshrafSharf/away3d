import * as tslib_1 from "tslib";
import { ColorUtils } from "@awayjs/core";
import { ImageSampler } from "@awayjs/stage";
import { MethodMaterial } from "@awayjs/materials";
import { AssetType } from "../library/assets/AssetType";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
var MaterialBase = (function (_super) {
    tslib_1.__extends(MaterialBase, _super);
    function MaterialBase(color, alpha) {
        if (color === void 0) { color = 0xFFFFFF; }
        if (alpha === void 0) { alpha = 1; }
        var _this = _super.call(this, new MethodMaterial(null, alpha)) || this;
        _this._ambientColor = 0xFFFFFF;
        _this._ambientComponent = [0xFF, 0xFF, 0xFF, 0xFF];
        _this._adaptee.style.sampler = new ImageSampler();
        _this._color = color;
        _this._colorComponent = ColorUtils.float32ColorToARGB(color);
        _this._updateColor();
        return _this;
    }
    Object.defineProperty(MaterialBase.prototype, "assetType", {
        get: function () {
            return AssetType.MATERIAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "repeat", {
        /**
         *
         */
        get: function () {
            return this._adaptee.style.sampler.repeat;
        },
        set: function (value) {
            this._adaptee.style.sampler.repeat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "mipmap", {
        /**
         *
         */
        get: function () {
            return this._adaptee.style.sampler.mipmap;
        },
        set: function (value) {
            this._adaptee.style.sampler.mipmap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "smooth", {
        /**
         *
         */
        get: function () {
            return this._adaptee.style.sampler.smooth;
        },
        set: function (value) {
            this._adaptee.style.sampler.smooth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "specular", {
        get: function () {
            return this._adaptee.specularMethod.strength;
        },
        set: function (value) {
            this._adaptee.specularMethod.strength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "gloss", {
        get: function () {
            return this._adaptee.specularMethod.gloss;
        },
        set: function (value) {
            this._adaptee.specularMethod.gloss = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "ambient", {
        get: function () {
            return this._adaptee.ambientMethod.strength;
        },
        set: function (value) {
            this._adaptee.ambientMethod.strength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "animateUVs", {
        get: function () {
            return this._adaptee.animateUVs;
        },
        set: function (value) {
            this._adaptee.animateUVs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "ambientColor", {
        get: function () {
            return this._ambientColor;
        },
        set: function (value) {
            this._ambientColor = value;
            this._ambientComponent = ColorUtils.float32ColorToARGB(value);
            this._updateColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this._colorComponent = ColorUtils.float32ColorToARGB(value);
            this._updateColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "bothSides", {
        get: function () {
            return this._adaptee.bothSides;
        },
        set: function (value) {
            this._adaptee.bothSides = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "diffuseMethod", {
        /**
         *
         */
        get: function () {
            return this._adaptee.diffuseMethod;
        },
        set: function (value) {
            this._adaptee.diffuseMethod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "lightPicker", {
        /**
         *
         */
        get: function () {
            return this._adaptee.lightPicker;
        },
        set: function (value) {
            this._adaptee.lightPicker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialBase.prototype, "alphaBlending", {
        /**
         *
         */
        get: function () {
            return this._adaptee.alphaBlending;
        },
        set: function (value) {
            this._adaptee.alphaBlending = value;
        },
        enumerable: true,
        configurable: true
    });
    MaterialBase.prototype._updateColor = function () {
        this._adaptee.style.color = ColorUtils.ARGBtoFloat32(0xFF, this._ambientComponent[1] * this._colorComponent[1] / 0xFF, this._ambientComponent[2] * this._colorComponent[2] / 0xFF, this._ambientComponent[3] * this._colorComponent[3] / 0xFF);
    };
    return MaterialBase;
}(NamedAssetBase));
export { MaterialBase };
