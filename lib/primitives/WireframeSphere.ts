import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveSpherePrefab} from "@awayjs/scene"
export class WireframeSphere extends PrimitiveBase
{
	constructor(prefab?:PrimitiveSpherePrefab);
	constructor(radius?:number, segmentsW?:number, segmentsH?:number, color?:number, thickness?:Number);
	constructor(prefabRadius:number | PrimitiveSpherePrefab = 50, segmentsW:number = 16, segmentsH:number = 12, color:number = 0xFFFFFF, thickness:Number = 1)
	{
		super((prefabRadius instanceof PrimitiveSpherePrefab)? prefabRadius : new PrimitiveSpherePrefab(null, "line", prefabRadius, segmentsW, segmentsH));
	}

}