//import { EntityNode } from "./EntityNode";
//import { PickingCollisionVO } from "./PickingCollisionVO";
//import { IPickingCollider } from "./IPickingCollider";
//import { BoundingVolumeBase } from "./BoundingVolumeBase";
//import { Partition3D } from "./Partition3D";
//import { AssetType } from "./AssetType";
import { Vector3D } from "@awayjs/core";
//import { AbstractMethodError } from "./AbstractMethodError";
//import { AxisAlignedBoundingBox } from "./AxisAlignedBoundingBox";
/*import away3d.bounds.*;*/
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { Scene3D } from "../containers/Scene3D";

//import { Matrix3DUtils } from "../core/math/Matrix3DUtils";
/*import away3d.core.partition.*;*/
/*import away3d.core.pick.*;*/
/*import away3d.errors.*;*/
/*import away3d.library.assets.*;*/

/*import flash.geom.*;*/

/*use namespace arcane*/;

/**
 * The Entity class provides an abstract base class for all scene graph objects that are considered having a
 * "presence" in the scene, in the sense that it can be considered an actual object with a position and a size (even
 * if infinite or idealised), rather than a grouping.
 * Entities can be partitioned in a space partitioning system and in turn collected by an EntityCollector.
 *
 * @see away3d.partition.Partition3D
 * @see away3d.core.traverse.EntityCollector
 */
export class Entity extends ObjectContainer3D
{
	private _showBounds:boolean;
	//private _partitionNode:EntityNode;
	private _boundsIsShown:boolean = false;
	private _shaderPickingDetails:boolean;

	// _pickingCollisionVO:PickingCollisionVO;
	// _pickingCollider:IPickingCollider;
	 _staticNode:boolean;

	/*protected _bounds:BoundingVolumeBase;
	protected _boundsInvalid:boolean = true;
	private _worldBounds:BoundingVolumeBase;
	private _worldBoundsInvalid:boolean = true;
*/
	/*override*/ public set ignoreTransform(value:boolean)
{
	/*if (this._scene)
		this._scene.invalidateEntityBounds(this);
	super.ignoreTransform = value;*/
}

	/**
	 * Used by the shader-based picking system to determine whether a separate render pass is made in order
	 * to offer more details for the picking collision object, including local position, normal vector and uv value.
	 * Defaults to false.
	 *
	 * @see away3d.core.pick.ShaderPicker
	 */
	public get shaderPickingDetails():boolean
	{
		return this._shaderPickingDetails;
	}

	public set shaderPickingDetails(value:boolean)
	{
		this._shaderPickingDetails = value;
	}

	/**
	 * Defines whether or not the object will be moved or animated at runtime. This property is used by some partitioning systems to improve performance.
	 * Warning: if set to true, they may not be processed by certain partition systems using static visibility lists, unless they're specifically assigned to the visibility list.
	 */
	public get staticNode():boolean
	{
		return this._staticNode;
	}

	public set staticNode(value:boolean)
	{
		this._staticNode = value;
	}

	/**
	 * Returns a unique picking collision value object for the entity.
	 */
	public get pickingCollisionVO():any
	{
		//todo: any is PickingCollisionVO
		/*
		if (!this._pickingCollisionVO)
			this._pickingCollisionVO = new PickingCollisionVO(this);

		return this._pickingCollisionVO;
		*/
		return null;
	}

	/**
	 * Tests if a collision occurs before shortestCollisionDistance, using the data stored in PickingCollisionVO.
	 * @param shortestCollisionDistance
	 * @return
	 */
	/*arcane*/ public collidesBefore(shortestCollisionDistance:number, findClosest:boolean):boolean
{
	//shortestCollisionDistance = shortestCollisionDistance;
	//findClosest = findClosest;
	return true;
}

	/**
	 *
	 */
	public get showBounds():boolean
	{
		return this._showBounds;
	}

	public set showBounds(value:boolean)
	{
		if (value == this._showBounds)
			return;

		this._showBounds = value;

		if (this._showBounds)
			this.addBounds();
		else
			this.removeBounds();
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get minX():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.min.x;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get minY():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.min.y;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get minZ():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.min.z;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get maxX():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.max.x;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get maxY():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.max.y;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public get maxZ():number
{
	/*if (this._boundsInvalid)
		this.updateBounds();
*/
	return 0;//this._bounds.max.z;
}

	/**
	 * The bounding volume approximating the volume occupied by the Entity.
	 */
	public get bounds():any
	{
		//todo: any=BoundingVolumeBase
		/*if (this._boundsInvalid)
			this.updateBounds();
*/
		return null;// this._bounds;
	}

	public set bounds(value:any)
	{
		//todo any = BoundingVolumeBase
		//this.removeBounds();
		//this._bounds = value;
		//this._worldBounds = value.clone();
		//this.invalidateBounds();
		//if (this._showBounds)
		//	this.addBounds();
	}

	public get worldBounds():any
	{
		//todo any = BoundingVolumeBase
		/*
		if (this._worldBoundsInvalid)
			this.updateWorldBounds();

		return this._worldBounds;*/
		return null;
	}

	private updateWorldBounds():void
	{
		//this._worldBounds.transformFrom(this.bounds, this.sceneTransform);
		//this._worldBoundsInvalid = false;
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ /*arcane*/
	public set implicitPartition(value:any)
{
	//todo: any = Partition3D
	/*
	if (value == this._implicitPartition)
		return;

	if (this._implicitPartition)
		this.notifyPartitionUnassigned();

	super.implicitPartition = value;

	this.notifyPartitionAssigned();
	*/
}

	/**
	 * @inheritDoc
	 */
	/*override*/ public set scene(value:Scene3D)
{
	if (value == this._scene)
		return;

	//if (this._scene)
	//	this._scene.unregisterEntity(this);

	// callback to notify object has been spawned. Casts to please FDT
	//if (value)
	//	value.registerEntity(this);

	//super.scene = value;
}

	/*override*/ public get assetType():string
{
	return "";//AssetType.ENTITY;
}

	/**
	 * Used by the raycast-based picking system to determine how the geometric contents of an entity are processed
	 * in order to offer more details for the picking collision object, including local position, normal vector and uv value.
	 * Defaults to null.
	 *
	 * @see away3d.core.pick.RaycastPicker
	 */
	public get pickingCollider():any
	{
		//todo: any = IPickingcollider
		return null;//this._pickingCollider;
	}

	public set pickingCollider(value:any)
	{
		//todo: any = IPickingcollider
		//this._pickingCollider = value;
	}

	/**
	 * Creates a new Entity object.
	 */
	constructor(){
		super();

		//this._bounds = this.getDefaultBoundingVolume();
		//this._worldBounds = this.getDefaultBoundingVolume();
	}

	/**
	 * Gets a concrete EntityPartition3DNode subclass that is associated with this Entity instance
	 */
	public getEntityPartitionNode():any
	{
		// todo: any = EntityNode
		return null;//this._partitionNode ||this.= this.createEntityPartitionNode();
	}

	public isIntersectingRay(rayPosition:Vector3D, rayDirection:Vector3D):boolean
	{
		//if(!this.pickingCollisionVO.localRayPosition) this.pickingCollisionVO.localRayPosition = new Vector3D();
		//if(!this.pickingCollisionVO.localRayDirection) this.pickingCollisionVO.localRayDirection = new Vector3D();
		//if(!this.pickingCollisionVO.localNormal) this.pickingCollisionVO.localNormal = new Vector3D();
/*
		// convert ray to entity space
		var localRayPosition:Vector3D = this.pickingCollisionVO.localRayPosition;
		var localRayDirection:Vector3D = this.pickingCollisionVO.localRayDirection;
		//Matrix3DUtils.transformVector(this.inverseSceneTransform, rayPosition, localRayPosition);
		//Matrix3DUtils.deltaTransformVector(this.inverseSceneTransform, rayDirection, localRayDirection);

		// check for ray-bounds collision
		var rayEntryDistance:number = this.bounds.rayIntersection(localRayPosition, localRayDirection, this.pickingCollisionVO.localNormal);
		if (rayEntryDistance < 0)
			return false;

		// Store collision data.
		this.pickingCollisionVO.rayEntryDistance = rayEntryDistance;
		this.pickingCollisionVO.rayPosition = rayPosition;
		this.pickingCollisionVO.rayDirection = rayDirection;
		this.pickingCollisionVO.rayOriginIsInsideBounds = rayEntryDistance == 0;

 */
		return true;
	}

	/**
	 * Factory method that returns the current partition node. Needs to be overridden by concrete subclasses
	 * such as Mesh to return the correct concrete subtype of EntityPartition3DNode (for Mesh = MeshPartition3DNode,
	 * most IRenderables (particles fe) would return RenderablePartition3DNode, I suppose)
	 */
	protected createEntityPartitionNode():any
	{
		// todo: any = EntityNode
		//throw new AbstractMethodError();
	}

	/**
	 * Creates the default bounding box to be used by this type of Entity.
	 * @return
	 */
	protected getDefaultBoundingVolume():any
	{
		// todo: any = BoundingVolumeBase
		// point lights should be using sphere bounds
		// directional lights should be using null bounds
		return null;//new AxisAlignedBoundingBox();
	}

	/**
	 * Updates the bounding volume for the object. Overriding methods need to set invalid flag to false!
	 */
	protected updateBounds():void
	{
		//throw new AbstractMethodError();
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ protected invalidateSceneTransform():void
{
	if (!this._ignoreTransform) {
		super.invalidateSceneTransform();
		//this._worldBoundsInvalid = true;
		this.notifySceneBoundsInvalid();
	}
}

	/**
	 * Invalidates the bounding volume, causing to be updated when requested.
	 */
	protected invalidateBounds():void
	{
		//this._boundsInvalid = true;
		//this._worldBoundsInvalid = true;
		this.notifySceneBoundsInvalid();
	}

	/*override*/ protected updateMouseChildren():void
{
	// If there is a parent and this child does not have a triangle collider, use its parent's triangle collider.
	if (this._parent && !this.pickingCollider) {
		if (this._parent instanceof Entity) {
			//var collider:IPickingCollider = <Entity>(this._parent).pickingCollider;
			//if (collider)
			//	this.pickingCollider = collider;
		}
	}

	super.updateMouseChildren();
}

	/**
	 * Notify the scene that the global scene bounds have changed, so it can be repartitioned.
	 */
	private notifySceneBoundsInvalid():void
	{
		//if (this._scene)
		//	this._scene.invalidateEntityBounds(this);
	}

	/**
	 * Notify the scene that a new partition was assigned.
	 */
	private notifyPartitionAssigned():void
	{
		//if (this._scene)
		//	this._scene.registerPartition(this); //_onAssignPartitionCallback(this);
	}

	/**
	 * Notify the scene that a partition was unassigned.
	 */
	private notifyPartitionUnassigned():void
	{
		//if (this._scene)
		//	this._scene.unregisterPartition(this);
	}

	private addBounds():void
	{
		//if (!this._boundsIsShown) {
		//	this._boundsIsShown = true;
		//	this.addChild(this._bounds.boundingRenderable);
		//}
	}

	private removeBounds():void
	{
		/*if (this._boundsIsShown) {
			this._boundsIsShown = false;
			this.removeChild(this._bounds.boundingRenderable);
			this._bounds.disposeRenderable();
		}*/
	}

	/*arcane*/ internalUpdate():void
{
	//if (this._controller)
	//	this._controller.update();
}
}

