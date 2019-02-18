import {ImageTexture2D} from "@awayjs/materials";
import {BitmapData, IBitmapDataOwner} from "@as3web/flash";
import {SceneImage2D} from "@awayjs/scene";

import {Texture2DBase} from "./Texture2DBase";

export class BitmapTexture extends Texture2DBase implements IBitmapDataOwner
{
	private _bitmapData:BitmapData;

	constructor(bitmapData:BitmapData, generateMipmaps:boolean = true)
	{
		super(new ImageTexture2D(bitmapData.adaptee));

		this._bitmapData = bitmapData;

		if (this._bitmapData)
			this._bitmapData._addOwner(this);
	}

	public get bitmapData():BitmapData
	{
		return this._bitmapData;
	}

	public set bitmapData(value:BitmapData)
	{
		if (this._bitmapData == value)
			return;

		if (this._bitmapData)
			this._bitmapData._removeOwner(this);

		this._bitmapData = value;

		if (this._bitmapData)
			this._bitmapData._addOwner(this);

		(<ImageTexture2D>this.adaptee).image = <SceneImage2D> value.adaptee;
	}
}