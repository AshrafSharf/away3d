import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCapsulePrefab } from "@awayjs/scene";
export declare class CapsuleGeometry extends PrimitiveBase {
    constructor(prefab?: PrimitiveCapsulePrefab);
    constructor(radius?: number, height?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean);
}
