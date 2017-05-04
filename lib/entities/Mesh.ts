import { Entity } from "./Entity";
//import { IMaterialOwner } from "./IMaterialOwner";
//import { IAsset } from "./IAsset";
import { SubMesh } from "../core/base/SubMesh";
import { Geometry } from "../core/base/Geometry";
import { AssetType } from "../library/assets/AssetType";
//import { GeometryEvent } from "../events/GeometryEvent";
import { ISubGeometry } from "../core/base/ISubGeometry";
import { Object3D } from "../core/base/Object3D";
//import { EntityNode } from "./EntityNode";
//import { MeshNode } from "./MeshNode";
//import {DefaultMaterialManager} from "./materials/utils/DefaultMaterialManager";
//import {IAnimator} from "./animators/IAnimator";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";

/*import away3d.core.base.*;*/
/*import away3d.core.partition.*;*/
/*import away3d.events.*;*/
/*import away3d.library.assets.*;*/
import {MaterialBase} from "../materials/MaterialBase";


/*use namespace arcane*/;

/**
 * Mesh is an instance of a Geometry, augmenting it with a presence in the scene graph, a material, and an animation
 * state. It consists out of SubMeshes, which in turn correspond to SubGeometries. SubMeshes allow different parts
 * of the geometry to be assigned different materials.
 */
export class Mesh extends Entity// implements IMaterialOwner, IAsset
{
	private _subMeshes:SubMesh[];
	protected _geometry:Geometry;
	private _material:MaterialBase;
	//private _animator:IAnimator;
	private _castsShadows:boolean = true;
	private _shareAnimationGeometry:boolean = true;

	/**
	 * Create a new Mesh object.
	 *
	 * @param geometry                    The geometry used by the mesh that provides it with its shape.
	 * @param material    [optional]        The material with which to render the Mesh.
	 */
	constructor(geometry:Geometry, material:MaterialBase = null){
		super();
		this._subMeshes = [];

		this.geometry = geometry || new Geometry(); //this should never happen, but if people insist on trying to create their meshes before they have geometry to fill it, it becomes necessary

		//this.material = material || DefaultMaterialManager.getDefaultMaterial(this);
	}

	public bakeTransformations():void
	{
		this.geometry.applyTransformation(this.transform);
		this.transform.identity();
	}

	public /*override*/ get assetType():string
	{
		return "";//AssetType.MESH;
	}

	private onGeometryBoundsInvalid(event:any):void
	{
		//  todo any = GeometryEvent
		this.invalidateBounds();
	}

	/**
	 * Indicates whether or not the Mesh can cast shadows. Default value is <code>true</code>.
	 */
	public get castsShadows():boolean
	{
		return this._castsShadows;
	}

	public set castsShadows(value:boolean)
	{
		this._castsShadows = value;
	}

	/**
	 * Defines the animator of the mesh. Act on the mesh's geometry. Default value is <code>null</code>.
	 */
	public get animator():any
	{
		//  todo any = IAnimator
		return null;//this._animator;
	}

	public set animator(value:any)
	{
		//  todo any = IAnimator
		/*
		if (this._animator)
			this._animator.removeOwner(this);

		this._animator = value;
		*/

		// cause material to be unregistered and registered again to work with the new animation type (if possible)
		var oldMaterial:MaterialBase = this.material;
		this.material = null;
		this.material = oldMaterial;

		var len:number = this._subMeshes.length;
		var subMesh:SubMesh;

		/*
		// reassign for each SubMesh
		for (var i:number = 0; i < len; ++i) {
			subMesh = this._subMeshes[i];
			oldMaterial = subMesh._material;
			if (oldMaterial) {
				subMesh.material = null;
				subMesh.material = oldMaterial;
			}
		}

		if (this._animator)
			this._animator.addOwner(this);
			*/
	}

	/**
	 * The geometry used by the mesh that provides it with its shape.
	 */
	public get geometry():Geometry
	{
		return this._geometry;
	}

	public set geometry(value:Geometry)
	{
		var i:number;
/*
		if (this._geometry) {
			this._geometry.removeEventListener(GeometryEvent.BOUNDS_INVALID, this.onGeometryBoundsInvalid);
			this._geometry.removeEventListener(GeometryEvent.SUB_GEOMETRY_ADDED, this.onSubGeometryAdded);
			this._geometry.removeEventListener(GeometryEvent.SUB_GEOMETRY_REMOVED, this.onSubGeometryRemoved);

			for (i = 0; i < this._subMeshes.length; ++i)
				this._subMeshes[i].dispose();
			this._subMeshes.length = 0;
		}

		this._geometry = value;
		if (this._geometry) {
			this._geometry.addEventListener(GeometryEvent.BOUNDS_INVALID, this.onGeometryBoundsInvalid);
			this._geometry.addEventListener(GeometryEvent.SUB_GEOMETRY_ADDED, this.onSubGeometryAdded);
			this._geometry.addEventListener(GeometryEvent.SUB_GEOMETRY_REMOVED, this.onSubGeometryRemoved);

			var subGeoms:ISubGeometry[] = this._geometry.subGeometries;

			for (i = 0; i < subGeoms.length; ++i)
				this.addSubMesh(subGeoms[i]);
		}

		if (this._material) {
			// reregister material in case geometry has a different animation
			this._material.removeOwner(this);
			this._material.addOwner(this);
		}
		*/
	}

	/**
	 * The material with which to render the Mesh.
	 */
	public get material():MaterialBase
	{
		return this._material;
	}

	public set material(value:MaterialBase)
	{
		if (value == this._material)
			return;
		//if (this._material)
		//	this._material.removeOwner(this);
		//this._material = value;
		//if (this._material)
		//	this._material.addOwner(this);
	}

	/**
	 * The SubMeshes out of which the Mesh consists. Every SubMesh can be assigned a material to override the Mesh's
	 * material.
	 */
	public get subMeshes():SubMesh[]
	{
		// Since this getter is invoked every iteration of the render loop, and
		// the geometry construct could affect the sub-meshes, the geometry is
		// validated here to give it a chance to rebuild.
		//this._geometry.validate();

		return this._subMeshes;
	}

	/**
	 * Indicates whether or not the mesh share the same animation geometry.
	 */
	public get shareAnimationGeometry():boolean
	{
		return this._shareAnimationGeometry;
	}

	public set shareAnimationGeometry(value:boolean)
	{
		this._shareAnimationGeometry = value;
	}

	/**
	 * Clears the animation geometry of this mesh. It will cause animation to generate a new animation geometry. Work only when shareAnimationGeometry is false.
	 */
	public clearAnimationGeometry():void
	{
		var len:number = this._subMeshes.length;
		//for (var i:number = 0; i < len; ++i)
		//	this._subMeshes[i].animationSubGeometry = null;
	}

	/**
	 * @inheritDoc
	 */
	/*override*/ public dispose():void
{
	super.dispose();

	this.material = null;
	this.geometry = null;
}

	/**
	 * Disposes mesh including the animator and children. This is a merely a convenience method.
	 * @return
	 */
	public disposeWithAnimatorAndChildren():void
	{
		this.disposeWithChildren();

		//if (this._animator)
		//	this._animator.dispose();
	}

	/**
	 * Clones this Mesh instance along with all it's children, while re-using the same
	 * material, geometry and animation set. The returned result will be a copy of this mesh,
	 * containing copies of all of it's children.
	 *
	 * Properties that are re-used (i.e. not cloned) by the new copy include name,
	 * geometry, and material. Properties that are cloned or created anew for the copy
	 * include subMeshes, children of the mesh, and the animator.
	 *
	 * If you want to copy just the mesh, reusing it's geometry and material while not
	 * cloning it's children, the simplest way is to create a new mesh manually:
	 *
	 * <code>
	 * var clone : Mesh = new Mesh(original.geometry, original.material);
	 * </code>
	 */
	/*override*/ public clone():Object3D
{
	var clone:Mesh = new Mesh(this._geometry, this._material);
	clone.transform = this.transform;
	clone.pivotPoint = this.pivotPoint;
	clone.partition = this.partition;
	//clone.bounds = this._bounds.clone();
	clone.name = this.name;
	clone.castsShadows = this.castsShadows;
	clone.shareAnimationGeometry = this.shareAnimationGeometry;
	clone.mouseEnabled = this.mouseEnabled;
	clone.mouseChildren = this.mouseChildren;
	//this is of course no proper cloning
	//maybe use this instead?: http://blog.another-d-mention.ro/programming/how-to-clone-duplicate-an-object-in-actionscript-3/
	clone.extra = this.extra;

	var len:number = this._subMeshes.length;
	//for (var i:number = 0; i < len; ++i)
		//clone._subMeshes[i]._material = this._subMeshes[i]._material;

	len = this.numChildren;
	//for (i = 0; i < len; ++i)
	//	clone.addChild(ObjectContainer3D(this.getChildAt(i).clone()));

	//if (this._animator)
	//	clone.animator = this._animator.clone();

	return clone;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ protected updateBounds():void
{
	//this._bounds.fromGeometry(this._geometry);
	//this._boundsInvalid = false;
}

	/**
	 * @inheritDoc
	 */
	/*override*/ protected createEntityPartitionNode():any
{
	//todo: any = EntityNode
	return null;//new MeshNode(this);
}

	/**
	 * Called when a SubGeometry was added to the Geometry.
	 */
	private onSubGeometryAdded(event:any):void
	{
		//todo: any = GeometryEvent
		//this.addSubMesh(event.subGeometry);
	}

	/**
	 * Called when a SubGeometry was removed from the Geometry.
	 */
	private onSubGeometryRemoved(event:any):void
	{
		//todo: any = GeometryEvent
		/*
		var subMesh:SubMesh;
		var subGeom:ISubGeometry = event.subGeometry;
		var len:number = this._subMeshes.length;
		var i:number;

		// Important! This has to be done here, and not delayed until the
		// next render loop, since this may be caused by the geometry being
		// rebuilt IN THE RENDER LOOP. Invalidating and waiting will delay
		// it until the NEXT RENDER FRAME which is probably not desirable.

		for (i = 0; i < len; ++i) {
			subMesh = this._subMeshes[i];
			if (subMesh.subGeometry == subGeom) {
				subMesh.dispose();
				this._subMeshes.splice(i, 1);
				break;
			}
		}

		--len;
		for (; i < len; ++i)
			this._subMeshes[i]._index = i;
			*/
	}

	/**
	 * Adds a SubMesh wrapping a SubGeometry.
	 */
	private addSubMesh(subGeometry:ISubGeometry):void
	{
		/*
		var subMesh:SubMesh = new SubMesh(subGeometry, this, null);
		var len:number = this._subMeshes.length;
		subMesh._index = len;
		this._subMeshes[len] = subMesh;
		this.invalidateBounds();
		*/
	}

	public getSubMeshForSubGeometry(subGeometry:ISubGeometry):SubMesh
	{
		return null;//this._subMeshes[this._geometry.subGeometries.indexOf(subGeometry)];
	}

	/*override*/
	/*arcane*/ collidesBefore(shortestCollisionDistance:number, findClosest:boolean):boolean
{
	/*
	this._pickingCollider.setLocalRay(this._pickingCollisionVO.localRayPosition, this._pickingCollisionVO.localRayDirection);
	this._pickingCollisionVO.renderable = null;
	var len:number = this._subMeshes.length;
	for (var i:number = 0; i < len; ++i) {
		var subMesh:SubMesh = this._subMeshes[i];

		//var ignoreFacesLookingAway:Boolean = _material ? !_material.bothSides : true;
		if (this._pickingCollider.testSubMeshCollision(subMesh, this._pickingCollisionVO, shortestCollisionDistance)) {
			shortestCollisionDistance = this._pickingCollisionVO.rayEntryDistance;
			this._pickingCollisionVO.renderable = subMesh;
			if (!findClosest)
				return true;
		}
	}
*/
	return false;//this._pickingCollisionVO.renderable != null;
}
}

