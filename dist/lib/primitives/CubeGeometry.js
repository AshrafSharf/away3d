import * as tslib_1 from "tslib";
import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCubePrefab } from "@awayjs/scene";
var CubeGeometry = (function (_super) {
    tslib_1.__extends(CubeGeometry, _super);
    function CubeGeometry(prefabWidth, height, depth, segmentsW, segmentsH, segmentsD, tile6) {
        if (prefabWidth === void 0) { prefabWidth = 100; }
        if (height === void 0) { height = 100; }
        if (depth === void 0) { depth = 100; }
        if (segmentsW === void 0) { segmentsW = 1; }
        if (segmentsH === void 0) { segmentsH = 1; }
        if (segmentsD === void 0) { segmentsD = 1; }
        if (tile6 === void 0) { tile6 = true; }
        return _super.call(this, (prefabWidth instanceof PrimitiveCubePrefab) ? prefabWidth : new PrimitiveCubePrefab(null, "triangle", prefabWidth, height, depth, segmentsW, segmentsH, segmentsD, tile6)) || this;
    }
    Object.defineProperty(CubeGeometry.prototype, "tile6", {
        /**
         *
         */
        get: function () {
            return this._prefab.tile6;
        },
        set: function (value) {
            this._prefab.tile6 = value;
        },
        enumerable: true,
        configurable: true
    });
    return CubeGeometry;
}(PrimitiveBase));
export { CubeGeometry };
