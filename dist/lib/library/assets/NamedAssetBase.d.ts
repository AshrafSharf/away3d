import { AssetBase, IAssetAdapter } from "@awayjs/core";
import { EventDispatcher } from "@as3web/flash";
export declare class NamedAssetBase extends EventDispatcher implements IAssetAdapter {
    protected _adaptee: AssetBase;
    private _id;
    constructor(adaptee?: AssetBase);
    readonly adaptee: AssetBase;
    name: string;
    /**
     * The original name used for this asset in the resource (e.g. file) in which
     * it was found. This may not be the same as <code>name</code>, which may
     * have changed due to of a name conflict.
     */
    readonly originalName: string;
    id: string;
    readonly assetNamespace: string;
    readonly assetFullPath: any[];
    assetPathEquals(name: string, ns: string): boolean;
    resetAssetPath(name: string, ns?: string, overrideOriginal?: boolean): void;
    dispose(): void;
}
