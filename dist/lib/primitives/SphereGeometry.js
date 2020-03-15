import * as tslib_1 from "tslib";
import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveSpherePrefab } from "@awayjs/scene";
var SphereGeometry = (function (_super) {
    tslib_1.__extends(SphereGeometry, _super);
    function SphereGeometry(prefabRadius, segmentsW, segmentsH, yUp) {
        if (prefabRadius === void 0) { prefabRadius = 50; }
        if (segmentsW === void 0) { segmentsW = 16; }
        if (segmentsH === void 0) { segmentsH = 12; }
        if (yUp === void 0) { yUp = true; }
        return _super.call(this, (prefabRadius instanceof PrimitiveSpherePrefab) ? prefabRadius : new PrimitiveSpherePrefab(null, "triangle", prefabRadius, segmentsW, segmentsH, yUp)) || this;
    }
    return SphereGeometry;
}(PrimitiveBase));
export { SphereGeometry };
