import {ControllerBase as AwayControllerBase, DisplayObject} from "@awayjs/scene";

import {Object3D} from "../core/base/Object3D";

export class ControllerBase
{
	static assetType:string = "[controller ControllerBase]";

	protected _adaptee:AwayControllerBase;

	public get assetType():string
	{
		return ControllerBase.assetType;
	}

	constructor(targetObject:Object3D = null)
	{
		if (this.assetType == ControllerBase.assetType)
			this._adaptee = new AwayControllerBase(<DisplayObject> targetObject.adaptee);
	}

	public get targetObject():Object3D
	{
		return <Object3D> this._adaptee.targetObject.adapter;
	}

	public set targetObject(val:Object3D)
	{
		this._adaptee.targetObject = <DisplayObject> val.adaptee;
	}

	public get autoUpdate():boolean
	{
		return this._adaptee.autoUpdate;
	}

	public set autoUpdate(val:boolean)
	{
		this._adaptee.autoUpdate = val;
	}

	public update(interpolate:boolean = true):void
	{
		this._adaptee.update(interpolate);
	}
}