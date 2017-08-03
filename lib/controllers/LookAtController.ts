import {Vector3D} from "@awayjs/core";

import {LookAtController as AwayLookAtController} from "@awayjs/scene";

import {ControllerBase} from "./ControllerBase";

import {Object3D} from "../core/base/Object3D";

export class LookAtController extends ControllerBase
{
	static assetType:string = "[controller LookAtController]";

	public get assetType():string
	{
		return LookAtController.assetType;
	}

	constructor(targetObject:Object3D = null, lookAtObject:Object3D = null)
	{
		super(targetObject);

		if (this.assetType == LookAtController.assetType)
			this._adaptee = new AwayLookAtController(targetObject.adaptee, lookAtObject.adaptee);
	}

	public get lookAtPosition():Vector3D
	{
		return (<AwayLookAtController> this._adaptee).lookAtPosition;
	}

	public set lookAtPosition(val:Vector3D)
	{
		(<AwayLookAtController> this._adaptee).lookAtPosition = val;
	}


	public get lookAtObject():Object3D
	{
		return <Object3D> (<AwayLookAtController> this._adaptee).lookAtObject.adapter;
	}

	public set lookAtObject(val:Object3D)
	{
		(<AwayLookAtController> this._adaptee).lookAtObject = val.adaptee;
	}
}