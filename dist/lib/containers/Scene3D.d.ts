import { DisplayObjectContainer } from "@awayjs/scene";
import { DefaultRenderer } from "@awayjs/renderer";
import { ObjectContainer3D } from './ObjectContainer3D';
import { Object3D } from '../core/base/Object3D';
export declare class Scene3D extends ObjectContainer3D {
    constructor(renderer: DefaultRenderer, adaptee: DisplayObjectContainer);
    addChild(child: Object3D): Object3D;
    removeChild(child: Object3D): void;
}
