import { ControllerBase as AwayControllerBase } from "@awayjs/scene";
import { Object3D } from "../core/base/Object3D";
export declare class ControllerBase {
    static assetType: string;
    protected _adaptee: AwayControllerBase;
    readonly assetType: string;
    constructor(targetObject?: Object3D);
    targetObject: Object3D;
    autoUpdate: boolean;
    update(interpolate?: boolean): void;
}
