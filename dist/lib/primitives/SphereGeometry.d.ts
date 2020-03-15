import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveSpherePrefab } from "@awayjs/scene";
export declare class SphereGeometry extends PrimitiveBase {
    constructor(prefab?: PrimitiveSpherePrefab);
    constructor(radius?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean);
}
