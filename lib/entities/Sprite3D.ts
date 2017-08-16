import {Vector3D} from "@awayjs/core"
import {Billboard, AlignmentMode} from "@awayjs/scene";
import {Entity} from "./Entity";
import {MaterialBase} from "../materials/MaterialBase";
import {Object3D} from "../core/base/Object3D";

export class Sprite3D extends Entity
{
	private _material:MaterialBase;

	constructor(mat:MaterialBase, width:number, height:number){
		super();
		this._material = mat;
		this.adaptee = new Billboard(mat.adaptee);
		this.adaptee.alignmentMode = AlignmentMode.REGISTRATION_POINT;
		this.adaptee.adapter=this;
		this.adaptee.width=width;
		this.adaptee.height=height;

		this.adaptee.registrationPoint = new Vector3D(width/2, height/2, 0)
	}
	public get material():MaterialBase
	{
		return this._material;
	}
	public set material(value:MaterialBase)
	{
		this.adaptee.material = value.adaptee;
	}

	public get adaptee():Billboard{
		return (<Billboard>this._adaptee);
	}
	public set adaptee(value:Billboard){
		this._adaptee=value;
	}
}