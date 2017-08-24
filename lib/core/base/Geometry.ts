import {AssetEvent} from "@awayjs/core";
import {Graphics, TriangleElements, Shape} from "@awayjs/graphics";
import {SubGeometry} from "./SubGeometry";

import { AssetType } from "../../library/assets/AssetType";
import {NamedAssetBase} from "../../library/assets/NamedAssetBase";

export class Geometry extends NamedAssetBase
{
	private _subGeometries:SubGeometry[];
	private _subGeometriesDirty:boolean = true;

	public get assetType():string
	{
		return AssetType.GEOMETRY;
	}

	public get subGeometries():SubGeometry[]
	{
		if (this._subGeometriesDirty)
			this._updateSubGeometries();

		return this._subGeometries;
	}

	public addSubGeometry(tSub:SubGeometry)
	{
		var newShape:Shape=new Shape(tSub.adaptee);
		var graphics:Graphics = (<Graphics> this._adaptee);
		graphics.addShape(newShape);
		this._subGeometriesDirty = true;
	}

	constructor(adaptee:Graphics = null)
	{
		super(adaptee || new Graphics());

		(<Graphics> this._adaptee).addEventListener(AssetEvent.INVALIDATE, (event:AssetEvent) => this.onGraphicsInvalidate(event));
	}

	public scaleUV(scaleU:number = 1, scaleV:number = 1):void
	{
		(<Graphics>this._adaptee).scaleUV(scaleU, scaleV);
	}

	private onGraphicsInvalidate(event:AssetEvent):void
	{
		this._subGeometriesDirty = true;
	}

	private _updateSubGeometries():void
	{
		this._subGeometriesDirty = false;
		this._subGeometries = [];

		var graphics:Graphics = (<Graphics> this._adaptee);
		var len:number = graphics.count;
		for (var i:number = 0; i < len; i++) {
			this._subGeometries.push(new SubGeometry(<TriangleElements> graphics.getShapeAt(i).elements))
		}
	}

}