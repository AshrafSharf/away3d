import { TriangleElements } from "@awayjs/graphics";
export declare class SubGeometry {
    private _adaptee;
    readonly adaptee: TriangleElements;
    autoDeriveVertexNormals: boolean;
    autoDeriveVertexTangents: boolean;
    readonly vertexData: any[];
    updateVertexData(verts: any): void;
    updateIndexData(idx: any): void;
    updateUVData(uvs: any): void;
    updateVertexNormalData(value: any): void;
    updateVertexTangentData(value: any): void;
    constructor(adaptee?: TriangleElements);
}
