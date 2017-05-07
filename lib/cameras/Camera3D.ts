import {Camera as AwayCamera} from "@awayjs/scene";
import {Vector3D} from "@awayjs/core";
import {ObjectContainer3D} from "../containers/ObjectContainer3D";
export class Camera3D extends ObjectContainer3D{
	
	constructor(){
		super();
		this.adaptee=new AwayCamera();
	}
	public get adaptee():AwayCamera{
		return (<AwayCamera>this._adaptee);
	}
	public set adaptee(value:AwayCamera){
		this._adaptee=value;
	}
	public lens:any;
	public forwardVector:Vector3D;
	public upVector:Vector3D;
}