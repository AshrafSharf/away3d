import { PrimitiveBase } from "./PrimitiveBase";
import { PrimitiveCubePrefab } from "@awayjs/scene";
export declare class CubeGeometry extends PrimitiveBase {
    /**
     *
     */
    tile6: boolean;
    constructor(prefab?: PrimitiveCubePrefab);
    constructor(width?: number, height?: number, depth?: number, segmentsW?: number, segmentsH?: number, segmentsD?: number, tile6?: boolean);
}
