import * as tslib_1 from "tslib";
import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCapsulePrefab } from "@awayjs/scene";
var CapsuleGeometry = (function (_super) {
    tslib_1.__extends(CapsuleGeometry, _super);
    function CapsuleGeometry(prefabRadius, height, segmentsW, segmentsH, yUp) {
        if (prefabRadius === void 0) { prefabRadius = 50; }
        if (height === void 0) { height = 100; }
        if (segmentsW === void 0) { segmentsW = 16; }
        if (segmentsH === void 0) { segmentsH = 15; }
        if (yUp === void 0) { yUp = true; }
        return _super.call(this, (prefabRadius instanceof PrimitiveCapsulePrefab) ? prefabRadius : new PrimitiveCapsulePrefab(null, "triangle", prefabRadius, height, segmentsW, segmentsH, yUp)) || this;
    }
    return CapsuleGeometry;
}(PrimitiveBase));
export { CapsuleGeometry };
