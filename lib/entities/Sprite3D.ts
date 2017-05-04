
import {Billboard} from "@awayjs/scene"
import {Entity} from "./Entity"
import {MaterialBase} from "../materials/MaterialBase";

export class Sprite3D extends Entity{

	private _material:MaterialBase;

	constructor(mat:any, param1:number, param2:number){
		super();
	}
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
}