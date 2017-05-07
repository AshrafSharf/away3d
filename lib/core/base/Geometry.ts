import {Graphics} from "@awayjs/graphics"
import {SubGeometry} from "./SubGeometry"
import {EventDispatcher} from "@as3web/flash"
export class Geometry extends  EventDispatcher{

	public isPrefab:boolean=false;

	public get adaptee():Graphics{
		return (<Graphics>this._adaptee);
	}
	public set adaptee(value:Graphics){
		this._adaptee=value;
	}
	public get subGeometries():SubGeometry[]{
		return [];
	}
	public addSubGeometry(tSub:SubGeometry){

	}
	constructor(){
		super();
		this.isPrefab=false;
	}
}