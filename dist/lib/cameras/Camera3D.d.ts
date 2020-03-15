import { Vector3D } from "@awayjs/core";
import { ObjectContainer3D } from "../containers/ObjectContainer3D";
import { LensBase } from "./lenses/LensBase";
export declare class Camera3D extends ObjectContainer3D {
    constructor();
    lens: LensBase;
    project(vector3D: Vector3D): Vector3D;
    unproject(nX: number, nY: number, sZ: number, target?: Vector3D): Vector3D;
}
