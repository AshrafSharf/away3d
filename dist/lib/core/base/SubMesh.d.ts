import { Shape } from "@awayjs/graphics";
import { MaterialBase } from "../../materials/MaterialBase";
export declare class SubMesh {
    private _adaptee;
    constructor(adaptee: Shape);
    material: MaterialBase;
}
