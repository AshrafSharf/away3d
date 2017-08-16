
import { Vector3D } from "@awayjs/core";
import { Scene } from "@awayjs/scene";

import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { Scene3D } from "../containers/Scene3D";
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
export class Entity extends ObjectContainer3D
{
	public set ignoreTransform(value:boolean)
	{
		//todo
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
		//todo
		return false;
	}

	public set shaderPickingDetails(value:boolean)
	{
		//todo
	}

	/**
	 * Defines whether or not the object will be moved or animated at runtime. This property is used by some partitioning systems to improve performance.
	 * Warning: if set to true, they may not be processed by certain partition systems using static visibility lists, unless they're specifically assigned to the visibility list.
	 */
	public get staticNode():boolean
	{
		//todo
		return false;
	}

	public set staticNode(value:boolean)
	{
		//todo
	}

	/**
	 * Returns a unique picking collision value object for the entity.
	 */
	public get pickingCollisionVO():any
	{
		//todo: any is PickingCollisionVO
		return null;
	}


	/**
	 *
	 */
	public get showBounds():boolean
	{
		//todo
		return false;
	}

	public set showBounds(value:boolean)
	{
		//todo
	}

	/**
	 * @inheritDoc
	 */
	public get minX():number
	{
		//todo
		return 0;//this._bounds.min.x;
	}

	/**
	 * @inheritDoc
	 */
	public get minY():number
	{
		//todo
		return 0;//this._bounds.min.y;
	}

	/**
	 * @inheritDoc
	 */
	public get minZ():number
	{
		//todo
		return 0;//this._bounds.min.z;
	}

	/**
	 * @inheritDoc
	 */
	public get maxX():number
	{
		//todo
		return 0;//this._bounds.max.x;
	}

	/**
	 * @inheritDoc
	 */
	public get maxY():number
	{
		//todo
		return 0;//this._bounds.max.y;
	}

	/**
	 * @inheritDoc
	 */
	public get maxZ():number
	{
		//todo
		return 0;//this._bounds.max.z;
	}

	/**
	 * The bounding volume approximating the volume occupied by the Entity.
	 */
	public get bounds():any
	{
		//todo: any=BoundingVolumeBase
		return null;// this._bounds;
	}

	public set bounds(value:any)
	{
		//todo any = BoundingVolumeBase
	}

	public get worldBounds():any
	{
		//todo any = BoundingVolumeBase
		return null;
	}

	private updateWorldBounds():void
	{
		//todo
	}


	/**
	 * @inheritDoc
	 */
	public set scene(value:Scene3D)
	{
		//todo
		//this.adaptee.scene=(<Scene>value.adaptee);
	}

	public get assetType():string
	{
		return AssetType.ENTITY;
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
		return null;
	}

	public set pickingCollider(value:any)
	{
		//todo: any = IPickingcollider
	}

	/**
	 * Creates a new Entity object.
	 */
	constructor(){
		super();
	}

	/**
	 * Gets a concrete EntityPartition3DNode subclass that is associated with this Entity instance
	 */
	public getEntityPartitionNode():any
	{
		// todo: any = EntityNode
		return null;
	}

	public isIntersectingRay(rayPosition:Vector3D, rayDirection:Vector3D):boolean
	{
		return true;
	}

}

