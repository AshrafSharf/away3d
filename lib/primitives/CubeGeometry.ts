import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCubePrefab} from "@awayjs/scene"
export class CubeGeometry extends PrimitiveBase
{

	constructor(width:number = 100, height:number = 100, depth:number = 100, segmentsW:number = 1, segmentsH:number = 1, segmentsD:number = 1, tile6:boolean = true){
		super();
		this._prefab=new PrimitiveCubePrefab(null, "triangle", width, height, depth, segmentsW, segmentsH, segmentsD, tile6);
	}
}