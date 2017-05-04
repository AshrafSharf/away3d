import {TriangleElements} from "@awayjs/graphics"
export class SubGeometry extends  TriangleElements{
	public autoDeriveVertexNormals:boolean;
	public autoDeriveVertexTangents:boolean;
	public get vertexData():any[]{
		return [];
	}
	public updateVertexData(verts:any){

	}
	public updateIndexData(idx:any){

	}
	public updateUVData(verts:any){

	}
	public updateVertexNormalData(verts:any){

	}
	public updateVertexTangentData(verts:any){
		
	}
}