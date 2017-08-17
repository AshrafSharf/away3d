import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
import { Vector3D, Matrix3D, MathConsts, IAssetAdapter} from "@awayjs/core";
import { IDisplayObjectAdapter, DisplayObject } from "@awayjs/scene"


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

export class Object3D extends NamedAssetBase implements IAssetAdapter
{
	/**
	 * An object that can contain any extra data.
	 */
	public extra:any;

	/**
	 * Defines the x coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get x():number
	{
		return (<DisplayObject> this._adaptee).x;
	}

	public set x(val:number)
	{
		(<DisplayObject> this._adaptee).x = val;
	}

	/**
	 * Defines the y coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get y():number
	{
		return (<DisplayObject> this._adaptee).y;
	}

	public set y(val:number)
	{
		(<DisplayObject> this._adaptee).y = val;
	}

	/**
	 * Defines the z coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get z():number
	{
		return (<DisplayObject> this._adaptee).z;
	}

	public set z(val:number)
	{
		(<DisplayObject> this._adaptee).z = val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the x-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationX():number
	{
		return (<DisplayObject> this._adaptee).rotationX;
	}

	public set rotationX(val:number)
	{
		(<DisplayObject> this._adaptee).rotationX = val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the y-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationY():number
	{
		return (<DisplayObject> this._adaptee).rotationY;
	}

	public set rotationY(val:number)
	{
		(<DisplayObject> this._adaptee).rotationY = val;
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the z-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationZ():number
	{
		return (<DisplayObject> this._adaptee).rotationZ;
	}

	public set rotationZ(val:number)
	{
		(<DisplayObject> this._adaptee).rotationZ = val;
	}

	/**
	 * Defines the scale of the 3d object along the x-axis, relative to local coordinates.
	 */
	public get scaleX():number
	{
		return (<DisplayObject> this._adaptee).scaleX;
	}

	public set scaleX(val:number)
	{
		(<DisplayObject> this._adaptee).scaleX = val;
	}

	/**
	 * Defines the scale of the 3d object along the y-axis, relative to local coordinates.
	 */
	public get scaleY():number
	{
		return (<DisplayObject> this._adaptee).scaleY;
	}

	public set scaleY(val:number)
	{
		(<DisplayObject> this._adaptee).scaleY = val;
	}

	/**
	 * Defines the scale of the 3d object along the z-axis, relative to local coordinates.
	 */
	public get scaleZ():number
	{
		return (<DisplayObject> this._adaptee).scaleZ;
	}

	public set scaleZ(val:number)
	{
		(<DisplayObject> this._adaptee).scaleZ = val;
	}

	/**
	 * Defines the rotation of the 3d object as a <code>Vector3D</code> object containing euler angles for rotation around x, y and z axis.
	 */
	public get eulers():Vector3D
	{
		return (<DisplayObject> this._adaptee).eulers;
	}

	public set eulers(value:Vector3D)
	{
		(<DisplayObject> this._adaptee).eulers = value;
	}

	/**
	 * The transformation of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get transform():Matrix3D
	{
		return (<DisplayObject> this._adaptee).transform.matrix3D;
	}

	public set transform(val:Matrix3D)
	{
		(<DisplayObject> this._adaptee).transform.matrix3D = val;
	}

	/**
	 * Defines the local point around which the object rotates.
	 */
	public get pivotPoint():Vector3D
	{
		//todo
		return null;
	}

	public set pivotPoint(pivot:Vector3D)
	{
		//todo
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get position():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.position;
	}

	public set position(value:Vector3D)
	{
		(<DisplayObject> this._adaptee).transform.moveTo(value.x, value.y, value.z);
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 * @param v the destination Vector3D
	 * @return
	 */
	public getPosition(v:Vector3D = null):Vector3D {
		//todo
		return null;
	}

	/**
	 *
	 */
	public get forwardVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.forwardVector;
	}

	/**
	 *
	 */
	public get rightVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.rightVector;
	}

	/**
	 *
	 */
	public get upVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.upVector;
	}

	/**
	 *
	 */
	public get backVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.backVector;
	}

	/**
	 *
	 */
	public get leftVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.leftVector;
	}

	/**
	 *
	 */
	public get downVector():Vector3D
	{
		return (<DisplayObject> this._adaptee).transform.downVector;
	}

	/**
	 * Creates an Object3D object.
	 */
	constructor(adaptee:DisplayObject = null)
	{
		super(adaptee || new DisplayObject());

		(<DisplayObject> this._adaptee).mouseEnabled = false;
	}

	/**
	 * Appends a uniform scale to the current transformation.
	 * @param value The amount by which to scale.
	 */
	public scale(value:number):void
	{
		(<DisplayObject> this._adaptee).transform.scaleTo(value, value, value);
	}

	/**
	 * Moves the 3d object forwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveForward(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveForward(distance);
	}

	/**
	 * Moves the 3d object backwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveBackward(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveBackward(distance);
	}

	/**
	 * Moves the 3d object backwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveLeft(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveLeft(distance);
	}

	/**
	 * Moves the 3d object forwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveRight(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveRight(distance);
	}

	/**
	 * Moves the 3d object forwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveUp(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveUp(distance);
	}

	/**
	 * Moves the 3d object backwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveDown(distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveDown(distance);
	}

	/**
	 * Moves the 3d object directly to a point in space
	 *
	 * @param    dx        The amount of movement along the local x axis.
	 * @param    dy        The amount of movement along the local y axis.
	 * @param    dz        The amount of movement along the local z axis.
	 */
	public moveTo(dx:number, dy:number, dz:number):void
	{
		(<DisplayObject> this._adaptee).transform.moveTo(dx, dy, dz);
	}

	/**
	 * Moves the local point around which the object rotates.
	 *
	 * @param    dx        The amount of movement along the local x axis.
	 * @param    dy        The amount of movement along the local y axis.
	 * @param    dz        The amount of movement along the local z axis.
	 */
	public movePivot(dx:number, dy:number, dz:number):void
	{
		(<DisplayObject> this._adaptee).movePivot(dx, dy, dz);
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translate(axis:Vector3D, distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.translate(axis, distance);
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translateLocal(axis:Vector3D, distance:number):void
	{
		(<DisplayObject> this._adaptee).transform.translateLocal(axis, distance);
	}

	/**
	 * Rotates the 3d object around it's local x-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public pitch(angle:number):void
	{
		(<DisplayObject> this._adaptee).transform.pitch(angle);
	}

	/**
	 * Rotates the 3d object around it's local y-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public yaw(angle:number):void
	{
		(<DisplayObject> this._adaptee).transform.yaw(angle);
	}

	/**
	 * Rotates the 3d object around it's local z-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public roll(angle:number):void
	{
		(<DisplayObject> this._adaptee).transform.roll(angle);
	}

	public clone():Object3D
	{
		return new Object3D((<DisplayObject> this._adaptee).clone());
	}

	/**
	 * Rotates the 3d object directly to a euler angle
	 *
	 * @param    ax        The angle in degrees of the rotation around the x axis.
	 * @param    ay        The angle in degrees of the rotation around the y axis.
	 * @param    az        The angle in degrees of the rotation around the z axis.
	 */
	public rotateTo(ax:number, ay:number, az:number):void
	{
		(<DisplayObject> this._adaptee).transform.rotateTo(ax, ay, az);
	}

	/**
	 * Rotates the 3d object around an axis by a defined angle
	 *
	 * @param    axis        The vector defining the axis of rotation
	 * @param    angle        The amount of rotation in degrees
	 */
	public rotate(axis:Vector3D, angle:number):void
	{
		(<DisplayObject> this._adaptee).transform.rotate(axis, angle);
	}

	/**
	 * Rotates the 3d object around to face a point defined relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 *
	 * @param    target        The vector defining the point to be looked at
	 * @param    upAxis        An optional vector used to define the desired up orientation of the 3d object after rotation has occurred
	 */
	public lookAt(target:Vector3D, upAxis:Vector3D = null):void
	{
		(<DisplayObject> this._adaptee).lookAt(target, upAxis);
	}

	/**
	 * @inheritDoc
	 */
	public disposeAsset():void
	{
		//todo
	}

	public get zOffset():number
	{
		return (<DisplayObject> this._adaptee).zOffset;
	}

	public set zOffset(value:number)
	{
		(<DisplayObject> this._adaptee).zOffset = value;
	}
}

