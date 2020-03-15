import * as tslib_1 from "tslib";
import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCylinderPrefab } from "@awayjs/scene";
var CylinderGeometry = (function (_super) {
    tslib_1.__extends(CylinderGeometry, _super);
    function CylinderGeometry(prefabTopRadius, bottomRadius, height, segmentsW, segmentsH, topClosed, bottomClosed, surfaceClosed, yUp) {
        if (prefabTopRadius === void 0) { prefabTopRadius = 50; }
        if (bottomRadius === void 0) { bottomRadius = 50; }
        if (height === void 0) { height = 100; }
        if (segmentsW === void 0) { segmentsW = 16; }
        if (segmentsH === void 0) { segmentsH = 1; }
        if (topClosed === void 0) { topClosed = true; }
        if (bottomClosed === void 0) { bottomClosed = true; }
        if (surfaceClosed === void 0) { surfaceClosed = true; }
        if (yUp === void 0) { yUp = true; }
        return _super.call(this, (prefabTopRadius instanceof PrimitiveCylinderPrefab) ? prefabTopRadius : new PrimitiveCylinderPrefab(null, "triangle", prefabTopRadius, bottomRadius, height, segmentsW, segmentsH, topClosed, bottomClosed, surfaceClosed, yUp)) || this;
    }
    Object.defineProperty(CylinderGeometry.prototype, "yUp", {
        get: function () {
            return this._prefab.yUp;
        },
        set: function (value) {
            this._prefab.yUp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "topClosed", {
        get: function () {
            return this._prefab.topClosed;
        },
        set: function (value) {
            this._prefab.topClosed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "bottomClosed", {
        get: function () {
            return this._prefab.bottomClosed;
        },
        set: function (value) {
            this._prefab.bottomClosed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "segmentsW", {
        get: function () {
            return this._prefab.segmentsW;
        },
        set: function (value) {
            this._prefab.segmentsW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "segmentsH", {
        get: function () {
            return this._prefab.segmentsH;
        },
        set: function (value) {
            this._prefab.segmentsH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "bottomRadius", {
        get: function () {
            return this._prefab.bottomRadius;
        },
        set: function (value) {
            this._prefab.bottomRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "topRadius", {
        get: function () {
            return this._prefab.topRadius;
        },
        set: function (value) {
            this._prefab.topRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CylinderGeometry.prototype, "height", {
        get: function () {
            return this._prefab.height;
        },
        set: function (value) {
            this._prefab.height = value;
        },
        enumerable: true,
        configurable: true
    });
    return CylinderGeometry;
}(PrimitiveBase));
export { CylinderGeometry };
