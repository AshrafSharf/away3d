import {Geometry} from "../core/base/Geometry"
import {PrimitivePlanePrefab, PrimitivePrefabBase} from "@awayjs/scene"
import {Sprite} from "@awayjs/scene"
export class PrimitiveBase extends Geometry
{
	public scaleUV(scaleU:number, scaleV:number)
	{
		this._prefab.scaleU = scaleU;
		this._prefab.scaleV = scaleV;
	}

	protected _prefab:PrimitivePrefabBase;
	/**
	 * Creates a new Plane object.
	 * @param width The width of the plane.
	 * @param height The height of the plane.
	 * @param segmentsW The number of segments that make up the plane along the X-axis.
	 * @param segmentsH The number of segments that make up the plane along the Y or Z-axis.
	 * @param yUp Defines whether the normal vector of the plane should point along the Y-axis (true) or Z-axis (false).
	 * @param doubleSided Defines whether the plane will be visible from both sides, with correct vertex normals.
	 */
	constructor(width:number=100, height:number=100, segmentsW:number=1, segmentsH:number=1, yUp:boolean = true, doubleSided:boolean = false){
		super();
		this.isPrefab=true;
	}
	public getSprite():Sprite{
		return (<Sprite>this._prefab.getNewObject());
	}

}