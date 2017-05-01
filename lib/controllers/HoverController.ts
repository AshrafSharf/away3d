
import {ObjectContainer3D} from "../containers/ObjectContainer3D"
import {Camera3D} from "../cameras/Camera3D"
export class HoverController {

	constructor(cam:Camera3D, ocject:ObjectContainer3D){

	}
	public steps:number;
	public distance:number;
	public panAngle:number;
	public tiltAngle:number;
}