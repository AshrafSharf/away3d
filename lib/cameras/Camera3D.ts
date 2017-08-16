import {Camera} from "@awayjs/scene";
import {Vector3D} from "@awayjs/core";
import {ObjectContainer3D} from "../containers/ObjectContainer3D";
import {LensBase} from "./lenses/LensBase";

export class Camera3D extends ObjectContainer3D
{
	
	constructor()
	{
		super(new Camera());
	}

	public get lens():LensBase
	{
		return (<Camera> this._adaptee).projection;
	}

	public set lens(value:LensBase)
	{
		(<Camera> this._adaptee).projection = value;
	}

	public project(vector3D: Vector3D): Vector3D
	{
		return (<Camera> this._adaptee).project(vector3D);
	}

	public unproject(nX: number, nY: number, sZ: number, target?: Vector3D): Vector3D
	{
		return (<Camera> this._adaptee).unproject(nX, nY, sZ, target);
	}
}