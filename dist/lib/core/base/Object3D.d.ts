import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
import { Vector3D, Matrix3D, IAssetAdapter } from "@awayjs/core";
import { DisplayObject } from "@awayjs/scene";
/**
 * Dispatched when the position of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="positionChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the scale of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="scaleChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the rotation of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="rotationChanged", type="away3d.events.Object3DEvent")]

 * Object3D provides a base class for any 3D object that has a (local) transformation.<br/><br/>
 *
 * Standard Transform:
 * <ul>
 *     <li> The standard order for transformation is [parent transform] * (Translate+Pivot) * (Rotate) * (-Pivot) * (Scale) * [child transform] </li>
 *     <li> This is the order of matrix multiplications, left-to-right. </li>
 *     <li> The order of transformation is right-to-left, however!
 *          (Scale) happens before (-Pivot) happens before (Rotate) happens before (Translate+Pivot)
 *          with no pivot, the above transform works out to [parent transform] * Translate * Rotate * Scale * [child transform]
 *          (Scale) happens before (Rotate) happens before (Translate) </li>
 *     <li> This is based on code in updateTransform and ObjectContainer3D.updateSceneTransform(). </li>
 *     <li> Matrix3D prepend = operator on rhs - e.g. transform' = transform * rhs; </li>
 *     <li> Matrix3D append =  operator on lhr - e.g. transform' = lhs * transform; </li>
 * </ul>
 *
 * To affect Scale:
 * <ul>
 *     <li> set scaleX/Y/Z directly, or call scale(delta) </li>
 * </ul>
 *
 * To affect Pivot:
 * <ul>
 *     <li> set pivotPoint directly, or call movePivot() </li>
 * </ul>
 *
 * To affect Rotate:
 * <ul>
 *    <li> set rotationX/Y/Z individually (using degrees), set eulers [all 3 angles] (using radians), or call rotateTo()</li>
 *    <li> call pitch()/yaw()/roll()/rotate() to add an additional rotation *before* the current transform.
 *         rotationX/Y/Z will be reset based on these operations. </li>
 * </ul>
 *
 * To affect Translate (post-rotate translate):
 *
 * <ul>
 *    <li> set x/y/z/position or call moveTo(). </li>
 *    <li> call translate(), which modifies x/y/z based on a delta vector. </li>
 *    <li> call moveForward()/moveBackward()/moveLeft()/moveRight()/moveUp()/moveDown()/translateLocal() to add an
 *         additional translate *before* the current transform. x/y/z will be reset based on these operations. </li>
 * </ul>
 */
export declare class Object3D extends NamedAssetBase implements IAssetAdapter {
    /**
     * An object that can contain any extra data.
     */
    extra: any;
    /**
     * Defines the x coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    x: number;
    /**
     * Defines the y coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    y: number;
    /**
     * Defines the z coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    z: number;
    /**
     * Defines the euler angle of rotation of the 3d object around the x-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    rotationX: number;
    /**
     * Defines the euler angle of rotation of the 3d object around the y-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    rotationY: number;
    /**
     * Defines the euler angle of rotation of the 3d object around the z-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    rotationZ: number;
    /**
     * Defines the scale of the 3d object along the x-axis, relative to local coordinates.
     */
    scaleX: number;
    /**
     * Defines the scale of the 3d object along the y-axis, relative to local coordinates.
     */
    scaleY: number;
    /**
     * Defines the scale of the 3d object along the z-axis, relative to local coordinates.
     */
    scaleZ: number;
    /**
     * Defines the rotation of the 3d object as a <code>Vector3D</code> object containing euler angles for rotation around x, y and z axis.
     */
    eulers: Vector3D;
    /**
     * The transformation of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    transform: Matrix3D;
    /**
     * Defines the local point around which the object rotates.
     */
    pivotPoint: Vector3D;
    /**
     * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     */
    position: Vector3D;
    /**
     * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     * @param v the destination Vector3D
     * @return
     */
    getPosition(v?: Vector3D): Vector3D;
    /**
     *
     */
    readonly forwardVector: Vector3D;
    /**
     *
     */
    readonly rightVector: Vector3D;
    /**
     *
     */
    readonly upVector: Vector3D;
    /**
     *
     */
    readonly backVector: Vector3D;
    /**
     *
     */
    readonly leftVector: Vector3D;
    /**
     *
     */
    readonly downVector: Vector3D;
    /**
     * Creates an Object3D object.
     */
    constructor(adaptee?: DisplayObject);
    /**
     * Appends a uniform scale to the current transformation.
     * @param value The amount by which to scale.
     */
    scale(value: number): void;
    /**
     * Moves the 3d object forwards along it's local z axis
     *
     * @param    distance    The length of the movement
     */
    moveForward(distance: number): void;
    /**
     * Moves the 3d object backwards along it's local z axis
     *
     * @param    distance    The length of the movement
     */
    moveBackward(distance: number): void;
    /**
     * Moves the 3d object backwards along it's local x axis
     *
     * @param    distance    The length of the movement
     */
    moveLeft(distance: number): void;
    /**
     * Moves the 3d object forwards along it's local x axis
     *
     * @param    distance    The length of the movement
     */
    moveRight(distance: number): void;
    /**
     * Moves the 3d object forwards along it's local y axis
     *
     * @param    distance    The length of the movement
     */
    moveUp(distance: number): void;
    /**
     * Moves the 3d object backwards along it's local y axis
     *
     * @param    distance    The length of the movement
     */
    moveDown(distance: number): void;
    /**
     * Moves the 3d object directly to a point in space
     *
     * @param    dx        The amount of movement along the local x axis.
     * @param    dy        The amount of movement along the local y axis.
     * @param    dz        The amount of movement along the local z axis.
     */
    moveTo(dx: number, dy: number, dz: number): void;
    /**
     * Moves the local point around which the object rotates.
     *
     * @param    dx        The amount of movement along the local x axis.
     * @param    dy        The amount of movement along the local y axis.
     * @param    dz        The amount of movement along the local z axis.
     */
    movePivot(dx: number, dy: number, dz: number): void;
    /**
     * Moves the 3d object along a vector by a defined length
     *
     * @param    axis        The vector defining the axis of movement
     * @param    distance    The length of the movement
     */
    translate(axis: Vector3D, distance: number): void;
    /**
     * Moves the 3d object along a vector by a defined length
     *
     * @param    axis        The vector defining the axis of movement
     * @param    distance    The length of the movement
     */
    translateLocal(axis: Vector3D, distance: number): void;
    /**
     * Rotates the 3d object around it's local x-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    pitch(angle: number): void;
    /**
     * Rotates the 3d object around it's local y-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    yaw(angle: number): void;
    /**
     * Rotates the 3d object around it's local z-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    roll(angle: number): void;
    clone(): Object3D;
    /**
     * Rotates the 3d object directly to a euler angle
     *
     * @param    ax        The angle in degrees of the rotation around the x axis.
     * @param    ay        The angle in degrees of the rotation around the y axis.
     * @param    az        The angle in degrees of the rotation around the z axis.
     */
    rotateTo(ax: number, ay: number, az: number): void;
    /**
     * Rotates the 3d object around an axis by a defined angle
     *
     * @param    axis        The vector defining the axis of rotation
     * @param    angle        The amount of rotation in degrees
     */
    rotate(axis: Vector3D, angle: number): void;
    /**
     * Rotates the 3d object around to face a point defined relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     *
     * @param    target        The vector defining the point to be looked at
     * @param    upAxis        An optional vector used to define the desired up orientation of the 3d object after rotation has occurred
     */
    lookAt(target: Vector3D, upAxis?: Vector3D): void;
    /**
     * @inheritDoc
     */
    disposeAsset(): void;
    zOffset: number;
}
