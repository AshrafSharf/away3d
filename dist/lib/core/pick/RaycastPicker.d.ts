import { RaycastPicker as AwayJSRaycastPicker } from "@awayjs/view";
import { PickingCollisionVO } from "./PickingCollisionVO";
import { View3D } from "../../containers/View3D";
export declare class RaycastPicker extends AwayJSRaycastPicker {
    getViewCollision(x: number, y: number, view: View3D): PickingCollisionVO;
}
