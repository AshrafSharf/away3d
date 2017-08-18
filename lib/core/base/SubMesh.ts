import {Shape, TriangleElements} from "@awayjs/graphics";
import {MethodMaterial} from "@awayjs/materials";

import {SubGeometry} from "./SubGeometry";
import {Mesh} from "../../entities/Mesh";
import {MaterialBase} from "../../materials/MaterialBase";

export class SubMesh
{
	private _adaptee:Shape;

	constructor(adaptee:Shape)
	{
		this._adaptee = adaptee;
	}

	public get material():MaterialBase
	{
		return <MaterialBase> this._adaptee.material.adapter;
	}

	public set material(value:MaterialBase)
	{
		this._adaptee.material = <MethodMaterial> value.adaptee;
	}
}