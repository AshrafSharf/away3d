
import {Billboard} from "@awayjs/scene"
import {Entity} from "./Entity"
import {MaterialBase} from "../materials/MaterialBase";

export class Sprite3D extends Entity{

	private _material:MaterialBase;

	constructor(mat:any, param1:number, param2:number){
		super();
		//todo
	}
	public get material():MaterialBase
	{
		//todo
		return this._material;
	}

	public set material(value:MaterialBase)
	{
		//todo
	}
}