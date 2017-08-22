import { Single2DTexture, Sampler2D } from "@awayjs/graphics";

import {MethodMaterial} from "@awayjs/materials";

import {Texture2DBase} from "../textures/Texture2DBase";

import {MaterialBase} from "./MaterialBase";

export class TextureMaterial extends MaterialBase
{
	private _texture:Texture2DBase;

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = true)
	{
		super();

		this.smooth = smooth;
		this.repeat = repeat;
		this.mipmap = mipmap;

		(<MethodMaterial> this._adaptee).ambientMethod.texture = texture.adaptee;
	}


	/**
	 *
	 * @returns {Texture2DBase}
	 */
	public get texture():Texture2DBase
	{
		return <Texture2DBase> (<MethodMaterial> this._adaptee).ambientMethod.texture.adapter;
	}

	public set texture(value:Texture2DBase)
	{
		(<MethodMaterial> this._adaptee).ambientMethod.texture = value.adaptee;
	}
}