import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
//import { ControllerBase } from "../../controllers/ControllerBase";
//import { Object3DEvent } from "../../events/Object3DEvent";
import { Vector3D, Matrix3D, MathConsts } from "@awayjs/core";
import { EventBase } from "@awayjs/core"
/*import away3d.*;*/
/*import away3d.controllers.*;*/
/*import away3d.core.math.*;*/
/*import away3d.events.*;*/
/*import away3d.library.assets.*;*/

/*import flash.geom.*;*/

/*use namespace arcane*/;

/**
 * Dispatched when the position of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 */
/*[Event(name="positionChanged", type="away3d.events.Object3DEvent")]*/

/**
 * Dispatched when the scale of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 */
/*[Event(name="scaleChanged", type="away3d.events.Object3DEvent")]*/

/**
 * Dispatched when the rotation of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 */
/*[Event(name="rotationChanged", type="away3d.events.Object3DEvent")]*/

/**
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

export class Object3D extends NamedAssetBase
{
	/** @private */
	/*arcane*/
	//_controller:ControllerBase;

	private _smallestNumber:number = 0.0000000000000000000001;
	private _transformDirty:boolean = true;

	private _positionDirty:boolean;
	private _rotationDirty:boolean;
	private _scaleDirty:boolean;

	// TODO: not used
	// private var _positionValuesDirty:Boolean;
	// private var _rotationValuesDirty:Boolean;
	// private var _scaleValuesDirty:Boolean;

	//private _positionChanged:Object3DEvent;
	//private _rotationChanged:Object3DEvent;
	//private _scaleChanged:Object3DEvent;

	private _rotationX:number = 0;
	private _rotationY:number = 0;
	private _rotationZ:number = 0;
	private _eulers:Vector3D = new Vector3D();

	private _flipY:Matrix3D = new Matrix3D();
	private _listenToPositionChanged:boolean;
	private _listenToRotationChanged:boolean;
	private _listenToScaleChanged:boolean;

	protected _zOffset:number = 0;

	private invalidatePivot():void
	{
		this._pivotZero = (this._pivotPoint.x == 0) && (this._pivotPoint.y == 0) && (this._pivotPoint.z == 0);

		this.invalidateTransform();
	}

	private invalidatePosition():void
	{
		if (this._positionDirty)
			return;

		this._positionDirty = true;

		this.invalidateTransform();

		if (this._listenToPositionChanged)
			this.notifyPositionChanged();
	}

	private notifyPositionChanged():void
	{
		/*if (!this._positionChanged)
			this._positionChanged = new Object3DEvent(Object3DEvent.POSITION_CHANGED, this);
*/
		//this.dispatchEvent(this._positionChanged);
	}

	/*override*/ public addEventListener(type:string, listener:(event:EventBase) => void, useCapture:boolean = false, priority:number = 0, useWeakReference:boolean = false):void
{
	super.addEventListener(type, listener);//, useCapture, priority, useWeakReference);
	/*
	switch (type) {
		case Object3DEvent.POSITION_CHANGED:
			this._listenToPositionChanged = true;
			break;
		case Object3DEvent.ROTATION_CHANGED:
			this._listenToRotationChanged = true;
			break;
		case Object3DEvent.SCALE_CHANGED:
			this._listenToRotationChanged = true;
			break;
	}
	*/
}

	/*override*/ public removeEventListener(type:string, listener:(event:EventBase) => void, useCapture:boolean = false):void
{
	super.removeEventListener(type, listener);//, useCapture);
/*
	if (this.hasEventListener(type))
		return;

	switch (type) {
		case Object3DEvent.POSITION_CHANGED:
			this._listenToPositionChanged = false;
			break;
		case Object3DEvent.ROTATION_CHANGED:
			this._listenToRotationChanged = false;
			break;
		case Object3DEvent.SCALE_CHANGED:
			this._listenToScaleChanged = false;
			break;
	}
	*/
}

	private invalidateRotation():void
	{
		if (this._rotationDirty)
			return;

		this._rotationDirty = true;

		this.invalidateTransform();

		if (this._listenToRotationChanged)
			this.notifyRotationChanged();
	}

	private notifyRotationChanged():void
	{
		/*
		if (!this._rotationChanged)
			this._rotationChanged = new Object3DEvent(Object3DEvent.ROTATION_CHANGED, this);

		this.dispatchEvent(this._rotationChanged);
		*/
	}

	private invalidateScale():void
	{
		if (this._scaleDirty)
			return;

		this._scaleDirty = true;

		this.invalidateTransform();

		if (this._listenToScaleChanged)
			this.notifyScaleChanged();
	}

	private notifyScaleChanged():void
	{
		//if (!this._scaleChanged)
		//	this._scaleChanged = new Object3DEvent(Object3DEvent.SCALE_CHANGED, this);

		//this.dispatchEvent(this._scaleChanged);
	}

	protected _transform:Matrix3D = new Matrix3D();
	protected _scaleX:number = 1;
	protected _scaleY:number = 1;
	protected _scaleZ:number = 1;
	protected _x:number = 0;
	protected _y:number = 0;
	protected _z:number = 0;
	protected _pivotPoint:Vector3D = new Vector3D();
	protected _pivotZero:boolean = true;
	protected _pos:Vector3D = new Vector3D();
	protected _rot:Vector3D = new Vector3D();
	protected _sca:Vector3D = new Vector3D();
	protected _transformComponents:Vector3D[];

	/**
	 * An object that can contain any extra data.
	 */
	public extra:any;

	/**
	 * Defines the x coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get x():number
	{
		return this._x;
	}

	public set x(val:number)
	{
		if (this._x == val)
			return;

		this._x = val;

		this.invalidatePosition();
	}

	/**
	 * Defines the y coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get y():number
	{
		return this._y;
	}

	public set y(val:number)
	{
		if (this._y == val)
			return;

		this._y = val;

		this.invalidatePosition();
	}

	/**
	 * Defines the z coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get z():number
	{
		return this._z;
	}

	public set z(val:number)
	{
		if (this._z == val)
			return;

		this._z = val;

		this.invalidatePosition();
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the x-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationX():number
	{
		return this._rotationX*MathConsts.RADIANS_TO_DEGREES;
	}

	public set rotationX(val:number)
	{
		if (this.rotationX == val)
			return;

		this._rotationX = val*MathConsts.DEGREES_TO_RADIANS;

		this.invalidateRotation();
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the y-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationY():number
	{
		return this._rotationY*MathConsts.RADIANS_TO_DEGREES;
	}

	public set rotationY(val:number)
	{
		if (this.rotationY == val)
			return;

		this._rotationY = val*MathConsts.DEGREES_TO_RADIANS;

		this.invalidateRotation();
	}

	/**
	 * Defines the euler angle of rotation of the 3d object around the z-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get rotationZ():number
	{
		return this._rotationZ*MathConsts.RADIANS_TO_DEGREES;
	}

	public set rotationZ(val:number)
	{
		if (this.rotationZ == val)
			return;

		this._rotationZ = val*MathConsts.DEGREES_TO_RADIANS;

		this.invalidateRotation();
	}

	/**
	 * Defines the scale of the 3d object along the x-axis, relative to local coordinates.
	 */
	public get scaleX():number
	{
		return this._scaleX;
	}

	public set scaleX(val:number)
	{
		if (this._scaleX == val)
			return;

		this._scaleX = val;

		this.invalidateScale();
	}

	/**
	 * Defines the scale of the 3d object along the y-axis, relative to local coordinates.
	 */
	public get scaleY():number
	{
		return this._scaleY;
	}

	public set scaleY(val:number)
	{
		if (this._scaleY == val)
			return;

		this._scaleY = val;

		this.invalidateScale();
	}

	/**
	 * Defines the scale of the 3d object along the z-axis, relative to local coordinates.
	 */
	public get scaleZ():number
	{
		return this._scaleZ;
	}

	public set scaleZ(val:number)
	{
		if (this._scaleZ == val)
			return;

		this._scaleZ = val;

		this.invalidateScale();
	}

	/**
	 * Defines the rotation of the 3d object as a <code>Vector3D</code> object containing euler angles for rotation around x, y and z axis.
	 */
	public get eulers():Vector3D
	{
		this._eulers.x = this._rotationX*MathConsts.RADIANS_TO_DEGREES;
		this._eulers.y = this._rotationY*MathConsts.RADIANS_TO_DEGREES;
		this._eulers.z = this._rotationZ*MathConsts.RADIANS_TO_DEGREES;

		return this._eulers;
	}

	public set eulers(value:Vector3D)
	{
		this._rotationX = value.x*MathConsts.DEGREES_TO_RADIANS;
		this._rotationY = value.y*MathConsts.DEGREES_TO_RADIANS;
		this._rotationZ = value.z*MathConsts.DEGREES_TO_RADIANS;

		this.invalidateRotation();
	}

	/**
	 * The transformation of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get transform():Matrix3D
	{
		if (this._transformDirty)
			this.updateTransform();

		return this._transform;
	}

	public set transform(val:Matrix3D)
	{
		/*
		//ridiculous matrix error
		var raw:number[] = Matrix3DUtils.RAW_DATA_CONTAINER;
		val.copyRawDataTo(raw);
		if (!raw[Number(0)]) {
			raw[Number(0)] = this._smallestNumber;
			val.copyRawDataFrom(raw);
		}

		var elements:Vector3D[] = Matrix3DUtils.decompose(val);
		var vec:Vector3D;

		vec = elements[0];

		if (this._x != vec.x || this._y != vec.y || this._z != vec.z) {
			this._x = vec.x;
			this._y = vec.y;
			this._z = vec.z;

			this.invalidatePosition();
		}

		vec = elements[1];

		if (this._rotationX != vec.x || this._rotationY != vec.y || this._rotationZ != vec.z) {
			this._rotationX = vec.x;
			this._rotationY = vec.y;
			this._rotationZ = vec.z;

			this.invalidateRotation();
		}

		vec = elements[2];

		if (this._scaleX != vec.x || this._scaleY != vec.y || this._scaleZ != vec.z) {
			this._scaleX = vec.x;
			this._scaleY = vec.y;
			this._scaleZ = vec.z;

			this.invalidateScale();
		}
		*/
	}

	/**
	 * Defines the local point around which the object rotates.
	 */
	public get pivotPoint():Vector3D
	{
		return this._pivotPoint;
	}

	public set pivotPoint(pivot:Vector3D)
	{
		if(!this._pivotPoint) this._pivotPoint = new Vector3D();
		this._pivotPoint.x = pivot.x;
		this._pivotPoint.y = pivot.y;
		this._pivotPoint.z = pivot.z;

		this.invalidatePivot();
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 */
	public get position():Vector3D
	{
		this.transform.copyColumnTo(3, this._pos);

		return this._pos.clone();
	}

	public set position(value:Vector3D)
	{
		this._x = value.x;
		this._y = value.y;
		this._z = value.z;

		this.invalidatePosition();
	}

	/**
	 * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 * @param v the destination Vector3D
	 * @return
	 */
	public getPosition(v:Vector3D = null):Vector3D {
		if(!v) v = new Vector3D();
		this.transform.copyColumnTo(3, v);
		return v;
	}

	/**
	 *
	 */
	public get forwardVector():Vector3D
	{
		return null;//Matrix3DUtils.getForward(this.transform);
	}

	/**
	 *
	 */
	public get rightVector():Vector3D
	{
		return null;//Matrix3DUtils.getRight(this.transform);
	}

	/**
	 *
	 */
	public get upVector():Vector3D
	{
		return null;//Matrix3DUtils.getUp(this.transform);
	}

	/**
	 *
	 */
	public get backVector():Vector3D
	{
		/*var director:Vector3D = Matrix3DUtils.getForward(this.transform);
		director.negate();

		return director;
		*/
		return null;
	}

	/**
	 *
	 */
	public get leftVector():Vector3D
	{
		/*var director:Vector3D = Matrix3DUtils.getRight(this.transform);
		director.negate();

		return director;
	*/
		return null;
	}

	/**
	 *
	 */
	public get downVector():Vector3D
	{
		/*
		var director:Vector3D = Matrix3DUtils.getUp(this.transform);
		director.negate();

		return director;
		*/
		return null;
	}

	/**
	 * Creates an Object3D object.
	 */
	constructor(){
		super();
		// Cached vector of transformation components used when
		// recomposing the transform matrix in updateTransform()
		this._transformComponents = [];
		this._transformComponents[0] = this._pos;
		this._transformComponents[1] = this._rot;
		this._transformComponents[2] = this._sca;

		this._transform.identity();

		this._flipY.appendScale(1, -1, 1);
	}

	/**
	 * Appends a uniform scale to the current transformation.
	 * @param value The amount by which to scale.
	 */
	public scale(value:number):void
	{
		this._scaleX *= value;
		this._scaleY *= value;
		this._scaleZ *= value;

		this.invalidateScale();
	}

	/**
	 * Moves the 3d object forwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveForward(distance:number):void
	{
		this.translateLocal(Vector3D.Z_AXIS, distance);
	}

	/**
	 * Moves the 3d object backwards along it's local z axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveBackward(distance:number):void
	{
		this.translateLocal(Vector3D.Z_AXIS, -distance);
	}

	/**
	 * Moves the 3d object backwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveLeft(distance:number):void
	{
		this.translateLocal(Vector3D.X_AXIS, -distance);
	}

	/**
	 * Moves the 3d object forwards along it's local x axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveRight(distance:number):void
	{
		this.translateLocal(Vector3D.X_AXIS, distance);
	}

	/**
	 * Moves the 3d object forwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveUp(distance:number):void
	{
		this.translateLocal(Vector3D.Y_AXIS, distance);
	}

	/**
	 * Moves the 3d object backwards along it's local y axis
	 *
	 * @param    distance    The length of the movement
	 */
	public moveDown(distance:number):void
	{
		this.translateLocal(Vector3D.Y_AXIS, -distance);
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
		if (this._x == dx && this._y == dy && this._z == dz)
			return;
		this._x = dx;
		this._y = dy;
		this._z = dz;

		this.invalidatePosition();
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
		if(!this._pivotPoint) this._pivotPoint = new Vector3D();
		this._pivotPoint.x += dx;
		this._pivotPoint.y += dy;
		this._pivotPoint.z += dz;

		this.invalidatePivot();
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translate(axis:Vector3D, distance:number):void
	{
		var x:number = axis.x, y:number = axis.y, z:number = axis.z;
		var len:number = distance/Math.sqrt(x*x + y*y + z*z);

		this._x += x*len;
		this._y += y*len;
		this._z += z*len;

		this.invalidatePosition();
	}

	/**
	 * Moves the 3d object along a vector by a defined length
	 *
	 * @param    axis        The vector defining the axis of movement
	 * @param    distance    The length of the movement
	 */
	public translateLocal(axis:Vector3D, distance:number):void
	{
		var x:number = axis.x, y:number = axis.y, z:number = axis.z;
		var len:number = distance/Math.sqrt(x*x + y*y + z*z);

		this.transform.prependTranslation(x*len, y*len, z*len);

		this._transform.copyColumnTo(3, this._pos);

		this._x = this._pos.x;
		this._y = this._pos.y;
		this._z = this._pos.z;

		this.invalidatePosition();
	}

	/**
	 * Rotates the 3d object around it's local x-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public pitch(angle:number):void
	{
		this.rotate(Vector3D.X_AXIS, angle);
	}

	/**
	 * Rotates the 3d object around it's local y-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public yaw(angle:number):void
	{
		this.rotate(Vector3D.Y_AXIS, angle);
	}

	/**
	 * Rotates the 3d object around it's local z-axis
	 *
	 * @param    angle        The amount of rotation in degrees
	 */
	public roll(angle:number):void
	{
		this.rotate(Vector3D.Z_AXIS, angle);
	}

	public clone():Object3D
	{
		var clone:Object3D = new Object3D();
		clone.pivotPoint = this.pivotPoint;
		clone.transform = this.transform;
		clone.name = this.name;
		// todo: implement for all subtypes
		return clone;
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
		this._rotationX = ax*MathConsts.DEGREES_TO_RADIANS;
		this._rotationY = ay*MathConsts.DEGREES_TO_RADIANS;
		this._rotationZ = az*MathConsts.DEGREES_TO_RADIANS;

		this.invalidateRotation();
	}

	/**
	 * Rotates the 3d object around an axis by a defined angle
	 *
	 * @param    axis        The vector defining the axis of rotation
	 * @param    angle        The amount of rotation in degrees
	 */
	public rotate(axis:Vector3D, angle:number):void
	{
		var m:Matrix3D = new Matrix3D();
		m.prependRotation(angle, axis);

		var vec:Vector3D = m.decompose()[1];

		this._rotationX += vec.x;
		this._rotationY += vec.y;
		this._rotationZ += vec.z;

		this.invalidateRotation();
	}

	private static tempAxeX:Vector3D;
	private static tempAxeY:Vector3D;
	private static tempAxeZ:Vector3D;
	/**
	 * Rotates the 3d object around to face a point defined relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
	 *
	 * @param    target        The vector defining the point to be looked at
	 * @param    upAxis        An optional vector used to define the desired up orientation of the 3d object after rotation has occurred
	 */
	public lookAt(target:Vector3D, upAxis:Vector3D = null):void
	{
		if(!Object3D.tempAxeX) Object3D.tempAxeX = new Vector3D();
		if(!Object3D.tempAxeY) Object3D.tempAxeY = new Vector3D();
		if(!Object3D.tempAxeZ) Object3D.tempAxeZ = new Vector3D();
		var xAxis:Vector3D = Object3D.tempAxeX;
		var yAxis:Vector3D = Object3D.tempAxeY;
		var zAxis:Vector3D = Object3D.tempAxeZ;

		var raw:number[];

		/*
		upAxis ||this.= Vector3D.Y_AXIS;

		if (this._transformDirty) {
			this.updateTransform();
		}

		zAxis.x = target.x - this._x;
		zAxis.y = target.y - this._y;
		zAxis.z = target.z - this._z;
		zAxis.normalize();

		xAxis.x = upAxis.y*zAxis.z - upAxis.z*zAxis.y;
		xAxis.y = upAxis.z*zAxis.x - upAxis.x*zAxis.z;
		xAxis.z = upAxis.x*zAxis.y - upAxis.y*zAxis.x;
		xAxis.normalize();

		if (xAxis.length < .05) {
			xAxis.x = upAxis.y;
			xAxis.y = upAxis.x;
			xAxis.z = 0;
			xAxis.normalize();
		}

		yAxis.x = zAxis.y*xAxis.z - zAxis.z*xAxis.y;
		yAxis.y = zAxis.z*xAxis.x - zAxis.x*xAxis.z;
		yAxis.z = zAxis.x*xAxis.y - zAxis.y*xAxis.x;
		raw = Matrix3DUtils.RAW_DATA_CONTAINER;

		raw[Number(0)] = this._scaleX*xAxis.x;
		raw[Number(1)] = this._scaleX*xAxis.y;
		raw[Number(2)] = this._scaleX*xAxis.z;
		raw[Number(3)] = 0;

		raw[Number(4)] = this._scaleY*yAxis.x;
		raw[Number(5)] = this._scaleY*yAxis.y;
		raw[Number(6)] = this._scaleY*yAxis.z;
		raw[Number(7)] = 0;

		raw[Number(8)] = this._scaleZ*zAxis.x;
		raw[Number(9)] = this._scaleZ*zAxis.y;
		raw[Number(10)] = this._scaleZ*zAxis.z;
		raw[Number(11)] = 0;

		raw[Number(12)] = this._x;
		raw[Number(13)] = this._y;
		raw[Number(14)] = this._z;
		raw[Number(15)] = 1;

		this._transform.copyRawDataFrom(raw);

		this.transform = this.transform;

		if (zAxis.z < 0) {
			this.rotationY = (180 - this.rotationY);
			this.rotationX -= 180;
			this.rotationZ -= 180;
		}
		*/
	}

	/**
	 * Cleans up any resources used by the current object.
	 */
	public dispose():void
	{
	}

	/**
	 * @inheritDoc
	 */
	public disposeAsset():void
	{
		this.dispose();
	}

	/**
	 * Invalidates the transformation matrix, causing it to be updated upon the next request
	 */
	/*arcane*/ invalidateTransform():void
{
	this._transformDirty = true;
}

	protected updateTransform():void
	{
		this._pos.x = this._x;
		this._pos.y = this._y;
		this._pos.z = this._z;

		this._rot.x = this._rotationX;
		this._rot.y = this._rotationY;
		this._rot.z = this._rotationZ;

		if (!this._pivotZero) {
			this._sca.x = 1;
			this._sca.y = 1;
			this._sca.z = 1;

			this._transform.recompose(this._transformComponents);
			this._transform.appendTranslation(this._pivotPoint.x, this._pivotPoint.y, this._pivotPoint.z);
			this._transform.prependTranslation(-this._pivotPoint.x, -this._pivotPoint.y, -this._pivotPoint.z);
			this._transform.prependScale(this._scaleX, this._scaleY, this._scaleZ);

			this._sca.x = this._scaleX;
			this._sca.y = this._scaleY;
			this._sca.z = this._scaleZ;
		}else{
			this._sca.x = this._scaleX;
			this._sca.y = this._scaleY;
			this._sca.z = this._scaleZ;

			this._transform.recompose(this._transformComponents);
		}

		this._transformDirty = false;
		this._positionDirty = false;
		this._rotationDirty = false;
		this._scaleDirty = false;
	}

	public get zOffset():number
	{
		return this._zOffset;
	}

	public set zOffset(value:number)
	{
		this._zOffset = value;
	}
}

