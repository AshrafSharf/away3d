import { Single2DTexture, Sampler2D } from "@awayjs/graphics"

import {Texture2DBase} from "../textures/Texture2DBase";

import {ColorMaterial} from "./ColorMaterial";

export class TextureMaterial extends ColorMaterial
{
	private _sampler:Sampler2D;

	/**
	 *
	 */
	public get repeat():boolean
	{
		return this._sampler.repeat;
	}

	public set repeat(value:boolean)
	{
		this._sampler.repeat = value;
	}

	/**
	 *
	 */
	public get mipmap():boolean
	{
		return this._sampler.mipmap;
	}

	public set mipmap(value:boolean)
	{
		this._sampler.mipmap = value;
	}

	/**
	 *
	 */
	public get smooth():boolean
	{
		return this._sampler.smooth;
	}

	public set smooth(value:boolean)
	{
		this._sampler.smooth = value;
	}

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = true)
	{
		super();

		this._sampler = new Sampler2D();
		this._sampler.smooth = smooth;
		this._sampler.repeat = repeat;
		this._sampler.mipmap = mipmap;

		this.ambientMethod.texture = texture.adaptee;
		this.ambientMethod.texture.setSamplerAt(this._sampler, 0);
	}

}