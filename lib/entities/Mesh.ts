import {Sprite} from "@awayjs/scene"
import {Geometry} from "../core/base/Geometry"
import {ColorMaterial} from "../materials/ColorMaterial"
export class Mesh extends Sprite
{
	constructor(geom:Geometry, mat:ColorMaterial){
		super();
	}
	public pickingCollider:any;
	public geometry:any;
	public material:any;
	public rotateTo(x:number, y:number, z:number){

	};
	

}