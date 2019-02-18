import {Scene, DisplayObject, DisplayObjectContainer} from "@awayjs/scene";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
import { DefaultRenderer } from "@awayjs/renderer";
import { ObjectContainer3D } from './ObjectContainer3D';
import { Object3D } from '../core/base/Object3D';

export class Scene3D extends ObjectContainer3D {
	
	constructor(renderer:DefaultRenderer){
		super(new Scene(renderer).root);
	}

	public addChild(child:Object3D){

		(<DisplayObjectContainer> (<Scene><any>this._adaptee).root).addChild(<DisplayObject> child.adaptee);
		return child;
	}
	public removeChild(child:Object3D):void
	{
		(<DisplayObjectContainer> (<Scene><any>this._adaptee).root).removeChild(<DisplayObject> child.adaptee);
	}
}