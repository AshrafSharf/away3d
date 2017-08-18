import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCubePrefab} from "@awayjs/scene"
export class CubeGeometry extends PrimitiveBase
{
	/**
	 *
	 */
	public get tile6():boolean
	{
		return (<PrimitiveCubePrefab> this._prefab).tile6;
	}

	public set tile6(value:boolean)
	{
		(<PrimitiveCubePrefab> this._prefab).tile6 = value;
	}

	constructor(width:number = 100, height:number = 100, depth:number = 100, segmentsW:number = 1, segmentsH:number = 1, segmentsD:number = 1, tile6:boolean = true)
	{
		super(new PrimitiveCubePrefab(null, "triangle", width, height, depth, segmentsW, segmentsH, segmentsD, tile6));
	}
}