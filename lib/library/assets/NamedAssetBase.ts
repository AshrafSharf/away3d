import {AssetBase, IAssetAdapter} from "@awayjs/core";

import { EventDispatcher } from "@as3web/flash"

export class NamedAssetBase extends EventDispatcher implements IAssetAdapter
{
	protected _adaptee:AssetBase;

	private _id:string;

	constructor(adaptee:AssetBase = null)
	{
		super();

		this._adaptee = adaptee || new AssetBase();
		this._adaptee.adapter = this;
	}


	public get adaptee():AssetBase
	{
		return this._adaptee;
	}

	public get name():string
	{
		return this._adaptee.name;
	}

	public set name(val:string)
	{
		this._adaptee.name = val;
	}

	/**
	 * The original name used for this asset in the resource (e.g. file) in which
	 * it was found. This may not be the same as <code>name</code>, which may
	 * have changed due to of a name conflict.
	 */
	public get originalName():string
	{
		return this._adaptee.originalName;
	}

	public get id():string
	{
		return this._id;
	}

	public set id(newID:string)
	{
		this._id = newID;
	}

	public get assetNamespace():string
	{
		return this._adaptee.assetNamespace;
	}

	public get assetFullPath():any[]
	{
		return this._adaptee.assetFullPath;
	}

	public assetPathEquals(name:string, ns:string):boolean
	{
		return this._adaptee.assetPathEquals(name, ns);
	}

	public resetAssetPath(name:string, ns:string = null, overrideOriginal:boolean = true):void
	{
		this._adaptee.resetAssetPath(name, ns, overrideOriginal);
	}

	public dispose()
	{
		this._adaptee.dispose()
		this._adaptee = null;
	}

}


