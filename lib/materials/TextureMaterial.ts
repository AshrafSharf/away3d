import {MethodMaterial} from "@awayjs/materials";

import {Texture2DBase} from "../textures/Texture2DBase";

import {MaterialBase} from "./MaterialBase";

export class TextureMaterial extends MaterialBase
{
	private _texture:Texture2DBase;

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = true)
	{
		super();

		(<MethodMaterial> this._adaptee).ambientMethod.texture = texture.adaptee;

		this.smooth = smooth;
		this.repeat = repeat;
		this.mipmap = mipmap;
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
		(<MethodMaterial> this._adaptee).ambientMethod.texture = value?value.adaptee:null;
	}
}