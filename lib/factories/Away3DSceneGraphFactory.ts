import {IAssetAdapter, Point} from "@awayjs/core";
import {BitmapImage2D, ImageBase, ElementsType} from "@awayjs/graphics";
import {Timeline, Sprite, DisplayObjectContainer, Billboard, ISceneGraphFactory, PrefabBase, PrimitiveCapsulePrefab, PrimitiveCubePrefab, PrimitiveCylinderPrefab, PrimitivePlanePrefab, PrimitiveSpherePrefab} from "@awayjs/scene";
import {MethodMaterial} from "@awayjs/materials";
import {DefaultSceneGraphFactory} from "@awayjs/parsers";

import {BitmapData} from "@as3web/flash";

import {Geometry} from "../core/base/Geometry";
import {Mesh} from "../entities/Mesh";
import {Sprite3D} from "../entities/Sprite3D";
import {TextureMaterial} from "../materials/TextureMaterial";
import {ColorMaterial} from "../materials/ColorMaterial";
import {CapsuleGeometry} from "../primitives/CapsuleGeometry";
import {CubeGeometry} from "../primitives/CubeGeometry";
import {CylinderGeometry} from "../primitives/CylinderGeometry";
import {PlaneGeometry} from "../primitives/PlaneGeometry";
import {SphereGeometry} from "../primitives/SphereGeometry";
import {WireframeSphere} from "../primitives/WireframeSphere";
import {ObjectContainer3D} from "../containers/ObjectContainer3D";
import {BitmapTexture} from "../textures/BitmapTexture";

export class Away3DSceneGraphFactory extends DefaultSceneGraphFactory implements ISceneGraphFactory
{
	public imageStore:Object = {};

	public createSprite(prefab:PrefabBase = null):Sprite
	{
		if (prefab)
			return <Sprite> new Mesh(this._createGeometry(prefab)).adaptee;

		return <Sprite> new Mesh(null).adaptee;
	}

	public createDisplayObjectContainer():DisplayObjectContainer
	{
		return <DisplayObjectContainer> new ObjectContainer3D().adaptee;
	}

	public createMaterial(image?:ImageBase, alpha?:number):MethodMaterial;
	public createMaterial(color?:number, alpha?:number):MethodMaterial;
	public createMaterial(imageColor?:any, alpha?:number):MethodMaterial
	{
		var material:MethodMaterial;

		if (imageColor instanceof ImageBase) {
			var image:BitmapImage2D = <BitmapImage2D> imageColor;
			material = <MethodMaterial> new TextureMaterial(new BitmapTexture(this.imageStore[image.id] || (this.imageStore[image.id] = this._getBitmapData(image)))).adaptee;
		} else {
			material = <MethodMaterial> new ColorMaterial(imageColor, alpha).adaptee;
		}

		return material;
	}

	private _getBitmapData(image:BitmapImage2D):BitmapData
	{
		var bitmapData:BitmapData = new BitmapData(image.width, image.height, image.transparent);

		(<BitmapImage2D> bitmapData.adaptee).copyPixels(image, image.rect, new Point());

		return bitmapData;
	}

	private _createGeometry(prefab:PrefabBase):Geometry
	{
		if (prefab instanceof PrimitiveCapsulePrefab)
			return new CapsuleGeometry(prefab);
		else if (prefab instanceof PrimitiveCubePrefab)
			return new CubeGeometry(prefab);
		else if (prefab instanceof PrimitiveCylinderPrefab)
			return new CylinderGeometry(prefab);
		else if (prefab instanceof PrimitivePlanePrefab)
			return new PlaneGeometry(prefab);
		else if (prefab instanceof PrimitiveSpherePrefab && prefab.elementsType == ElementsType.TRIANGLE)
			return new SphereGeometry(prefab);
		else if (prefab instanceof PrimitiveSpherePrefab)
			return new WireframeSphere(prefab);
	}
}