import {AttributesBuffer} from "@awayjs/core";
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
		this._adaptee.setPositions(verts);
	}
	public updateIndexData(idx:any){

		this._adaptee.setIndices(idx);
	}
	public updateUVData(uvs:any){

		this._adaptee.setUVs(uvs);
	}
	public updateVertexNormalData(value:any){

		//this._adaptee.setNormals(value);
	}
	public updateVertexTangentData(value:any){

		//this._adaptee.setTangents(value);
	}

	constructor(adaptee:TriangleElements = null)
	{
		this._adaptee = adaptee || new TriangleElements(new AttributesBuffer());
	}
}