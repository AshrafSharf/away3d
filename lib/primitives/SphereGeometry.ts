import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveSpherePrefab} from "@awayjs/scene"
export class SphereGeometry extends PrimitiveBase
{
	constructor(prefab?:PrimitiveSpherePrefab);
	constructor(radius?:number, segmentsW?:number, segmentsH?:number, yUp?:boolean);
	constructor(prefabRadius:number | PrimitiveSpherePrefab = 50, segmentsW:number = 16, segmentsH:number = 12, yUp:boolean = true)
	{
		super((prefabRadius instanceof PrimitiveSpherePrefab)? prefabRadius : new PrimitiveSpherePrefab(null, "triangle", prefabRadius, segmentsW, segmentsH, yUp));
	}

}