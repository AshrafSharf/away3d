import {Vector3D} from "@awayjs/core";
import {RaycastPicker as AwayJSRaycastPicker} from "@awayjs/view";

import {PickingCollisionVO} from "./PickingCollisionVO";
import {View3D} from "../../containers/View3D";

export class RaycastPicker extends AwayJSRaycastPicker
{
	public getViewCollision(x:number, y:number, view: View3D): PickingCollisionVO
	{
		//update ray
		var rayPosition:Vector3D = view.unproject(x, y, 0);
		var rayDirection:Vector3D = view.unproject(x, y, 1).subtract(rayPosition);

		return super.getCollision(rayPosition, rayDirection, view.view);
	}
}