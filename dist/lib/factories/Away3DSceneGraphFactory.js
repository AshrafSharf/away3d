import * as tslib_1 from "tslib";
import { ImageBase } from "@awayjs/stage";
import { ElementsType } from "@awayjs/graphics";
import { PrimitiveCapsulePrefab, PrimitiveCubePrefab, PrimitiveCylinderPrefab, PrimitivePlanePrefab, PrimitiveSpherePrefab } from "@awayjs/scene";
import { DefaultSceneGraphFactory } from "@awayjs/scene";
import { BitmapData } from "@as3web/flash";
import { Mesh } from "../entities/Mesh";
import { TextureMaterial } from "../materials/TextureMaterial";
import { ColorMaterial } from "../materials/ColorMaterial";
import { CapsuleGeometry } from "../primitives/CapsuleGeometry";
import { CubeGeometry } from "../primitives/CubeGeometry";
import { CylinderGeometry } from "../primitives/CylinderGeometry";
import { PlaneGeometry } from "../primitives/PlaneGeometry";
import { SphereGeometry } from "../primitives/SphereGeometry";
import { WireframeSphere } from "../primitives/WireframeSphere";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { BitmapTexture } from "../textures/BitmapTexture";
var Away3DSceneGraphFactory = (function (_super) {
    tslib_1.__extends(Away3DSceneGraphFactory, _super);
    function Away3DSceneGraphFactory() {
        var _this = _super.apply(this, arguments) || this;
        _this.imageStore = {};
        return _this;
    }
    Away3DSceneGraphFactory.prototype.createSprite = function (prefab) {
        if (prefab === void 0) { prefab = null; }
        if (prefab)
            return new Mesh(this._createGeometry(prefab)).adaptee;
        return new Mesh(null).adaptee;
    };
    Away3DSceneGraphFactory.prototype.createDisplayObjectContainer = function () {
        return new ObjectContainer3D().adaptee;
    };
    Away3DSceneGraphFactory.prototype.createMaterial = function (imageColor, alpha) {
        if (imageColor instanceof ImageBase)
            return new TextureMaterial(new BitmapTexture(imageColor.adapter)).adaptee;
        return new ColorMaterial(imageColor, alpha).adaptee;
    };
    Away3DSceneGraphFactory.prototype.createImage2D = function (width, height, transparent, fillColor, powerOfTwo) {
        if (transparent === void 0) { transparent = true; }
        if (fillColor === void 0) { fillColor = null; }
        if (powerOfTwo === void 0) { powerOfTwo = true; }
        return new BitmapData(width, height, transparent, fillColor).adaptee;
    };
    Away3DSceneGraphFactory.prototype._createGeometry = function (prefab) {
        if (prefab instanceof PrimitiveCapsulePrefab)
            return new CapsuleGeometry(prefab);
        else if (prefab instanceof PrimitiveCubePrefab)
            return new CubeGeometry(prefab);
        else if (prefab instanceof PrimitiveCylinderPrefab)
            return new CylinderGeometry(prefab);
        else if (prefab instanceof PrimitivePlanePrefab)
            return new PlaneGeometry(prefab);
        else if (prefab instanceof PrimitiveSpherePrefab && prefab.elementsType == ElementsType.TRIANGLE)
            return new SphereGeometry(prefab);
        else if (prefab instanceof PrimitiveSpherePrefab)
            return new WireframeSphere(prefab);
    };
    return Away3DSceneGraphFactory;
}(DefaultSceneGraphFactory));
export { Away3DSceneGraphFactory };
