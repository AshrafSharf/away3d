import {Single2DTexture} from "@awayjs/graphics";
import {BitmapData, IBitmapDataOwner} from "@as3web/flash";
import {ViewImage2D} from "@awayjs/view";

import {Texture2DBase} from "./Texture2DBase";

export class BitmapTexture extends Texture2DBase implements IBitmapDataOwner
{
	private _bitmapData:BitmapData;

	constructor(bitmapData:BitmapData, generateMipmaps:boolean = true)
	{
		super(new Single2DTexture(bitmapData.adaptee));

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

		(<Single2DTexture>this.adaptee).image2D = <ViewImage2D> value.adaptee;
	}
}