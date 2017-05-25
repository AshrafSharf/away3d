import {Camera} from "@awayjs/scene";
import {Vector3D} from "@awayjs/core";
import {ObjectContainer3D} from "../containers/ObjectContainer3D";
import {LensBase} from "./lenses/LensBase";

export class Camera3D extends ObjectContainer3D
{
	
	constructor()
	{
		super();

		this.adaptee = new Camera();
	}

	public get lens():LensBase
	{
		return (<Camera> this._adaptee).projection;
	}

	public set lens(value:LensBase)
	{
		(<Camera> this._adaptee).projection = value;
	}

	public forwardVector:Vector3D;
	public upVector:Vector3D;
}