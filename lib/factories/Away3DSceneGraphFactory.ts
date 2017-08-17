import {IAssetAdapter} from "@awayjs/core";
import {Timeline, Sprite, DisplayObjectContainer, Billboard, ISceneGraphFactory, DefaultSceneGraphFactory} from "@awayjs/scene";

import {Mesh} from "../entities/Mesh";
import {Sprite3D} from "../entities/Sprite3D";
import {ObjectContainer3D} from "../containers/ObjectContainer3D";

export class Away3DSceneGraphFactory extends DefaultSceneGraphFactory implements ISceneGraphFactory
{

	createSprite():Sprite
	{
		return <Sprite> new Mesh(null).adaptee;
	}

	createDisplayObjectContainer():DisplayObjectContainer
	{
		return <DisplayObjectContainer> new ObjectContainer3D().adaptee;
	}
}