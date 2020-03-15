import { Graphics } from "@awayjs/graphics";
import { SubGeometry } from "./SubGeometry";
import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
export declare class Geometry extends NamedAssetBase {
    private _subGeometries;
    private _subGeometriesDirty;
    readonly assetType: string;
    readonly subGeometries: SubGeometry[];
    addSubGeometry(tSub: SubGeometry): void;
    constructor(adaptee?: Graphics);
    scaleUV(scaleU?: number, scaleV?: number): void;
    private onGraphicsInvalidate(event);
    private _updateSubGeometries();
}
