import {Geometry} from "../core/base/Geometry"
import {PrimitiveBase} from "./PrimitiveBase"
import {PrimitiveSpherePrefab} from "@awayjs/scene"
export class SphereGeometry extends PrimitiveBase
{
	constructor(radius:number = 50, segmentsW:number = 16, segmentsH:number = 12, yUp:boolean = true)
	{
		super(new PrimitiveSpherePrefab(null, "triangle", radius, segmentsW, segmentsH, yUp));
	}

}