import {IAssetAdapter, ColorUtils} from "@awayjs/core";
import {Sampler2D, Image2D} from "@awayjs/graphics";
import { LightPickerBase } from "@awayjs/scene";
import {MethodMaterial, DiffuseBasicMethod, DiffuseCompositeMethod} from "@awayjs/materials";

import { AssetType } from "../library/assets/AssetType";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
import { IAsset } from "../library/assets/IAsset";

export class MaterialBase extends NamedAssetBase implements IAssetAdapter, IAsset
{
	private _ambientColor:number = 0xFFFFFF;
	private _ambientComponent:number[] = [0xFF, 0xFF, 0xFF, 0xFF];
	private _color:number;
	private _colorComponent:number[];

	protected _sampler:Sampler2D = new Sampler2D();

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
		return (<MethodMaterial> this._adaptee).specularMethod.strength;
	}

	public set specular(value:number)
	{
		(<MethodMaterial> this._adaptee).specularMethod.strength = value;
	}


	public get gloss():number
	{
		return (<MethodMaterial> this._adaptee).specularMethod.gloss;
	}

	public set gloss(value:number)
	{
		(<MethodMaterial> this._adaptee).specularMethod.gloss = value;
	}


	public get ambient():number
	{
		return (<MethodMaterial> this._adaptee).ambientMethod.strength;
	}

	public set ambient(value:number)
	{
		(<MethodMaterial> this._adaptee).ambientMethod.strength = value;
	}

	constructor(image?:Image2D, alpha?:number);
	constructor(color?:number, alpha?:number);
	constructor(imageColor:any = null, alpha:number = 1)
	{
		super(new MethodMaterial(imageColor, alpha));

		if (!isNaN(imageColor)) {
			this._color = imageColor;
			this._colorComponent = ColorUtils.float32ColorToARGB(imageColor);
		}
	}

	public get animateUVs():boolean
	{
		return (<MethodMaterial> this._adaptee).animateUVs;
	}

	public set animateUVs(value:boolean)
	{
		(<MethodMaterial> this._adaptee).animateUVs = value;
	}

	public get ambientColor():number
	{
		return this._ambientColor;
	}

	public set ambientColor(value:number)
	{
		this._ambientColor = value;
		this._ambientComponent = ColorUtils.float32ColorToARGB(value);

		this._updateColor();
	}

	public get color():number
	{
		return this._color;
	}

	public set color(value:number)
	{
		this._color = value;
		this._colorComponent = ColorUtils.float32ColorToARGB(value);

		this._updateColor();
	}

	/**
	 *
	 */
	public get diffuseMethod():DiffuseBasicMethod | DiffuseCompositeMethod
	{
		return (<MethodMaterial> this._adaptee).diffuseMethod;
	}

	public set diffuseMethod(value:DiffuseBasicMethod | DiffuseCompositeMethod)
	{
		(<MethodMaterial> this._adaptee).diffuseMethod = value;
	}

	/**
	 *
	 */
	public get lightPicker():LightPickerBase
	{
		return (<MethodMaterial> this._adaptee).lightPicker;
	}

	public set lightPicker(value:LightPickerBase)
	{
		(<MethodMaterial> this._adaptee).lightPicker = value;
	}

	/**
	 *
	 */
	public get alphaBlending():boolean
	{
		return (<MethodMaterial> this._adaptee).alphaBlending;
	}

	public set alphaBlending(value:boolean)
	{
		(<MethodMaterial> this._adaptee).alphaBlending = value;
	}

	private _updateColor():void
	{
		(<MethodMaterial> this._adaptee).style.color = ColorUtils.ARGBtoFloat32(0xFF, this._ambientComponent[1]*this._colorComponent[1]/0xFF, this._ambientComponent[2]*this._colorComponent[2]/0xFF, this._ambientComponent[3]*this._colorComponent[3]/0xFF);
	}
}