import { Vector3D } from "@awayjs/core";
import { ControllerBase } from "./ControllerBase";
import { Object3D } from "../core/base/Object3D";
export declare class LookAtController extends ControllerBase {
    static assetType: string;
    readonly assetType: string;
    constructor(targetObject?: Object3D, lookAtObject?: Object3D);
    lookAtPosition: Vector3D;
    lookAtObject: Object3D;
}
