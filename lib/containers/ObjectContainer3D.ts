
import {IDisplayObjectAdapter, DisplayObjectContainer, DisplayObject} from "@awayjs/scene"
import {Vector3D, Matrix3D} from "@as3web/flash"
import { Scene3D } from "./Scene3D";
import { Object3D } from "../core/base/Object3D";
import { AssetType } from "../library/assets/AssetType";
import { IAsset } from "../library/assets/IAsset";



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
export class ObjectContainer3D extends Object3D implements IAsset
{
	/**
	 * Does not apply any transformations to this object. Allows static objects to be described in world coordinates without any matrix calculations.
	 */
	public get ignoreTransform():boolean
	{
		//todo
		return false;
	}

	public set ignoreTransform(value:boolean)
	{
		//todo
	}


	/**
	 * Indicates whether the IRenderable should trigger mouse events, and hence should be rendered for hit testing.
	 */
	public get mouseEnabled():boolean
	{
		return (<DisplayObjectContainer> this._adaptee).mouseEnabled;
	}

	public set mouseEnabled(value:boolean)
	{
		(<DisplayObjectContainer> this._adaptee).mouseEnabled = value;
	}


	/**
	 *
	 */
	public get mouseChildren():boolean
	{
		return (<DisplayObjectContainer> this._adaptee).mouseChildren;
	}

	public set mouseChildren(value:boolean)
	{
		(<DisplayObjectContainer> this._adaptee).mouseChildren = value;
	}

	/**
	 *
	 */
	public get visible():boolean
	{
		return (<DisplayObjectContainer> this._adaptee).visible;
	}

	public set visible(value:boolean)
	{
		(<DisplayObjectContainer> this._adaptee).visible=value;
	}

	public get assetType():string
	{
		return AssetType.CONTAINER;
	}

	/**
	 * The global position of the ObjectContainer3D in the scene. The value of the return object should not be changed.
	 */
	public get scenePosition():Vector3D
	{
		return (<DisplayObjectContainer> this._adaptee).scenePosition;
	}

	/**
	 * The minimum extremum of the object along the X-axis.
	 */
	public get minX():number
	{
		//todo
		return 0;
	}

	/**
	 * The minimum extremum of the object along the Y-axis.
	 */
	public get minY():number
	{
		//todo
		return 0;
	}

	/**
	 * The minimum extremum of the object along the Z-axis.
	 */
	public get minZ():number
	{
		//todo
		return 0;
	}

	/**
	 * The maximum extremum of the object along the X-axis.
	 */
	public get maxX():number
	{
		//todo
		return 0;
	}

	/**
	 * The maximum extremum of the object along the Y-axis.
	 */
	public get maxY():number
	{
		//todo
		return 0;
	}

	/**
	 * The maximum extremum of the object along the Z-axis.
	 */
	public get maxZ():number
	{
		//todo
		return 0;
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
	}

	/**
	 * The transformation matrix that transforms from model to world space.
	 */
	public get sceneTransform():Matrix3D
	{
		return (<DisplayObjectContainer> this._adaptee).transform.concatenatedMatrix3D;
	}

	/**
	 * A reference to the Scene3D object to which this object belongs.
	 */
	public get scene():Scene3D
	{
		//todo
		return null;
	}

	public set scene(value:Scene3D)
	{
		//todo
	}

	/**
	 * The inverse scene transform object that transforms from world to model space.
	 */
	public get inverseSceneTransform():Matrix3D
	{
		return (<DisplayObjectContainer> this._adaptee).transform.inverseConcatenatedMatrix3D;
	}

	/**
	 * The parent ObjectContainer3D to which this object's transformation is relative.
	 */
	public get parent():ObjectContainer3D
	{
		return <ObjectContainer3D> ((<DisplayObjectContainer> this._adaptee).parent? (<DisplayObjectContainer> this._adaptee).parent.adapter : null);
	}

	/**
	 * Creates a new ObjectContainer3D object.
	 */
	constructor(adaptee:DisplayObjectContainer = null)
	{
		super(adaptee || new DisplayObjectContainer());
	}

	public contains(child:Object3D):boolean
	{
		return (<DisplayObjectContainer> this._adaptee).getChildIndex(<DisplayObject> child.adaptee) >= 0;
	}

	/**
	 * Adds a child ObjectContainer3D to the current object. The child's transformation will become relative to the
	 * current object's transformation.
	 * @param child The object to be added as a child.
	 * @return A reference to the added child object.
	 */
	public addChild(child:Object3D):Object3D
	{
		(<DisplayObjectContainer> this._adaptee).addChild(<DisplayObject> child.adaptee);
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
			(<DisplayObjectContainer> this._adaptee).addChild(<DisplayObject> child.adaptee);
	}

	/**
	 * Removes a 3d object from the child array of the container
	 *
	 * @param    child    The 3d object to be removed
	 * @throws    Error    ObjectContainer3D.removeChild(null)
	 */
	public removeChild(child:Object3D):void
	{
		(<DisplayObjectContainer> this._adaptee).removeChild(<DisplayObject> child.adaptee);
	}

	/**
	 * Removes a 3d object from the child array of the container
	 *
	 * @param    index    Index of 3d object to be removed
	 */
	public removeChildAt(index:number):void
	{
		(<DisplayObjectContainer> this._adaptee).removeChildAt(index);
	}

	/**
	 * Retrieves the child object at the given index.
	 * @param index The index of the object to be retrieved.
	 * @return The child object at the given index.
	 */
	public getChildAt(index:number):ObjectContainer3D
	{
		return <ObjectContainer3D> (<DisplayObjectContainer> this._adaptee).getChildAt(index).adapter;
	}

	/**
	 * The amount of child objects of the ObjectContainer3D.
	 */
	public get numChildren():number
	{
		return (<DisplayObjectContainer> this._adaptee).numChildren;

	}

	/**
	 * @inheritDoc
	 */
	public lookAt(target:Vector3D, upAxis:Vector3D = null):void
	{
		(<DisplayObjectContainer> this._adaptee).lookAt(target, upAxis);
	}

	public translateLocal(axis:Vector3D, distance:number):void
	{
		(<DisplayObjectContainer> this._adaptee).transform.translateLocal(axis, distance);
	}

	/**
	 * Disposes the current ObjectContainer3D including all of its children. This is a merely a convenience method.
	 */
	public disposeWithChildren():void
	{
		// todo
	}

	/**
	 * Clones this ObjectContainer3D instance along with all it's children, and
	 * returns the result (which will be a copy of this container, containing copies
	 * of all it's children.)
	 */
	public clone():Object3D
	{
		return new ObjectContainer3D((<DisplayObjectContainer> this._adaptee).clone());
	}
}

