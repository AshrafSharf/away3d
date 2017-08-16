import {Scene} from "@awayjs/scene";

import {ObjectContainer3D} from "./ObjectContainer3D"

export class Scene3D extends ObjectContainer3D {
	
	constructor(){
		super(new Scene());
	}
}