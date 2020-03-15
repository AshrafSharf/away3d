import { Vector3D } from "@awayjs/core";
import { DisplayObjectContainer } from "@awayjs/scene";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { Scene3D } from "../containers/Scene3D";
/**
 * The Entity class provides an abstract base class for all scene graph objects that are considered having a
 * "presence" in the scene, in the sense that it can be considered an actual object with a position and a size (even
 * if infinite or idealised), rather than a grouping.
 * Entities can be partitioned in a space partitioning system and in turn collected by an EntityCollector.
 *
 * @see away3d.partition.Partition3D
 * @see away3d.core.traverse.EntityCollector
 */
export declare class Entity extends ObjectContainer3D {
    ignoreTransform: boolean;
    /**
     * Used by the shader-based picking system to determine whether a separate render pass is made in order
     * to offer more details for the picking collision object, including local position, normal vector and uv value.
     * Defaults to false.
     *
     * @see away3d.core.pick.ShaderPicker
     */
    shaderPickingDetails: boolean;
    /**
     * Defines whether or not the object will be moved or animated at runtime. This property is used by some partitioning systems to improve performance.
     * Warning: if set to true, they may not be processed by certain partition systems using static visibility lists, unless they're specifically assigned to the visibility list.
     */
    staticNode: boolean;
    /**
     * Returns a unique picking collision value object for the entity.
     */
    readonly pickingCollisionVO: any;
    /**
     *
     */
    showBounds: boolean;
    /**
     * @inheritDoc
     */
    readonly minX: number;
    /**
     * @inheritDoc
     */
    readonly minY: number;
    /**
     * @inheritDoc
     */
    readonly minZ: number;
    /**
     * @inheritDoc
     */
    readonly maxX: number;
    /**
     * @inheritDoc
     */
    readonly maxY: number;
    /**
     * @inheritDoc
     */
    readonly maxZ: number;
    /**
     * The bounding volume approximating the volume occupied by the Entity.
     */
    bounds: any;
    readonly worldBounds: any;
    private updateWorldBounds();
    /**
     * @inheritDoc
     */
    scene: Scene3D;
    readonly assetType: string;
    /**
     * Used by the raycast-based picking system to determine how the geometric contents of an entity are processed
     * in order to offer more details for the picking collision object, including local position, normal vector and uv value.
     * Defaults to null.
     *
     * @see away3d.core.pick.RaycastPicker
     */
    pickingCollider: any;
    /**
     * Creates a new Entity object.
     */
    constructor(adaptee?: DisplayObjectContainer);
    /**
     * Gets a concrete EntityPartition3DNode subclass that is associated with this Entity instance
     */
    getEntityPartitionNode(): any;
    isIntersectingRay(rayPosition: Vector3D, rayDirection: Vector3D): boolean;
}
