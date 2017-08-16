import { Single2DTexture, Sampler2D } from "@awayjs/graphics"

import {Texture2DBase} from "../textures/Texture2DBase";

import {MaterialBase} from "./MaterialBase";

export class TextureMaterial extends MaterialBase
{
	private _texture:Texture2DBase;

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = true)
	{
		super();

		this._sampler
		this._sampler.smooth = smooth;
		this._sampler.repeat = repeat;
		this._sampler.mipmap = mipmap;

		this._texture = texture;
		this.ambientMethod.texture = texture.adaptee;
		this.ambientMethod.texture.setSamplerAt(this._sampler, 0);
	}


	public get texture():Texture2DBase
	{
		return this._texture;
	}

	public set texture(value:Texture2DBase)
	{
		this.ambientMethod.texture = value.adaptee;
	}
}