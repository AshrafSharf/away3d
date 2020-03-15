import { ImageBase, Image2D } from "@awayjs/stage";
import { Sprite, DisplayObjectContainer, ISceneGraphFactory, PrefabBase } from "@awayjs/scene";
import { MethodMaterial } from "@awayjs/materials";
import { DefaultSceneGraphFactory } from "@awayjs/scene";
export declare class Away3DSceneGraphFactory extends DefaultSceneGraphFactory implements ISceneGraphFactory {
    imageStore: Object;
    createSprite(prefab?: PrefabBase): Sprite;
    createDisplayObjectContainer(): DisplayObjectContainer;
    createMaterial(image?: ImageBase, alpha?: number): MethodMaterial;
    createMaterial(color?: number, alpha?: number): MethodMaterial;
    createImage2D(width: number, height: number, transparent?: boolean, fillColor?: number, powerOfTwo?: boolean): Image2D;
    private _createGeometry(prefab);
}
