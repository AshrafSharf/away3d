import * as tslib_1 from "tslib";
import { Geometry } from "../core/base/Geometry";
var PrimitiveBase = (function (_super) {
    tslib_1.__extends(PrimitiveBase, _super);
    /**
     * Creates a new Plane object.
     * @param width The width of the plane.
     * @param height The height of the plane.
     * @param segmentsW The number of segments that make up the plane along the X-axis.
     * @param segmentsH The number of segments that make up the plane along the Y or Z-axis.
     * @param yUp Defines whether the normal vector of the plane should point along the Y-axis (true) or Z-axis (false).
     * @param doubleSided Defines whether the plane will be visible from both sides, with correct vertex normals.
     */
    function PrimitiveBase(prefab) {
        var _this = _super.call(this, prefab.getNewObject().graphics) || this;
        _this._prefab = prefab;
        return _this;
    }
    Object.defineProperty(PrimitiveBase.prototype, "prefab", {
        get: function () {
            return this._prefab;
        },
        enumerable: true,
        configurable: true
    });
    PrimitiveBase.prototype.scaleUV = function (scaleU, scaleV) {
        this._prefab.scaleU = scaleU;
        this._prefab.scaleV = scaleV;
    };
    PrimitiveBase.prototype.validate = function () {
    };
    return PrimitiveBase;
}(Geometry));
export { PrimitiveBase };
