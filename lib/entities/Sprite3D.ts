import {Vector3D} from "@awayjs/core"
import {Billboard, AlignmentMode, OrientationMode} from "@awayjs/scene";
import {MaterialBase as AwayMaterialBase} from "@awayjs/materials";
import {Entity} from "./Entity";
import {MaterialBase} from "../materials/MaterialBase";
import {Object3D} from "../core/base/Object3D";

export class Sprite3D extends Entity
{
	constructor(mat:MaterialBase, width:number, height:number)
	{
		super(new Billboard(<AwayMaterialBase> mat.adaptee));

		(<Billboard> this._adaptee).orientationMode = OrientationMode.CAMERA_PLANE;
		(<Billboard> this._adaptee).alignmentMode = AlignmentMode.REGISTRATION_POINT;
		(<Billboard> this._adaptee).width = width;
		(<Billboard> this._adaptee).height = height;

		(<Billboard> this._adaptee).registrationPoint = new Vector3D(width/2, height/2, 0)
	}

	public get material():MaterialBase
	{
		return <MaterialBase> ((<Billboard> this._adaptee).material? (<Billboard> this._adaptee).material.adapter : null);
	}
	public set material(value:MaterialBase)
	{
		(<Billboard> this._adaptee).material = <AwayMaterialBase> (value? value.adaptee : null);
	}
}