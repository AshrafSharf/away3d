import { PrimitivePlanePrefab } from "@awayjs/scene";
import { PrimitiveBase } from "./PrimitiveBase";
export declare class PlaneGeometry extends PrimitiveBase {
    /**
     *
     */
    height: number;
    /**
     *
     */
    width: number;
    /**
     *
     */
    doubleSided: boolean;
    /**
     * Creates a new Plane object.
     * @param width The width of the plane.
     * @param height The height of the plane.
     * @param segmentsW The number of segments that make up the plane along the X-axis.
     * @param segmentsH The number of segments that make up the plane along the Y or Z-axis.
     * @param yUp Defines whether the normal vector of the plane should point along the Y-axis (true) or Z-axis (false).
     * @param doubleSided Defines whether the plane will be visible from both sides, with correct vertex normals.
     */
    constructor(prefab?: PrimitivePlanePrefab);
    constructor(width?: number, height?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean, doubleSided?: boolean);
}
