import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCylinderPrefab } from "@awayjs/scene";
export declare class CylinderGeometry extends PrimitiveBase {
    constructor(prefab?: PrimitiveCylinderPrefab);
    constructor(topRadius?: number, bottomRadius?: number, height?: number, segmentsW?: number, segmentsH?: number, topClosed?: boolean, bottomClosed?: boolean, surfaceClosed?: boolean, yUp?: boolean);
    yUp: boolean;
    topClosed: boolean;
    bottomClosed: boolean;
    segmentsW: number;
    segmentsH: number;
    bottomRadius: number;
    topRadius: number;
    height: number;
}
