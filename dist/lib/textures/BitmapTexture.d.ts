import { BitmapData, IBitmapDataOwner } from "@as3web/flash";
import { Texture2DBase } from "./Texture2DBase";
export declare class BitmapTexture extends Texture2DBase implements IBitmapDataOwner {
    private _bitmapData;
    constructor(bitmapData: BitmapData, generateMipmaps?: boolean);
    bitmapData: BitmapData;
}
