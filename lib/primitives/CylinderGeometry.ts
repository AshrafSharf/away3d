import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCylinderPrefab} from "@awayjs/scene"
export class CylinderGeometry extends PrimitiveBase
{

	constructor(topRadius:number = 50, bottomRadius:number = 50, height:number = 100, segmentsW:number = 16, segmentsH:number = 1, topClosed:boolean = true, bottomClosed:boolean = true, surfaceClosed:boolean = true, yUp:boolean = true){
		super();
		this._prefab=new PrimitiveCylinderPrefab(null, "triangle", topRadius, bottomRadius, height, segmentsW, segmentsH, topClosed, bottomClosed, surfaceClosed, yUp);
	}
}