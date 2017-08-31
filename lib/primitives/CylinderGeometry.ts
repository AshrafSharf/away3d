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

	public get yUp():boolean{
		return (<PrimitiveCylinderPrefab>this._prefab).yUp;
	}
	public set yUp(value:boolean){
		(<PrimitiveCylinderPrefab>this._prefab).yUp=value;
	}
	
	public get topClosed():boolean{
		return (<PrimitiveCylinderPrefab>this._prefab).topClosed;
	}
	public set topClosed(value:boolean){
		(<PrimitiveCylinderPrefab>this._prefab).topClosed=value;
	}
	
	public get bottomClosed():boolean{
		return (<PrimitiveCylinderPrefab>this._prefab).bottomClosed;
	}
	public set bottomClosed(value:boolean){
		(<PrimitiveCylinderPrefab>this._prefab).bottomClosed=value;
	}
	
	public get segmentsW():number{
		return (<PrimitiveCylinderPrefab>this._prefab).segmentsW;
	}
	public set segmentsW(value:number){
		(<PrimitiveCylinderPrefab>this._prefab).segmentsW=value;
	}
	
	public get segmentsH():number{
		return (<PrimitiveCylinderPrefab>this._prefab).segmentsH;
	}
	public set segmentsH(value:number){
		(<PrimitiveCylinderPrefab>this._prefab).segmentsH=value;
	}
	
	public get bottomRadius():number{
		return (<PrimitiveCylinderPrefab>this._prefab).bottomRadius;
	}
	public set bottomRadius(value:number){
		(<PrimitiveCylinderPrefab>this._prefab).bottomRadius=value;
	}
	
	public get topRadius():number{
		return (<PrimitiveCylinderPrefab>this._prefab).topRadius;
	}
	public set topRadius(value:number){
		(<PrimitiveCylinderPrefab>this._prefab).topRadius=value;
	}
	
	public get height():number{
		return (<PrimitiveCylinderPrefab>this._prefab).height;
	}
	public set height(value:number){
		(<PrimitiveCylinderPrefab>this._prefab).height=value;
	}
}