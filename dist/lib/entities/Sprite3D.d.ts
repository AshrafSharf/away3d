import { Entity } from "./Entity";
import { MaterialBase } from "../materials/MaterialBase";
export declare class Sprite3D extends Entity {
    constructor(mat: MaterialBase, width: number, height: number);
    material: MaterialBase;
}
