import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveSpherePrefab} from "@awayjs/scene"
export class WireframeSphere extends PrimitiveBase
{
	constructor(radius:number = 50, segmentsW:number = 16, segmentsH:number = 12, color:number = 0xFFFFFF, thickness:Number = 1){
		super();
		this._prefab=new PrimitiveSpherePrefab(null, "line", radius, segmentsW, segmentsH);
	}

}