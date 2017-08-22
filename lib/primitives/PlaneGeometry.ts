import {Geometry} from "../core/base/Geometry"
import {PrimitivePlanePrefab} from "@awayjs/scene"
import {Sprite} from "@awayjs/scene"
import {PrimitiveBase} from "./PrimitiveBase"
export class PlaneGeometry extends PrimitiveBase
{

	/**
	 *
	 */
	public get height():number
	{
		return (<PrimitivePlanePrefab> this._prefab).height;
	}

	public set height(value:number)
	{
		(<PrimitivePlanePrefab> this._prefab).height = value;
	}

	/**
	 *
	 */
	public get width():number
	{
		return (<PrimitivePlanePrefab> this._prefab).width;
	}

	public set width(value:number)
	{
		(<PrimitivePlanePrefab> this._prefab).width = value;
	}

	/**
	 * Creates a new Plane object.
	 * @param width The width of the plane.
	 * @param height The height of the plane.
	 * @param segmentsW The number of segments that make up the plane along the X-axis.
	 * @param segmentsH The number of segments that make up the plane along the Y or Z-axis.
	 * @param yUp Defines whether the normal vector of the plane should point along the Y-axis (true) or Z-axis (false).
	 * @param doubleSided Defines whether the plane will be visible from both sides, with correct vertex normals.
	 */
	constructor(prefab?:PrimitivePlanePrefab);
	constructor(width?:number, height?:number, segmentsW?:number, segmentsH?:number, yUp?:boolean, doubleSided?:boolean);
	constructor(prefabWidth:number | PrimitivePlanePrefab =100, height:number=100, segmentsW:number=1, segmentsH:number=1, yUp:boolean = true, doubleSided:boolean = false)
	{
		super((prefabWidth instanceof PrimitivePlanePrefab)? prefabWidth : new PrimitivePlanePrefab(null, "triangle", prefabWidth, height, segmentsW, segmentsH, yUp, doubleSided));
	}

}