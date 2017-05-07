import {ObjectContainer3D} from "./ObjectContainer3D"

export class Scene3D extends ObjectContainer3D {
	
	constructor(){
		super();
		//the adaptee for Scene3D must be set in View3D
		//the AwayJS-scene must be set as adaptee
	}
	
}