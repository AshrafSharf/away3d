import {Vector3D} from "@awayjs/core"
import {Billboard, AlignmentMode} from "@awayjs/scene";
import {Entity} from "./Entity";
import {MaterialBase} from "../materials/MaterialBase";
import {Object3D} from "../core/base/Object3D";

export class Sprite3D extends Entity
{
	private _material:MaterialBase;

	constructor(mat:MaterialBase, width:number, height:number){
		super(new Billboard(mat.adaptee));
		this._material = mat;
		(<Billboard> this._adaptee).alignmentMode = AlignmentMode.REGISTRATION_POINT;
		(<Billboard> this._adaptee).width = width;
		(<Billboard> this._adaptee).height = height;

		(<Billboard> this._adaptee).registrationPoint = new Vector3D(width/2, height/2, 0)
	}
	public get material():MaterialBase
	{
		return this._material;
	}
	public set material(value:MaterialBase)
	{
		this._material = value;

		(<Billboard> this._adaptee).material = value.adaptee;
	}
}