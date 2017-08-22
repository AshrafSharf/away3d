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

	constructor(prefab?:PrimitiveCubePrefab);
	constructor(width?:number, height?:number, depth?:number, segmentsW?:number, segmentsH?:number, segmentsD?:number, tile6?:boolean);
	constructor(prefabWidth:number | PrimitiveCubePrefab = 100, height:number = 100, depth:number = 100, segmentsW:number = 1, segmentsH:number = 1, segmentsD:number = 1, tile6:boolean = true)
	{
		super((prefabWidth instanceof PrimitiveCubePrefab)? prefabWidth : new PrimitiveCubePrefab(null, "triangle", prefabWidth, height, depth, segmentsW, segmentsH, segmentsD, tile6));
	}
}