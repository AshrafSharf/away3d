import { Stage3DProxy } from "./Stage3DProxy";
import { Stage } from "@as3web/flash";
export declare class Stage3DManager {
    private static _instances;
    private static _numStageProxies;
    private static _stageProxies;
    private _stage;
    constructor(stage: Stage, Stage3DManagerSingletonEnforcer: any);
    static getInstance(stage: any): Stage3DManager;
    getFreeStage3DProxy(forceSoftware?: boolean, profile?: string): Stage3DProxy;
    getStage3DProxy(index: number, forceSoftware?: boolean, profile?: string): Stage3DProxy;
}
