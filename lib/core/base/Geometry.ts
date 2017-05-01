import {Graphics} from "@awayjs/graphics"
import {SubGeometry} from "./SubGeometry"
export class Geometry extends  Graphics{

	public get subGeometries():SubGeometry[]{
		return [];
	}
	public addSubGeometry(tSub:SubGeometry){

	}
}