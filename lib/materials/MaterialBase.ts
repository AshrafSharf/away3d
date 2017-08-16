import {IAssetAdapter} from "@awayjs/core";
import {Sampler2D, Image2D} from "@awayjs/graphics";
import {MethodMaterial} from "@awayjs/materials";

import { AssetType } from "../library/assets/AssetType";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
import { IAsset } from "../library/assets/IAsset";

export class MaterialBase extends NamedAssetBase implements IAssetAdapter, IAsset
{
	protected _adaptee:MethodMaterial;

	protected _sampler:Sampler2D = new Sampler2D();


	public get adaptee():MethodMaterial
	{
		return this._adaptee;
	}

	public get assetType():string
	{
		return AssetType.MATERIAL;
	}

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
		return this._adaptee.specularMethod.strength;
	}

	public set specular(value:number)
	{
		this._adaptee.specularMethod.strength = value;
	}


	public get gloss():number
	{
		return this._adaptee.specularMethod.gloss;
	}

	public set gloss(value:number)
	{
		this._adaptee.specularMethod.gloss = value;
	}


	public get ambient():number
	{
		return this._adaptee.ambientMethod.strength;
	}

	public set ambient(value:number)
	{
		this._adaptee.ambientMethod.strength = value;
	}

	constructor(image?:Image2D, alpha?:number);
	constructor(color?:number, alpha?:number);
	constructor(imageColor:any = null, alpha:number = 1)
	{
		super();
		this._adaptee = new MethodMaterial(imageColor, alpha);
	}
}