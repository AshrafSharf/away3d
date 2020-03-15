import { IAssetAdapter } from "@awayjs/core";
import { LightPickerBase, DiffuseBasicMethod, DiffuseCompositeMethod } from "@awayjs/materials";
import { NamedAssetBase } from "../library/assets/NamedAssetBase";
import { IAsset } from "../library/assets/IAsset";
export declare class MaterialBase extends NamedAssetBase implements IAssetAdapter, IAsset {
    private _ambientColor;
    private _ambientComponent;
    private _color;
    private _colorComponent;
    readonly assetType: string;
    /**
     *
     */
    repeat: boolean;
    /**
     *
     */
    mipmap: boolean;
    /**
     *
     */
    smooth: boolean;
    specular: number;
    gloss: number;
    ambient: number;
    constructor(color?: number, alpha?: number);
    animateUVs: boolean;
    ambientColor: number;
    color: number;
    bothSides: boolean;
    /**
     *
     */
    diffuseMethod: DiffuseBasicMethod | DiffuseCompositeMethod;
    /**
     *
     */
    lightPicker: LightPickerBase;
    /**
     *
     */
    alphaBlending: boolean;
    private _updateColor();
}
