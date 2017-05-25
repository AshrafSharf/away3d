import {Vector3D} from "@awayjs/core"
import {Billboard, AlignmentMode} from "@awayjs/scene"
import {MethodMaterial} from "@awayjs/materials"
import {IMaterial} from "@awayjs/graphics"
import {Entity} from "./Entity"
import {MaterialBase} from "../materials/MaterialBase";
import {Object3D} from "../core/base/Object3D";

export class Sprite3D extends Entity{

	constructor(mat:IMaterial, width:number, height:number){
		super();
		this.adaptee = new Billboard(mat);
		this.adaptee.alignmentMode = AlignmentMode.REGISTRATION_POINT;
		this.adaptee.adapter=this;
		this.adaptee.width=width;
		this.adaptee.height=height;

		this.adaptee.registrationPoint = new Vector3D(width/2, height/2, 0)
	}
	public get material():IMaterial
	{
		return this.adaptee.material;
	}
	public set material(value:IMaterial)
	{
		this.adaptee.material=value;
	}

	public get adaptee():Billboard{
		return (<Billboard>this._adaptee);
	}
	public set adaptee(value:Billboard){
		this._adaptee=value;
	}
}