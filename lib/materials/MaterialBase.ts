import {IAssetAdapter, ColorUtils} from "@awayjs/core";
import {Sampler2D, Image2D} from "@awayjs/graphics";
import { LightPickerBase } from "@awayjs/scene";
import {MethodMaterial, DiffuseBasicMethod, DiffuseCompositeMethod} from "@awayjs/materials";

import { AssetType } from "../library/assets/AssetType";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
import { IAsset } from "../library/assets/IAsset";

export class MaterialBase extends NamedAssetBase implements IAssetAdapter, IAsset
{
	private _ambientColor:number;
	private _color:number;

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

	public get animateUVs():boolean
	{
		return this._adaptee.animateUVs;
	}

	public set animateUVs(value:boolean)
	{
		this._adaptee.animateUVs = value;
	}

	public get ambientColor():number
	{
		return this._ambientColor;
	}

	public set ambientColor(value:number)
	{
		this._ambientColor = value;

		this._updateColor();
	}

	public get color():number
	{
		return this._color;
	}

	public set color(value:number)
	{
		this._color = value;

		this._updateColor();
	}

	/**
	 *
	 */
	public get diffuseMethod():DiffuseBasicMethod | DiffuseCompositeMethod
	{
		return this._adaptee.diffuseMethod;
	}

	public set diffuseMethod(value:DiffuseBasicMethod | DiffuseCompositeMethod)
	{
		this._adaptee.diffuseMethod = value;
	}

	/**
	 *
	 */
	public get lightPicker():LightPickerBase
	{
		return this._adaptee.lightPicker;
	}

	public set lightPicker(value:LightPickerBase)
	{
		this._adaptee.lightPicker = value;
	}

	/**
	 *
	 */
	public get alphaBlending():boolean
	{
		return this._adaptee.alphaBlending;
	}

	public set alphaBlending(value:boolean)
	{
		this._adaptee.alphaBlending = value;
	}

	private _updateColor():void
	{
		this._adaptee.style.color = ColorUtils.ARGBtoFloat32(0xFF, this._ambientColor[1]*this._color[1]/0xFF, this._ambientColor[2]*this._color[2]/0xFF, this._ambientColor[3]*this._color[3]/0xFF);
	}
}