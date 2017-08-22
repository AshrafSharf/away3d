import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCylinderPrefab} from "@awayjs/scene"
export class CylinderGeometry extends PrimitiveBase
{
	constructor(prefab?:PrimitiveCylinderPrefab);
	constructor(topRadius?:number, bottomRadius?:number, height?:number, segmentsW?:number, segmentsH?:number, topClosed?:boolean, bottomClosed?:boolean, surfaceClosed?:boolean, yUp?:boolean);
	constructor(prefabTopRadius:number | PrimitiveCylinderPrefab = 50, bottomRadius:number = 50, height:number = 100, segmentsW:number = 16, segmentsH:number = 1, topClosed:boolean = true, bottomClosed:boolean = true, surfaceClosed:boolean = true, yUp:boolean = true)
	{
		super((prefabTopRadius instanceof PrimitiveCylinderPrefab)? prefabTopRadius : new PrimitiveCylinderPrefab(null, "triangle", prefabTopRadius, bottomRadius, height, segmentsW, segmentsH, topClosed, bottomClosed, surfaceClosed, yUp));
	}
}