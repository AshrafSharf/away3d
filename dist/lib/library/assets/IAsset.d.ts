import { IAssetAdapter } from "@awayjs/core";
export interface IAsset extends IAssetAdapter {
    /**
     *
     */
    name: string;
    /**
     *
     */
    id: string;
    /**
     *
     */
    assetNamespace: string;
    /**
     *
     */
    assetType: string;
    /**
     *
     */
    assetFullPath: Array<string>;
    /**
     *
     * @param name
     * @param ns
     */
    assetPathEquals(name: string, ns: string): boolean;
    /**
     *
     * @param name
     * @param ns
     * @param overrideOriginal
     */
    resetAssetPath(name: string, ns: string, overrideOriginal?: boolean): void;
}
