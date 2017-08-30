import { Entity } from "./Entity";
//import { IMaterialOwner } from "./IMaterialOwner";
//import { IAsset } from "./IAsset";
import { SubMesh } from "../core/base/SubMesh";
import { Geometry } from "../core/base/Geometry";
import { AssetType } from "../library/assets/AssetType";
//import { GeometryEvent } from "../events/GeometryEvent";
import { SubGeometry } from "../core/base/SubGeometry";
import { Object3D } from "../core/base/Object3D";

import {MaterialBase} from "../materials/MaterialBase";
import {AssetEvent} from "@awayjs/core";
import {Sprite} from "@awayjs/scene";
import { PrimitiveBase } from "../primitives/PrimitiveBase";
import {MaterialBase as AwayMaterialBase, Graphics} from "@awayjs/graphics";

/**
 * Mesh is an instance of a Geometry, augmenting it with a presence in the scene graph, a material, and an animation
 * state. It consists out of SubMeshes, which in turn correspond to SubGeometries. SubMeshes allow different parts
 * of the geometry to be assigned different materials.
 */
export class Mesh extends Entity// implements IMaterialOwner, IAsset
{
	protected _geometry:Geometry;
	private _subMeshes:SubMesh[];
	private _onGraphicsInvalidateDelegate:(event:AssetEvent) => void;
	private _subMeshesDirty:boolean;

	/**
	 * Create a new Mesh object.
	 *
	 * @param geometry                    The geometry used by the mesh that provides it with its shape.
	 * @param material    [optional]        The material with which to render the Mesh.
	 */
	constructor(geometry:Geometry, material:MaterialBase = null, copyGeometry:boolean = true)
	{
		super(Sprite.getNewSprite());

		this._geometry = geometry || new Geometry();

		if (copyGeometry && geometry) {
			(<Graphics> geometry.adaptee).copyTo((<Sprite> this._adaptee).graphics, true);
			if (geometry instanceof PrimitiveBase)
				(<Sprite> this._adaptee)._iSourcePrefab = (<PrimitiveBase> geometry).prefab;
		}

		if (material)
			(<Sprite> this._adaptee).material = <AwayMaterialBase> material.adaptee;
		this._onGraphicsInvalidateDelegate = (event:AssetEvent) => this.onGraphicsInvalidate(event);

		this._geometry.adaptee.addEventListener(AssetEvent.INVALIDATE, this._onGraphicsInvalidateDelegate);

		this._subMeshesDirty = true;
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
		return (<Sprite> this._adaptee).castsShadows;
	}

	public set castsShadows(value:boolean)
	{
		(<Sprite> this._adaptee).castsShadows = value;
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
		var material:AwayMaterialBase = <AwayMaterialBase> (<Sprite> this._adaptee).material;

		if(this._geometry && this._geometry!=undefined)
			this._geometry.adaptee.removeEventListener(AssetEvent.INVALIDATE, this._onGraphicsInvalidateDelegate);
		this._geometry = value;
		if(this._geometry && this._geometry!=undefined)
			this._geometry.adaptee.addEventListener(AssetEvent.INVALIDATE, this._onGraphicsInvalidateDelegate);

		(<Sprite> this._adaptee).graphics.clear();
		if(this._geometry && this._geometry!=undefined){
			(<Graphics> this._geometry.adaptee).copyTo((<Sprite> this._adaptee).graphics, true);
			if (this._geometry instanceof PrimitiveBase)
				(<Sprite> this._adaptee)._iSourcePrefab = (<PrimitiveBase> this._geometry).prefab;
		}

		//reset material
		(<Sprite> this._adaptee).material = material;

		this._subMeshesDirty = true;
	}

	/**
	 * The material with which to render the Mesh.
	 */
	public get material():MaterialBase
	{
		return <MaterialBase> ((<Sprite> this._adaptee).material? (<Sprite> this._adaptee).material.adapter : null);
	}

	public set material(value:MaterialBase)
	{
		(<Sprite> this._adaptee).material = <AwayMaterialBase> (value? value.adaptee : null);
	}

	/**
	 * The SubMeshes out of which the Mesh consists. Every SubMesh can be assigned a material to override the Mesh's
	 * material.
	 */
	public get subMeshes():SubMesh[]
	{
		if (this._subMeshesDirty)
			this._updateSubMeshes();

		return this._subMeshes;
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
		super.dispose();
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
	public clone():Mesh
	{
		var clone:Mesh = new Mesh(this._geometry, <MaterialBase> ((<Sprite> this._adaptee).material? (<Sprite> this._adaptee).material.adapter : null), false);

		(<Sprite> this._adaptee).copyTo(<Sprite> clone.adaptee, true);

		return clone;
	}



	public getSubMeshForSubGeometry(subGeometry:SubGeometry):SubMesh
	{
		//todo
		return null;//this._subMeshes[this._geometry.subGeometries.indexOf(subGeometry)];
	}

	private _updateSubMeshes()
	{
		this._subMeshesDirty = false;
		this._subMeshes = [];


		var graphics:Graphics = (<Sprite> this._adaptee).graphics;
		var len:number = graphics.count;
		for (var i:number = 0; i < len; i++) {
			this._subMeshes.push(new SubMesh(graphics.getShapeAt(i)));
		}
	}

	private onGraphicsInvalidate(event:AssetEvent)
	{
		this._subMeshesDirty = true;
	}

}

