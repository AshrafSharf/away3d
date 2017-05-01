
import {EventDispatcher} from "@awayjs/core"
export class Stage3DProxy extends EventDispatcher {


	public color:number=0xffffff;
	public antiAlias=8;
	public clear(){};
	public present(){};
	public x:number;
	public y:number;
	public width:number;
	public height:number;
	public viewPort:any;
	public stage3D:any;

}