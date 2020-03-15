import { IAssetAdapter } from "@awayjs/core";
import { TextureBase } from "@awayjs/materials";
export declare class Texture2DBase implements IAssetAdapter {
    protected _adaptee: any;
    readonly adaptee: TextureBase;
    constructor(adaptee: TextureBase);
    dispose(): void;
}
