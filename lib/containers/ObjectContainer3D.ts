
import {DisplayObjectContainer} from "@awayjs/scene"
import {Vector3D, Matrix3D} from "@awayjs/core"
export class ObjectContainer3D extends DisplayObjectContainer{

	public get position():Vector3D{
		return null;
	}
	public get inverseSceneTransform():Matrix3D{
		return null;
	}

	public translate(axis:Vector3D, distance:number){

	}
	public getChildAt(index:number):ObjectContainer3D{
		return null;
	}


}