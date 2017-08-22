import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCapsulePrefab} from "@awayjs/scene"
export class CapsuleGeometry extends PrimitiveBase
{

	constructor(prefab?:PrimitiveCapsulePrefab);
	constructor(radius?:number, height?:number, segmentsW?:number, segmentsH?:number, yUp?:boolean);
	constructor(prefabRadius:number | PrimitiveCapsulePrefab = 50, height:number = 100, segmentsW:number = 16, segmentsH:number = 15, yUp:boolean = true)
	{
		super((prefabRadius instanceof PrimitiveCapsulePrefab)? prefabRadius : new PrimitiveCapsulePrefab(null, "triangle", prefabRadius, height, segmentsW, segmentsH, yUp));
	}
}