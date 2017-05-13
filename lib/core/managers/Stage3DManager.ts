import {Stage3DProxy} from "./Stage3DProxy"
import {Stage} from "@as3web/flash"
export class Stage3DManager {

	private static _instances:any={};
	private static _numStageProxies:number = 0;
	private static _stageProxies:Stage3DProxy[]=[];

	private _stage:Stage;
	constructor(stage:Stage, Stage3DManagerSingletonEnforcer:any)
{
	//todo:any is Stage3DManagerSingletonEnforcer
	//if (!Stage3DManagerSingletonEnforcer)
	//	throw new Error("This class is a multiton and cannot be instantiated manually. Use Stage3DManager.getInstance instead.");
	this._stage = stage;

	if (!Stage3DManager._stageProxies)
		Stage3DManager._stageProxies = [];
}
	public static getInstance(stage:any):Stage3DManager{
		if(Stage3DManager._instances[stage]==null){
			Stage3DManager._instances[stage]=new Stage3DManager(stage, null);
		}
		return Stage3DManager._instances[stage];
	}
	public getFreeStage3DProxy(forceSoftware:boolean = false, profile:string = "baseline"):Stage3DProxy{
		console.log("getFreeStage3DProxy not implemented yet in Stage3DManager");
		var i:number=0;
		var len:number = 8;//Stage3DManager._stageProxies.length;

		while (i < len) {
			if (!Stage3DManager._stageProxies[i]) {
				this.getStage3DProxy(i, forceSoftware, profile);
				Stage3DManager._stageProxies[i].width = this._stage.stageWidth;
				Stage3DManager._stageProxies[i].height = this._stage.stageHeight;
				return Stage3DManager._stageProxies[i];
			}
			++i;
		}

		throw ("Too many Stage3D instances used!");
	}
	public getStage3DProxy(index:number, forceSoftware:boolean = false, profile:string = "baseline"):Stage3DProxy
	{
		if (!Stage3DManager._stageProxies[index]) {
			Stage3DManager._numStageProxies++;
			Stage3DManager._stageProxies[index] = new Stage3DProxy(index, this._stage.stage3Ds[index], this, forceSoftware, profile);
		}

		return Stage3DManager._stageProxies[index];
	}

}