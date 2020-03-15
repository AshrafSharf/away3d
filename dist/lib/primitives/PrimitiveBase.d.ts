import { Geometry } from "../core/base/Geometry";
import { PrimitivePrefabBase } from "@awayjs/scene";
export declare class PrimitiveBase extends Geometry {
    protected _prefab: PrimitivePrefabBase;
    readonly prefab: PrimitivePrefabBase;
    scaleUV(scaleU: number, scaleV: number): void;
    validate(): void;
    /**
     * Creates a new Plane object.
     * @param width The width of the plane.
     * @param height The height of the plane.
     * @param segmentsW The number of segments that make up the plane along the X-axis.
     * @param segmentsH The number of segments that make up the plane along the Y or Z-axis.
     * @param yUp Defines whether the normal vector of the plane should point along the Y-axis (true) or Z-axis (false).
     * @param doubleSided Defines whether the plane will be visible from both sides, with correct vertex normals.
     */
    constructor(prefab: PrimitivePrefabBase);
}
