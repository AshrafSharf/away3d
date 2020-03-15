import * as tslib_1 from "tslib";
import { AssetEvent } from "@awayjs/core";
import { Graphics, Shape } from "@awayjs/graphics";
import { SubGeometry } from "./SubGeometry";
import { AssetType } from "../../library/assets/AssetType";
import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
var Geometry = (function (_super) {
    tslib_1.__extends(Geometry, _super);
    function Geometry(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        var _this = _super.call(this, adaptee || new Graphics()) || this;
        _this._subGeometriesDirty = true;
        _this._adaptee.addEventListener(AssetEvent.INVALIDATE, function (event) { return _this.onGraphicsInvalidate(event); });
        return _this;
    }
    Object.defineProperty(Geometry.prototype, "assetType", {
        get: function () {
            return AssetType.GEOMETRY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometry.prototype, "subGeometries", {
        get: function () {
            if (this._subGeometriesDirty)
                this._updateSubGeometries();
            return this._subGeometries;
        },
        enumerable: true,
        configurable: true
    });
    Geometry.prototype.addSubGeometry = function (tSub) {
        var newShape = new Shape(tSub.adaptee);
        var graphics = this._adaptee;
        graphics.addShape(newShape);
        this._subGeometriesDirty = true;
    };
    Geometry.prototype.scaleUV = function (scaleU, scaleV) {
        if (scaleU === void 0) { scaleU = 1; }
        if (scaleV === void 0) { scaleV = 1; }
        this._adaptee.scaleUV(scaleU, scaleV);
    };
    Geometry.prototype.onGraphicsInvalidate = function (event) {
        this._subGeometriesDirty = true;
    };
    Geometry.prototype._updateSubGeometries = function () {
        this._subGeometriesDirty = false;
        this._subGeometries = [];
        var graphics = this._adaptee;
        var len = graphics.count;
        for (var i = 0; i < len; i++) {
            this._subGeometries.push(new SubGeometry(graphics.getShapeAt(i).elements));
        }
    };
    return Geometry;
}(NamedAssetBase));
export { Geometry };
