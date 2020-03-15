import * as tslib_1 from "tslib";
import { ImageTexture2D } from "@awayjs/materials";
import { Texture2DBase } from "./Texture2DBase";
var BitmapTexture = (function (_super) {
    tslib_1.__extends(BitmapTexture, _super);
    function BitmapTexture(bitmapData, generateMipmaps) {
        if (generateMipmaps === void 0) { generateMipmaps = true; }
        var _this = _super.call(this, new ImageTexture2D(bitmapData.adaptee)) || this;
        _this._bitmapData = bitmapData;
        if (_this._bitmapData)
            _this._bitmapData._addOwner(_this);
        return _this;
    }
    Object.defineProperty(BitmapTexture.prototype, "bitmapData", {
        get: function () {
            return this._bitmapData;
        },
        set: function (value) {
            if (this._bitmapData == value)
                return;
            if (this._bitmapData)
                this._bitmapData._removeOwner(this);
            this._bitmapData = value;
            if (this._bitmapData)
                this._bitmapData._addOwner(this);
            this.adaptee.image = value.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    return BitmapTexture;
}(Texture2DBase));
export { BitmapTexture };
