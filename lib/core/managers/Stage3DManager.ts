import {Stage3DProxy} from "./Stage3DProxy"
export class Stage3DManager {

	private static _singelton:Stage3DManager=null;

	public static getInstance(stage:any):Stage3DManager{
		if(Stage3DManager._singelton==null){
			Stage3DManager._singelton=new Stage3DManager();
		}
		return Stage3DManager._singelton;
	}
	public getFreeStage3DProxy():Stage3DProxy{
		console.log("getFreeStage3DProxy not implemented yet in Stage3DManager")
		return new Stage3DProxy();
	}

}