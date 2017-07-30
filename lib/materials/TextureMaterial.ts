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

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = false)
	{
		super();

		this._sampler = new Sampler2D();

		this.ambientMethod.texture = texture.adaptee;
		this.ambientMethod.texture.setSamplerAt(this._sampler, 0);
	}

}