
import {DisplayObjectContainer} from "@awayjs/scene"
import {Vector3D, Matrix3D} from "@awayjs/core"
import { Scene3D } from "./Scene3D";
import { Object3D } from "../core/base/Object3D";
//import { Partition3D } from "../core/partition/Partition3D";
//import { Object3DEvent } from "../events/Object3DEvent";
//import { Scene3DEvent } from "../events/Scene3DEvent";
import {AssetType} from "../library/assets/AssetType";
//import {IAsset} from "../library/assets/IAsset";


import { Event } from "@as3web/flash"
import { EventBase } from "@awayjs/core"

	/*use namespace arcane*/;

/**
 * Dispatched when the scene transform matrix of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #sceneTransform
 */
/*[Event(name="scenetransformChanged", type="away3d.events.Object3DEvent")]*/

/**
 * Dispatched when the parent scene of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #scene
 */
/*[Event(name="sceneChanged", type="away3d.events.Object3DEvent")]*/

/**
 * Dispatched when a user moves the cursor while it is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseMove3d", type="away3d.events.MouseEvent3D")]*/

/**
 * Dispatched when a user presses the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseDown3d", type="away3d.events.MouseEvent3D")]*/

/**
 * Dispatched when a user releases the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseUp3d", type="away3d.events.MouseEvent3D")]*/

/**
 * Dispatched when a user moves the cursor over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseOver3d", type="away3d.events.MouseEvent3D")]*/

/**
 * Dispatched when a user moves the cursor away from the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseOut3d", type="away3d.events.MouseEvent3D")]*/

/**
 * ObjectContainer3D is the most basic scene graph node. It can contain other ObjectContainer3Ds.
 *
 * ObjectContainer3D can have its own scene partition assigned. However, when assigned to a different scene,
 * it will loose any partition information, since partitions are tied to a scene.
 */
export class ObjectContainer3D extends Object3D //implements IAsset
{
	/** @private */
	/*arcane*/ _ancestorsAllowMouseEnabled:boolean;
	/*arcane*/ _isRoot:boolean;

	protected _scene:Scene3D;
	protected _parent:ObjectContainer3D;
	protected _sceneTransform:Matrix3D = new Matrix3D();
	protected _sceneTransformDirty:boolean = true;
	// these vars allow not having to traverse the scene graph to figure out what partition is set
	//protected _explicitPartition:Partition3D; // what the user explicitly set as the partition
	//protected _implicitPartition:Partition3D; // what is inherited from the parents if it doesn't have its own explicitPartition
	protected _mouseEnabled:boolean;
	//private _sceneTransformChanged:Object3DEvent;
	//private _scenechanged:Object3DEvent;
	private _children:ObjectContainer3D[] = [];
	private _mouseChildren:boolean = true;
	private _oldScene:Scene3D;
	private _inverseSceneTransform:Matrix3D = new Matrix3D();
	private _inverseSceneTransformDirty:boolean = true;
	private _scenePosition:Vector3D = new Vector3D();
	private _scenePositionDirty:boolean = true;
	private _explicitVisibility:boolean = true;
	private _implicitVisibility:boolean = true;
	private _listenToSceneTransformChanged:boolean;
	private _listenToSceneChanged:boolean;
	// visibility passed on from parents

	protected _ignoreTransform:boolean = false;

	/**
	 * Does not apply any transformations to this object. Allows static objects to be described in world coordinates without any matrix calculations.
	 */
	public get ignoreTransform():boolean
	{
		return this._ignoreTransform;
	}

	public set ignoreTransform(value:boolean)
	{
		this._ignoreTransform = value;
		this._sceneTransformDirty = !value;
		this._inverseSceneTransformDirty = !value;
		this._scenePositionDirty = !value;

		if (!value) {
			this._sceneTransform.identity();
			this._scenePosition.setTo(0, 0, 0);
		}
	}

	/**
	 * @private
	 * The space partition used for this object, possibly inherited from its parent.
	 */
	/*arcane*/
	/*get implicitPartition():Partition3D
{
	return this._implicitPartition;
}
*/
	/*arcane*/ /*set implicitPartition(value:Partition3D)
{
	if (value == this._implicitPartition)
		return;

	var i:number;
	var len:number = this._children.length;
	var child:ObjectContainer3D;

	this._implicitPartition = value;

	while (i < len) {
		child = this._children[i++];

		// assign implicit partition if no explicit one is given
		if (!child._explicitPartition)
			child.implicitPartition = value;
	}
}*/

	/** @private */
	/*arcane*/ get isVisible():boolean
{
	return this._implicitVisibility && this._explicitVisibility;
}

	/** @private */
	/*arcane*/ setParent(value:ObjectContainer3D):void
{
	this._parent = value;

	this.updateMouseChildren();

	if (value == null) {
		this.scene = null;
		return;
	}

	this.notifySceneTransformChange();
	this.notifySceneChange();
}

	private notifySceneTransformChange():void
	{
		if (this._sceneTransformDirty || this._ignoreTransform)
			return;

		this.invalidateSceneTransform();

		var i:number;
		var len:number = this._children.length;

		//act recursively on child objects
		while (i < len)
			this._children[i++].notifySceneTransformChange();

		//trigger event if listener exists
		if (this._listenToSceneTransformChanged) {
			//if (!this._sceneTransformChanged)
			//	this._sceneTransformChanged = new Object3DEvent(Object3DEvent.SCENETRANSFORM_CHANGED, this);
			//this.dispatchEvent(this._sceneTransformChanged);
		}
	}

	private notifySceneChange():void
	{
		this.notifySceneTransformChange();

		var i:number;
		var len:number = this._children.length;

		//act recursively on child objects
		while (i < len)
			this._children[i++].notifySceneChange();

		if (this._listenToSceneChanged) {
			//if (!this._scenechanged)
			//	this._scenechanged = new Object3DEvent(Object3DEvent.SCENE_CHANGED, this);

			//this.dispatchEvent(this._scenechanged);
		}
	}

	protected updateMouseChildren():void
	{
		if (this._parent && !this._parent._isRoot) {
			// Set implicit mouse enabled if parent its children to be so.
			this._ancestorsAllowMouseEnabled = this.parent._ancestorsAllowMouseEnabled && this._parent.mouseChildren;
		} else
			this._ancestorsAllowMouseEnabled = this.mouseChildren;

		// Sweep children.
		var len:number = this._children.length;
		for (var i:number = 0; i < len; ++i)
			this._children[i].updateMouseChildren();
	}

	/**
	 * Indicates whether the IRenderable should trigger mouse events, and hence should be rendered for hit testing.
	 */
	public get mouseEnabled():boolean
	{
		return this._mouseEnabled;
	}

	public set mouseEnabled(value:boolean)
	{
		this._mouseEnabled = value;
		this.updateMouseChildren();
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ /*arcane*/ invalidateTransform():void
{
	super.invalidateTransform();

	this.notifySceneTransformChange();
}

	/**
	 * Invalidates the scene transformation matrix, causing it to be updated the next time it's requested.
	 */
	protected invalidateSceneTransform():void
	{
		this._sceneTransformDirty = !this._ignoreTransform;
		this._inverseSceneTransformDirty = !this._ignoreTransform;
		this._scenePositionDirty = !this._ignoreTransform;
	}

	/**
	 * Updates the scene transformation matrix.
	 */
	protected updateSceneTransform():void
	{
		if (this._parent && !this._parent._isRoot) {
			this._sceneTransform.copyFrom(this._parent.sceneTransform);
			this._sceneTransform.prepend(this.transform);
		} else
			this._sceneTransform.copyFrom(this.transform);

		this._sceneTransformDirty = false;
	}

	/**
	 *
	 */
	public get mouseChildren():boolean
	{
		return this._mouseChildren;
	}

	public set mouseChildren(value:boolean)
	{
		this._mouseChildren = value;
		this.updateMouseChildren();
	}

	/**
	 *
	 */
	public get visible():boolean
	{
		return this._explicitVisibility;
	}

	public set visible(value:boolean)
	{
		var len:number = this._children.length;

		this._explicitVisibility = value;

		for (var i:number = 0; i < len; ++i)
			this._children[i].updateImplicitVisibility();
	}

	public get assetType():string
	{
		return "";//AssetType.CONTAINER;
	}

	/**
	 * The global position of the ObjectContainer3D in the scene. The value of the return object should not be changed.
	 */
	public get scenePosition():Vector3D
	{
		if (this._scenePositionDirty) {
			this.sceneTransform.copyColumnTo(3, this._scenePosition);
			this._scenePositionDirty = false;
		}

		return this._scenePosition;
	}

	/**
	 * The minimum extremum of the object along the X-axis.
	 */
	public get minX():number
	{
		var i:number;
		var len:number = this._children.length;
		var min:number = Number.POSITIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.minX + child.x;
			if (m < min)
				min = m;
		}

		return min;
	}

	/**
	 * The minimum extremum of the object along the Y-axis.
	 */
	public get minY():number
	{
		var i:number;
		var len:number = this._children.length;
		var min:number = Number.POSITIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.minY + child.y;
			if (m < min)
				min = m;
		}

		return min;
	}

	/**
	 * The minimum extremum of the object along the Z-axis.
	 */
	public get minZ():number
	{
		var i:number;
		var len:number = this._children.length;
		var min:number = Number.POSITIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.minZ + child.z;
			if (m < min)
				min = m;
		}

		return min;
	}

	/**
	 * The maximum extremum of the object along the X-axis.
	 */
	public get maxX():number
	{
		// todo: this isn't right, doesn't take into account transforms
		var i:number;
		var len:number = this._children.length;
		var max:number = Number.NEGATIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.maxX + child.x;
			if (m > max)
				max = m;
		}

		return max;
	}

	/**
	 * The maximum extremum of the object along the Y-axis.
	 */
	public get maxY():number
	{
		var i:number;
		var len:number = this._children.length;
		var max:number = Number.NEGATIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.maxY + child.y;
			if (m > max)
				max = m;
		}

		return max;
	}

	/**
	 * The maximum extremum of the object along the Z-axis.
	 */
	public get maxZ():number
	{
		var i:number;
		var len:number = this._children.length;
		var max:number = Number.NEGATIVE_INFINITY;
		var m:number;

		while (i < len) {
			var child:ObjectContainer3D = this._children[i++];
			m = child.maxZ + child.z;
			if (m > max)
				max = m;
		}

		return max;
	}

	/**
	 * The space partition to be used by the object container and all its recursive children, unless it has its own
	 * space partition assigned.
	 */
	public get partition():any
	{
		//todo any is Partition3D
		return null;//this._explicitPartition;
	}

	public set partition(value:any)
	{
		//todo any is Partition3D
		//this._explicitPartition = value;

		//this.implicitPartition = value? value : (this._parent? this._parent.implicitPartition : null);
	}

	/**
	 * The transformation matrix that transforms from model to world space.
	 */
	public get sceneTransform():Matrix3D
	{
		if (this._sceneTransformDirty)
			this.updateSceneTransform();

		return this._sceneTransform;
	}

	/**
	 * A reference to the Scene3D object to which this object belongs.
	 */
	public get scene():Scene3D
	{
		return this._scene;
	}

	public set scene(value:Scene3D)
	{
		var i:number;
		var len:number = this._children.length;

		while (i < len)
			this._children[i++].scene = value;

		if (this._scene == value)
			return;

		// test to see if we're switching roots while we're already using a scene partition
		if (value == null)
			this._oldScene = this._scene;

		//if (this._explicitPartition && this._oldScene && this._oldScene != this._scene)
		//	this.partition = null;

		if (value)
			this._oldScene = null;
		// end of stupid partition test code

		this._scene = value;

		//if (this._scene)
		//	this._scene.dispatchEvent(new Scene3DEvent(Scene3DEvent.ADDED_TO_SCENE, this));
		//else if (this._oldScene)
		//	this._oldScene.dispatchEvent(new Scene3DEvent(Scene3DEvent.REMOVED_FROM_SCENE, this));
	}

	/**
	 * The inverse scene transform object that transforms from world to model space.
	 */
	public get inverseSceneTransform():Matrix3D
	{
		if (this._inverseSceneTransformDirty) {
			this._inverseSceneTransform.copyFrom(this.sceneTransform);
			this._inverseSceneTransform.invert();
			this._inverseSceneTransformDirty = false;
		}

		return this._inverseSceneTransform;
	}

	/**
	 * The parent ObjectContainer3D to which this object's transformation is relative.
	 */
	public get parent():ObjectContainer3D
	{
		return this._parent;
	}

	/**
	 * Creates a new ObjectContainer3D object.
	 */
	constructor(){
		super();
	}

	public contains(child:ObjectContainer3D):boolean
	{
		return this._children.indexOf(child) >= 0;
	}

	/**
	 * Adds a child ObjectContainer3D to the current object. The child's transformation will become relative to the
	 * current object's transformation.
	 * @param child The object to be added as a child.
	 * @return A reference to the added child object.
	 */
	public addChild(child:ObjectContainer3D):ObjectContainer3D
	{
		if (child == null)
			throw new Error("Parameter child cannot be null.");

		if (child._parent)
			child._parent.removeChild(child);

		//if (!child._explicitPartition)
		//	child.implicitPartition = this._implicitPartition;

		child.setParent(this);
		child.scene = this._scene;
		child.notifySceneTransformChange();
		child.updateMouseChildren();
		child.updateImplicitVisibility();

		this._children.push(child);

		return child;
	}

	/**
	 * Adds an array of 3d objects to the scene as children of the container
	 *
	 * @param    childArray        An array of 3d objects to be added
	 */
	public addChildren(childArray:Object3D[]):void
	{
		let child:Object3D;
		for  (child of childArray)
			this.addChild((<ObjectContainer3D>child));
	}

	/**
	 * Removes a 3d object from the child array of the container
	 *
	 * @param    child    The 3d object to be removed
	 * @throws    Error    ObjectContainer3D.removeChild(null)
	 */
	public removeChild(child:ObjectContainer3D):void
	{
		if (child == null)
			throw new Error("Parameter child cannot be null");

		var childIndex:number = this._children.indexOf(child);

		if (childIndex == -1)
			throw new Error("Parameter is not a child of the caller");

		this.removeChildInternal(childIndex, child);
	}

	/**
	 * Removes a 3d object from the child array of the container
	 *
	 * @param    index    Index of 3d object to be removed
	 */
	public removeChildAt(index:number):void
	{
		var child:ObjectContainer3D = this._children[index];

		this.removeChildInternal(index, child);
	}

	private removeChildInternal(childIndex:number, child:ObjectContainer3D):void
	{
		// index is important because getChildAt needs to be regular.
		this._children.splice(childIndex, 1);

		// this needs to be nullified before the callbacks!
		child.setParent(null);

		//if (!child._explicitPartition)
		//	child.implicitPartition = null;
	}

	/**
	 * Retrieves the child object at the given index.
	 * @param index The index of the object to be retrieved.
	 * @return The child object at the given index.
	 */
	public getChildAt(index:number):ObjectContainer3D
	{
		return this._children[index];
	}

	/**
	 * The amount of child objects of the ObjectContainer3D.
	 */
	public get numChildren():number
	{
		return this._children.length;
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ public lookAt(target:Vector3D, upAxis:Vector3D = null):void
{
	super.lookAt(target, upAxis);

	this.notifySceneTransformChange();
}

	/*override*/ public translateLocal(axis:Vector3D, distance:number):void
{
	super.translateLocal(axis, distance);

	this.notifySceneTransformChange();
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public dispose():void
{
	if (this.parent)
		this.parent.removeChild(this);
}

	/**
	 * Disposes the current ObjectContainer3D including all of its children. This is a merely a convenience method.
	 */
	public disposeWithChildren():void
	{
		this.dispose();

		while (this.numChildren > 0)
			this.getChildAt(0).dispose();
	}

	/**
	 * Clones this ObjectContainer3D instance along with all it's children, and
	 * returns the result (which will be a copy of this container, containing copies
	 * of all it's children.)
	 */
	/*override*/ public clone():Object3D
{
	var clone:ObjectContainer3D = new ObjectContainer3D();
	clone.pivotPoint = this.pivotPoint;
	clone.transform = this.transform;
	clone.partition = this.partition;
	clone.name = this.name;

	var len:number = this._children.length;

	for (var i:number = 0; i < len; ++i)
		clone.addChild(<ObjectContainer3D>(this._children[i].clone()));

	// todo: implement for all subtypes
	return clone;
}

	/*override*/ public rotate(axis:Vector3D, angle:number):void
{
	super.rotate(axis, angle);

	this.notifySceneTransformChange();
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public dispatchEvent(event:Event):boolean
{
	// maybe not the best way to fake bubbling?
	/*
	var ret:boolean = super.dispatchEvent(event);

	if (event.bubbles) {
		if (this._parent)
			this._parent.dispatchEvent(event);
		// if it's scene root
		else if (this._scene)
			this._scene.dispatchEvent(event);
	}
*/
	return false;
}

	public updateImplicitVisibility():void
	{
		var len:number = this._children.length;

		this._implicitVisibility = this._parent._explicitVisibility && this._parent._implicitVisibility;

		for (var i:number = 0; i < len; ++i)
			this._children[i].updateImplicitVisibility();
	}

	/*override*/ public addEventListener(type:string, listener:(event:EventBase) => void, useCapture:boolean = false, priority:number = 0, useWeakReference:boolean = false):void
{
	super.addEventListener(type, listener, useCapture, priority, useWeakReference);
	/*switch (type) {
		case Object3DEvent.SCENETRANSFORM_CHANGED:
			this._listenToSceneTransformChanged = true;
			break;
		case Object3DEvent.SCENE_CHANGED:
			this._listenToSceneChanged = true;
			break;
	}*/
}

	/*override*/ public removeEventListener(type:string, listener:(event:EventBase) => void, useCapture:boolean = false):void
{
	super.removeEventListener(type, listener, useCapture);

	if (this.hasEventListener(type))
		return;
/*
	switch (type) {
		case Object3DEvent.SCENETRANSFORM_CHANGED:
			this._listenToSceneTransformChanged = false;
			break;
		case Object3DEvent.SCENE_CHANGED:
			this._listenToSceneChanged = false;
			break;
	}*/
}
}

