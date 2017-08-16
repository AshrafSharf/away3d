import { Entity } from "./Entity";
//import { IMaterialOwner } from "./IMaterialOwner";
//import { IAsset } from "./IAsset";
import { SubMesh } from "../core/base/SubMesh";
import { Geometry } from "../core/base/Geometry";
import { AssetType } from "../library/assets/AssetType";
//import { GeometryEvent } from "../events/GeometryEvent";
import { ISubGeometry } from "../core/base/ISubGeometry";
import { Object3D } from "../core/base/Object3D";

import {MaterialBase} from "../materials/MaterialBase";
import {Sprite} from "@awayjs/scene";
import { PrimitiveBase } from "../primitives/PrimitiveBase";
import {IMaterial} from "@awayjs/graphics";

/**
 * Mesh is an instance of a Geometry, augmenting it with a presence in the scene graph, a material, and an animation
 * state. It consists out of SubMeshes, which in turn correspond to SubGeometries. SubMeshes allow different parts
 * of the geometry to be assigned different materials.
 */
export class Mesh extends Entity// implements IMaterialOwner, IAsset
{
	protected _geometry:Geometry;
	private _material:MaterialBase;


	/**
	 * Create a new Mesh object.
	 *
	 * @param geometry                    The geometry used by the mesh that provides it with its shape.
	 * @param material    [optional]        The material with which to render the Mesh.
	 */
	constructor(geometry:Geometry, material:MaterialBase = null){
		super();

		this.geometry = geometry;
		if(this.geometry){
			if(this.geometry.isPrefab){
				this.adaptee=(<PrimitiveBase>this.geometry).getSprite();
				this.adaptee.material=(<IMaterial>material);
			}
			else{
				//todo;
			}
		}
		else{
			this.adaptee=new Sprite();

		}
		this.adaptee.mouseEnabled = false;
		this.adaptee.adapter=this;
	}

	public get adaptee():Sprite{
		return (<Sprite>this._adaptee);
	}
	public set adaptee(value:Sprite){
		this._adaptee=value;
	}

	public bakeTransformations():void
	{
		//todo
	}

	public get assetType():string
	{
		return AssetType.MESH;
	}

	private onGeometryBoundsInvalid(event:any):void
	{
		//  todo any = GeometryEvent
	}

	/**
	 * Indicates whether or not the Mesh can cast shadows. Default value is <code>true</code>.
	 */
	public get castsShadows():boolean
	{
		return this.adaptee.castsShadows;
	}

	public set castsShadows(value:boolean)
	{
		this.adaptee.castsShadows = value;
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
		this._geometry=value;
		//todo: set geometry.adaptee on this.adaptee
	}

	/**
	 * The material with which to render the Mesh.
	 */
	public get material():MaterialBase
	{
		return <MaterialBase> this.adaptee.material;
	}

	public set material(value:MaterialBase)
	{
		this.adaptee.material = value;
	}

	/**
	 * The SubMeshes out of which the Mesh consists. Every SubMesh can be assigned a material to override the Mesh's
	 * material.
	 */
	public get subMeshes():SubMesh[]
	{
		//todo
		return [];
	}

	/**
	 * Indicates whether or not the mesh share the same animation geometry.
	 */
	public get shareAnimationGeometry():boolean
	{
		//todo
		return false;
	}

	public set shareAnimationGeometry(value:boolean)
	{
		//todo
	}

	/**
	 * Clears the animation geometry of this mesh. It will cause animation to generate a new animation geometry. Work only when shareAnimationGeometry is false.
	 */
	public clearAnimationGeometry():void
	{
		//todo
	}

	/**
	 * @inheritDoc
	 */
	public dispose():void
	{
		//todo
	}

	/**
	 * Disposes mesh including the animator and children. This is a merely a convenience method.
	 * @return
	 */
	public disposeWithAnimatorAndChildren():void
	{
		//todo
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
	public clone():Object3D
	{
		//todo
		return null;
	}



	public getSubMeshForSubGeometry(subGeometry:ISubGeometry):SubMesh
	{
		//todo
		return null;//this._subMeshes[this._geometry.subGeometries.indexOf(subGeometry)];
	}

}

