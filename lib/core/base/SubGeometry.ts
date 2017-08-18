import {TriangleElements} from "@awayjs/graphics";

export class SubGeometry
{
	private _adaptee:TriangleElements;

	public get adaptee():TriangleElements
	{
		return this._adaptee;
	}
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

	constructor(adaptee:TriangleElements = null)
	{
		this._adaptee = adaptee || new TriangleElements();
	}
}