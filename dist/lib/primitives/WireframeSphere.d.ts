import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveSpherePrefab } from "@awayjs/scene";
export declare class WireframeSphere extends PrimitiveBase {
    constructor(prefab?: PrimitiveSpherePrefab);
    constructor(radius?: number, segmentsW?: number, segmentsH?: number, color?: number, thickness?: Number);
}
