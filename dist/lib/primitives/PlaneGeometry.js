import * as tslib_1 from "tslib";
import { PrimitivePlanePrefab } from "@awayjs/scene";
import { PrimitiveBase } from "./PrimitiveBase";
var PlaneGeometry = (function (_super) {
    tslib_1.__extends(PlaneGeometry, _super);
    function PlaneGeometry(prefabWidth, height, segmentsW, segmentsH, yUp, doubleSided) {
        if (prefabWidth === void 0) { prefabWidth = 100; }
        if (height === void 0) { height = 100; }
        if (segmentsW === void 0) { segmentsW = 1; }
        if (segmentsH === void 0) { segmentsH = 1; }
        if (yUp === void 0) { yUp = true; }
        if (doubleSided === void 0) { doubleSided = false; }
        return _super.call(this, (prefabWidth instanceof PrimitivePlanePrefab) ? prefabWidth : new PrimitivePlanePrefab(null, "triangle", prefabWidth, height, segmentsW, segmentsH, yUp, doubleSided)) || this;
    }
    Object.defineProperty(PlaneGeometry.prototype, "height", {
        /**
         *
         */
        get: function () {
            return this._prefab.height;
        },
        set: function (value) {
            this._prefab.height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaneGeometry.prototype, "width", {
        /**
         *
         */
        get: function () {
            return this._prefab.width;
        },
        set: function (value) {
            this._prefab.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaneGeometry.prototype, "doubleSided", {
        /**
         *
         */
        get: function () {
            return this._prefab.doubleSided;
        },
        set: function (value) {
            this._prefab.doubleSided = value;
        },
        enumerable: true,
        configurable: true
    });
    return PlaneGeometry;
}(PrimitiveBase));
export { PlaneGeometry };
