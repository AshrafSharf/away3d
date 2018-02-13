import { IAssetAdapter } from "@awayjs/core"
import { TextureBase } from "@awayjs/materials"

export class Texture2DBase implements IAssetAdapter
{
	protected _adaptee;

	public get adaptee():TextureBase
	{
		return this._adaptee;
	}

	constructor(adaptee:TextureBase)
	{
		this._adaptee = adaptee;
		this._adaptee.adapter = this;
	}

	public dispose()
	{
		this._adaptee.dispose();
		this._adaptee = null;
	}
}