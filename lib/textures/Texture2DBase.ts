import { TextureBase } from "@awayjs/graphics"

export class Texture2DBase
{
	protected _adaptee;

	public get adaptee():TextureBase
	{
		return this._adaptee;
	}

	constructor()
	{

	}
}