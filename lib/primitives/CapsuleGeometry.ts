import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveCapsulePrefab} from "@awayjs/scene"
export class CapsuleGeometry extends PrimitiveBase
{

	constructor(radius:number = 50, height:number = 100, segmentsW:number = 16, segmentsH:number = 15, yUp:boolean = true)
	{
		super(new PrimitiveCapsulePrefab(null, "triangle", radius, height, segmentsW, segmentsH, yUp));
	}
}