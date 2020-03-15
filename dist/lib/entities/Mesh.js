import * as tslib_1 from "tslib";
import { Entity } from "./Entity";
//import { IMaterialOwner } from "./IMaterialOwner";
//import { IAsset } from "./IAsset";
import { SubMesh } from "../core/base/SubMesh";
import { Geometry } from "../core/base/Geometry";
import { AssetType } from "../library/assets/AssetType";
import { AssetEvent } from "@awayjs/core";
import { Sprite } from "@awayjs/scene";
import { PrimitiveBase } from "../primitives/PrimitiveBase";
/**
 * Mesh is an instance of a Geometry, augmenting it with a presence in the scene graph, a material, and an animation
 * state. It consists out of SubMeshes, which in turn correspond to SubGeometries. SubMeshes allow different parts
 * of the geometry to be assigned different materials.
 */
var Mesh = (function (_super) {
    tslib_1.__extends(Mesh, _super); // implements IMaterialOwner, IAsset
    /**
     * Create a new Mesh object.
     *
     * @param geometry                    The geometry used by the mesh that provides it with its shape.
     * @param material    [optional]        The material with which to render the Mesh.
     */
    function Mesh(geometry, material, copyGeometry) {
        if (material === void 0) { material = null; }
        if (copyGeometry === void 0) { copyGeometry = true; }
        var _this = _super.call(this, Sprite.getNewSprite()) || this;
        _this._geometry = geometry || new Geometry();
        if (copyGeometry && geometry) {
            geometry.adaptee.copyTo(_this._adaptee.graphics, true);
            if (geometry instanceof PrimitiveBase)
                _this._adaptee._iSourcePrefab = geometry.prefab;
        }
        if (material)
            _this._adaptee.material = material.adaptee;
        _this._onGraphicsInvalidateDelegate = function (event) { return _this.onGraphicsInvalidate(event); };
        _this._geometry.adaptee.addEventListener(AssetEvent.INVALIDATE, _this._onGraphicsInvalidateDelegate);
        _this._subMeshesDirty = true;
        return _this;
    }
    Mesh.prototype.bakeTransformations = function () {
        //todo
    };
    Object.defineProperty(Mesh.prototype, "assetType", {
        get: function () {
            return AssetType.MESH;
        },
        enumerable: true,
        configurable: true
    });
    Mesh.prototype.onGeometryBoundsInvalid = function (event) {
        //  todo any = GeometryEvent
    };
    Object.defineProperty(Mesh.prototype, "castsShadows", {
        /**
         * Indicates whether or not the Mesh can cast shadows. Default value is <code>true</code>.
         */
        get: function () {
            return this._adaptee.castsShadows;
        },
        set: function (value) {
            this._adaptee.castsShadows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "animator", {
        /**
         * Defines the animator of the mesh. Act on the mesh's geometry. Default value is <code>null</code>.
         */
        get: function () {
            //  todo any = IAnimator
            return null; //this._animator;
        },
        set: function (value) {
            //  todo any = IAnimator
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "geometry", {
        /**
         * The geometry used by the mesh that provides it with its shape.
         */
        get: function () {
            return this._geometry;
        },
        set: function (value) {
            var material = this._adaptee.material;
            if (this._geometry && this._geometry != undefined)
                this._geometry.adaptee.removeEventListener(AssetEvent.INVALIDATE, this._onGraphicsInvalidateDelegate);
            this._geometry = value;
            if (this._geometry && this._geometry != undefined)
                this._geometry.adaptee.addEventListener(AssetEvent.INVALIDATE, this._onGraphicsInvalidateDelegate);
            this._adaptee.graphics.clear();
            if (this._geometry && this._geometry != undefined) {
                this._geometry.adaptee.copyTo(this._adaptee.graphics, true);
                if (this._geometry instanceof PrimitiveBase)
                    this._adaptee._iSourcePrefab = this._geometry.prefab;
            }
            //reset material
            this._adaptee.material = material;
            this._subMeshesDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "material", {
        /**
         * The material with which to render the Mesh.
         */
        get: function () {
            return (this._adaptee.material ? this._adaptee.material.adapter : null);
        },
        set: function (value) {
            this._adaptee.material = (value ? value.adaptee : null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "subMeshes", {
        /**
         * The SubMeshes out of which the Mesh consists. Every SubMesh can be assigned a material to override the Mesh's
         * material.
         */
        get: function () {
            if (this._subMeshesDirty)
                this._updateSubMeshes();
            return this._subMeshes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "shareAnimationGeometry", {
        /**
         * Indicates whether or not the mesh share the same animation geometry.
         */
        get: function () {
            //todo
            return false;
        },
        set: function (value) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clears the animation geometry of this mesh. It will cause animation to generate a new animation geometry. Work only when shareAnimationGeometry is false.
     */
    Mesh.prototype.clearAnimationGeometry = function () {
        //todo
    };
    /**
     * @inheritDoc
     */
    Mesh.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    /**
     * Disposes mesh including the animator and children. This is a merely a convenience method.
     * @return
     */
    Mesh.prototype.disposeWithAnimatorAndChildren = function () {
        //todo
    };
    /**
     * Clones this Mesh instance along with all it's children, while re-using the same
     * material, geometry and animation set. The returned result will be a copy of this mesh,
     * containing copies of all of it's children.
     *
     * Properties that are re-used (i.e. not cloned) by the new copy include name,
     * geometry, and material. Properties that are cloned or created anew for the copy
     * include subMeshes, children of the mesh, and the animator.
     *
     * If you want to copy just the mesh, reusing it's geometry and material while not
     * cloning it's children, the simplest way is to create a new mesh manually:
     *
     * <code>
     * var clone : Mesh = new Mesh(original.geometry, original.material);
     * </code>
     */
    Mesh.prototype.clone = function () {
        var clone = new Mesh(this._geometry, (this._adaptee.material ? this._adaptee.material.adapter : null), false);
        this._adaptee.copyTo(clone.adaptee, true);
        return clone;
    };
    Mesh.prototype.getSubMeshForSubGeometry = function (subGeometry) {
        //todo
        return null; //this._subMeshes[this._geometry.subGeometries.indexOf(subGeometry)];
    };
    Mesh.prototype._updateSubMeshes = function () {
        this._subMeshesDirty = false;
        this._subMeshes = [];
        var graphics = this._adaptee.graphics;
        var len = graphics.count;
        for (var i = 0; i < len; i++) {
            this._subMeshes.push(new SubMesh(graphics.getShapeAt(i)));
        }
    };
    Mesh.prototype.onGraphicsInvalidate = function (event) {
        this._subMeshesDirty = true;
    };
    return Mesh;
}(Entity // implements IMaterialOwner, IAsset
));
export { Mesh };
