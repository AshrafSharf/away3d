import {Graphics} from "@awayjs/graphics"
import {SubGeometry} from "./SubGeometry"
import {EventDispatcher} from "@as3web/flash"
export class Geometry extends  EventDispatcher
{
	private _adaptee:Graphics;

	public isPrefab:boolean=false;

	public get subGeometries():SubGeometry[]
	{
		return [];
	}
	public addSubGeometry(tSub:SubGeometry)
	{

	}
	constructor()
	{
		super();

		this._adaptee = new Graphics();
	}

	public scaleUV(scaleU:number = 1, scaleV:number = 1):void
	{
		(<Graphics>this._adaptee).scaleUV(scaleU, scaleV);
	}
}