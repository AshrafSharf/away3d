import {Sampler2D} from "@awayjs/graphics";
import {MethodMaterial} from "@awayjs/materials";

import { IAsset } from "../library/assets/IAsset";

export class MaterialBase extends MethodMaterial implements IAsset
{
	protected _sampler:Sampler2D = new Sampler2D();

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

	public get specular():number
	{
		return this.specularMethod.strength;
	}

	public set specular(value:number)
	{
		this.specularMethod.strength = value;
	}


	public get gloss():number
	{
		return this.specularMethod.gloss;
	}

	public set gloss(value:number)
	{
		this.specularMethod.gloss = value;
	}


	public get ambient():number
	{
		return this.ambientMethod.strength;
	}

	public set ambient(value:number)
	{
		this.ambientMethod.strength = value;
	}
}