import {Camera as AwayCamera} from "@awayjs/scene";
import {Vector3D} from "@awayjs/core";
export class Camera3D extends AwayCamera{
	public lens:any;
	public forwardVector:Vector3D;
	public upVector:Vector3D;
}