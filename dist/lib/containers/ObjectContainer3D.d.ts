import { DisplayObjectContainer } from "@awayjs/scene";
import { Vector3D, Matrix3D } from "@as3web/flash";
import { Scene3D } from "./Scene3D";
import { Object3D } from "../core/base/Object3D";
import { IAsset } from "../library/assets/IAsset";
/**
 * Dispatched when the scene transform matrix of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #sceneTransform
 */
/**
 * Dispatched when the parent scene of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #scene
 */
/**
 * Dispatched when a user moves the cursor while it is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/**
 * Dispatched when a user presses the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/**
 * Dispatched when a user releases the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/**
 * Dispatched when a user moves the cursor over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/**
 * Dispatched when a user moves the cursor away from the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/**
 * ObjectContainer3D is the most basic scene graph node. It can contain other ObjectContainer3Ds.
 *
 * ObjectContainer3D can have its own scene partition assigned. However, when assigned to a different scene,
 * it will loose any partition information, since partitions are tied to a scene.
 */
export declare class ObjectContainer3D extends Object3D implements IAsset {
    /**
     * Does not apply any transformations to this object. Allows static objects to be described in world coordinates without any matrix calculations.
     */
    ignoreTransform: boolean;
    /**
     * Indicates whether the IRenderable should trigger mouse events, and hence should be rendered for hit testing.
     */
    mouseEnabled: boolean;
    /**
     *
     */
    mouseChildren: boolean;
    /**
     *
     */
    visible: boolean;
    readonly assetType: string;
    /**
     * The global position of the ObjectContainer3D in the scene. The value of the return object should not be changed.
     */
    readonly scenePosition: Vector3D;
    /**
     * The minimum extremum of the object along the X-axis.
     */
    readonly minX: number;
    /**
     * The minimum extremum of the object along the Y-axis.
     */
    readonly minY: number;
    /**
     * The minimum extremum of the object along the Z-axis.
     */
    readonly minZ: number;
    /**
     * The maximum extremum of the object along the X-axis.
     */
    readonly maxX: number;
    /**
     * The maximum extremum of the object along the Y-axis.
     */
    readonly maxY: number;
    /**
     * The maximum extremum of the object along the Z-axis.
     */
    readonly maxZ: number;
    /**
     * The space partition to be used by the object container and all its recursive children, unless it has its own
     * space partition assigned.
     */
    partition: any;
    /**
     * The transformation matrix that transforms from model to world space.
     */
    readonly sceneTransform: Matrix3D;
    /**
     * A reference to the Scene3D object to which this object belongs.
     */
    scene: Scene3D;
    /**
     * The inverse scene transform object that transforms from world to model space.
     */
    readonly inverseSceneTransform: Matrix3D;
    /**
     * The parent ObjectContainer3D to which this object's transformation is relative.
     */
    readonly parent: ObjectContainer3D;
    /**
     * Creates a new ObjectContainer3D object.
     */
    constructor(adaptee?: DisplayObjectContainer);
    contains(child: Object3D): boolean;
    /**
     * Adds a child ObjectContainer3D to the current object. The child's transformation will become relative to the
     * current object's transformation.
     * @param child The object to be added as a child.
     * @return A reference to the added child object.
     */
    addChild(child: Object3D): Object3D;
    /**
     * Adds an array of 3d objects to the scene as children of the container
     *
     * @param    childArray        An array of 3d objects to be added
     */
    addChildren(childArray: Object3D[]): void;
    /**
     * Removes a 3d object from the child array of the container
     *
     * @param    child    The 3d object to be removed
     * @throws    Error    ObjectContainer3D.removeChild(null)
     */
    removeChild(child: Object3D): void;
    /**
     * Removes a 3d object from the child array of the container
     *
     * @param    index    Index of 3d object to be removed
     */
    removeChildAt(index: number): void;
    /**
     * Retrieves the child object at the given index.
     * @param index The index of the object to be retrieved.
     * @return The child object at the given index.
     */
    getChildAt(index: number): ObjectContainer3D;
    /**
     * The amount of child objects of the ObjectContainer3D.
     */
    readonly numChildren: number;
    /**
     * @inheritDoc
     */
    lookAt(target: Vector3D, upAxis?: Vector3D): void;
    translateLocal(axis: Vector3D, distance: number): void;
    /**
     * Disposes the current ObjectContainer3D including all of its children. This is a merely a convenience method.
     */
    disposeWithChildren(): void;
    /**
     * Clones this ObjectContainer3D instance along with all it's children, and
     * returns the result (which will be a copy of this container, containing copies
     * of all it's children.)
     */
    clone(): Object3D;
}
