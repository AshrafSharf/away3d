import * as tslib_1 from "tslib";
import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveSpherePrefab } from "@awayjs/scene";
var WireframeSphere = (function (_super) {
    tslib_1.__extends(WireframeSphere, _super);
    function WireframeSphere(prefabRadius, segmentsW, segmentsH, color, thickness) {
        if (prefabRadius === void 0) { prefabRadius = 50; }
        if (segmentsW === void 0) { segmentsW = 16; }
        if (segmentsH === void 0) { segmentsH = 12; }
        if (color === void 0) { color = 0xFFFFFF; }
        if (thickness === void 0) { thickness = 1; }
        return _super.call(this, (prefabRadius instanceof PrimitiveSpherePrefab) ? prefabRadius : new PrimitiveSpherePrefab(null, "line", prefabRadius, segmentsW, segmentsH)) || this;
    }
    return WireframeSphere;
}(PrimitiveBase));
export { WireframeSphere };
