import { Texture2DBase } from "../textures/Texture2DBase";
import { MaterialBase } from "./MaterialBase";
export declare class TextureMaterial extends MaterialBase {
    private _texture;
    constructor(texture: Texture2DBase, smooth?: boolean, repeat?: boolean, mipmap?: boolean);
    /**
     *
     * @returns {Texture2DBase}
     */
    texture: Texture2DBase;
    /**
     *
     */
    blendMode: string;
}
