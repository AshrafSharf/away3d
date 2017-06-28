import {Stage3DProxy} from "./Stage3DProxy"
import {Stage} from "@as3web/flash"
import {StageManager as AwayStageManager, ContextMode, Stage as AwayStage} from "@awayjs/stage"
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

		var awayStage:AwayStage=AwayStageManager.getInstance().getStageAt(0);
		if((<any>awayStage).adaptee){
			return (<Stage3DProxy>(<any>awayStage).adaptee);
		}
		(<any>awayStage).adaptee=new Stage3DProxy(0, awayStage, this);
		return (<Stage3DProxy>(<any>awayStage).adaptee);

	}
	public getStage3DProxy(index:number, forceSoftware:boolean = false, profile:string = "baseline"):Stage3DProxy
	{
		var awayStage:AwayStage=AwayStageManager.getInstance().getStageAt(index);
		if((<any>awayStage).adaptee){
			return (<Stage3DProxy>(<any>awayStage).adaptee);
		}
		(<any>awayStage).adaptee=new Stage3DProxy(0, awayStage, this);
		return (<Stage3DProxy>(<any>awayStage).adaptee);
	}

}