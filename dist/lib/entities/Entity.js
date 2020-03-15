import * as tslib_1 from "tslib";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { AssetType } from "../library/assets/AssetType";
/**
 * The Entity class provides an abstract base class for all scene graph objects that are considered having a
 * "presence" in the scene, in the sense that it can be considered an actual object with a position and a size (even
 * if infinite or idealised), rather than a grouping.
 * Entities can be partitioned in a space partitioning system and in turn collected by an EntityCollector.
 *
 * @see away3d.partition.Partition3D
 * @see away3d.core.traverse.EntityCollector
 */
var Entity = (function (_super) {
    tslib_1.__extends(Entity, _super);
    /**
     * Creates a new Entity object.
     */
    function Entity(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        return _super.call(this, adaptee) || this;
    }
    Object.defineProperty(Entity.prototype, "ignoreTransform", {
        set: function (value) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "shaderPickingDetails", {
        /**
         * Used by the shader-based picking system to determine whether a separate render pass is made in order
         * to offer more details for the picking collision object, including local position, normal vector and uv value.
         * Defaults to false.
         *
         * @see away3d.core.pick.ShaderPicker
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
    Object.defineProperty(Entity.prototype, "staticNode", {
        /**
         * Defines whether or not the object will be moved or animated at runtime. This property is used by some partitioning systems to improve performance.
         * Warning: if set to true, they may not be processed by certain partition systems using static visibility lists, unless they're specifically assigned to the visibility list.
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
    Object.defineProperty(Entity.prototype, "pickingCollisionVO", {
        /**
         * Returns a unique picking collision value object for the entity.
         */
        get: function () {
            //todo: any is PickingCollisionVO
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "showBounds", {
        /**
         *
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
    Object.defineProperty(Entity.prototype, "minX", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.min.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "minY", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.min.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "minZ", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.min.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "maxX", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.max.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "maxY", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.max.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "maxZ", {
        /**
         * @inheritDoc
         */
        get: function () {
            //todo
            return 0; //this._bounds.max.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "bounds", {
        /**
         * The bounding volume approximating the volume occupied by the Entity.
         */
        get: function () {
            //todo: any=BoundingVolumeBase
            return null; // this._bounds;
        },
        set: function (value) {
            //todo any = BoundingVolumeBase
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "worldBounds", {
        get: function () {
            //todo any = BoundingVolumeBase
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.updateWorldBounds = function () {
        //todo
    };
    Object.defineProperty(Entity.prototype, "scene", {
        /**
         * @inheritDoc
         */
        set: function (value) {
            //todo
            //this.adaptee.scene=(<Scene>value.adaptee);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "assetType", {
        get: function () {
            return AssetType.ENTITY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "pickingCollider", {
        /**
         * Used by the raycast-based picking system to determine how the geometric contents of an entity are processed
         * in order to offer more details for the picking collision object, including local position, normal vector and uv value.
         * Defaults to null.
         *
         * @see away3d.core.pick.RaycastPicker
         */
        get: function () {
            //todo: any = IPickingcollider
            return null;
        },
        set: function (value) {
            //todo: any = IPickingcollider
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a concrete EntityPartition3DNode subclass that is associated with this Entity instance
     */
    Entity.prototype.getEntityPartitionNode = function () {
        // todo: any = EntityNode
        return null;
    };
    Entity.prototype.isIntersectingRay = function (rayPosition, rayDirection) {
        return true;
    };
    return Entity;
}(ObjectContainer3D));
export { Entity };
