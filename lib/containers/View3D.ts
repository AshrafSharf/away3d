
import { Sprite, Point, Rectangle, Vector3D, Transform } from "@as3web/flash"
import { View } from "@awayjs/view";
import { DefaultRenderer } from "@awayjs/renderer";

import { Stage3DProxy } from "../core/managers/Stage3DProxy";
import { Camera3D } from "../cameras/Camera3D";
import { Scene3D } from "./Scene3D";



// it is important that View3D inherits Sprite from the @as3web/flash package !!!
export class View3D extends Sprite
{
	protected _scene:Scene3D;
	protected _camera:Camera3D;

	private _view: View;
	private _stage3DProxy: Stage3DProxy;
	private _renderer: DefaultRenderer;

	private _localTLPos:Point;
	private _localBRPos:Point;
	private _globalPos:Point;

	constructor(scene:Scene3D = null, camera:Camera3D = null, renderer:any = null, forceSoftware:boolean = false, profile:string = "baseline"){
		super();
		//this._profile = profile;
		this._localTLPos=new Point();
		this._globalPos=new Point();
		this._localBRPos=new Point();

		this._scene = scene || new Scene3D();
	}



	public get depthPrepass():boolean
	{
		//todo
		return false;
	}

	public set depthPrepass(value:boolean)
	{
		//todo
	}


	public get rightClickMenuEnabled():boolean
	{
		//todo
		return false;
	}

	public set rightClickMenuEnabled(val:boolean)
	{
		//todo
	}

	public get stage3DProxy():Stage3DProxy
	{
		//todo
		return this._stage3DProxy;
	}

	public set stage3DProxy(stage3DProxy:Stage3DProxy)
	{
		this._stage3DProxy=stage3DProxy;
		//create the view
		this._renderer = new DefaultRenderer(stage3DProxy.stage3D);
		this._renderer.renderableSorter = null;

		this._view = new View(this._renderer);
		this._camera = new Camera3D();
		this._view.camera = this._camera.adaptee;
		this._scene.adaptee=this._view.scene;
		this._view.scene.adapter=this._scene;
	}


	/**
	 * Forces mouse-move related events even when the mouse hasn't moved. This allows mouseOver and mouseOut events
	 * etc to be triggered due to changes in the scene graph. Defaults to false.
	 */
	public get forceMouseMove():boolean
	{
		//todo
		return false;
	}

	public set forceMouseMove(value:boolean)
	{
		//todo
	}

	public get background():any
	{
		// todo any is Texture2DBase
		return null;
	}

	public set background(value:any)
	{
		// todo any is Texture2DBase
	}
	/**
	 * Used in a sharedContext. When true, clears the depth buffer prior to rendering this particular
	 * view to avoid depth sorting with lower layers. When false, the depth buffer is not cleared
	 * from the previous (lower) view's render so objects in this view may be occluded by the lower
	 * layer. Defaults to false.
	 */
	public get layeredView():boolean
	{
		return this._view.layeredView;
	}

	public set layeredView(value:boolean)
	{
		this._view.layeredView=value;
	}


	/**
	 * Not supported. Use filters3d instead.
	 */
	public get filters():any[]
	{
		throw new Error("filters is not supported in View3D. Use filters3d instead.");
	}

	/**
	 * Not supported. Use filters3d instead.
	 */
	public set filters(value:any[])
	{
		throw new Error("filters is not supported in View3D. Use filters3d instead.");
	}

	public get filters3d():any[]
	{
		//todo: any
		return [];
	}

	public set filters3d(value:any[])
	{
		//todo: any
	}

	/**
	 * The renderer used to draw the scene.
	 */

	public get renderer():any
	{
		//todo: any is Rendererbase
		return null;
	}

	public set renderer(value:any)
	{
		//todo: any is Rendererbase
	}

	/**
	 * The background color of the screen. This value is only used when clearAll is set to true.
	 */
	public get backgroundColor():number
	{
		return this._view.backgroundColor;
	}

	public set backgroundColor(value:number)
	{
		this._view.backgroundColor=value;
	}

	public get backgroundAlpha():number
	{
		return this._view.backgroundAlpha;
	}

	public set backgroundAlpha(value:number)
	{
		this._view.backgroundAlpha=value;
	}

	/**
	 * The camera that's used to render the scene for this viewport
	 */
	public get camera():Camera3D
	{
		return this._camera;
	}

	/**
	 * Set camera that's used to render the scene for this viewport
	 */
	public set camera(camera:Camera3D)
	{
		this._camera = camera;
	}

	/**
	 * The scene that's used to render for this viewport
	 */
	public get scene():Scene3D
	{
		return this._scene;
	}
	/**
	 * Set the scene that's used to render for this viewport
	 */
	public set scene(scene:Scene3D)
	{
		this._scene = scene;
	}


	// todo: probably temporary:
	/**
	 * The amount of milliseconds the last render call took
	 */
	public get deltaTime():number
	{
		//todo
		return 0;
	}

	/**
	 * The width of the viewport. When software rendering is used, this is limited by the
	 * platform to 2048 pixels.
	 */
	public get width():number
	{
		return this.adaptee.width;
	}

	public set width(value:number)
	{

		this.adaptee.width=value;
		this._localBRPos.x = value + this._localTLPos.x;
		this._view.width= this.adaptee.parent.localToGlobal(this._localBRPos).x - this._globalPos.x;

	}

	/**
	 * The height of the viewport. When software rendering is used, this is limited by the
	 * platform to 2048 pixels.
	 */
	public get height():number
	{
		return this.adaptee.height;
	}

	public set height(value:number)
	{
		this.adaptee.height=value;
		this._localBRPos.y = value + this._localTLPos.y;
		this._view.height=this.adaptee.parent.localToGlobal(this._localBRPos).y - this._globalPos.y;

	}

	public get x()
	{
		return this.adaptee.x;
	}
	public set x(value:number)
	{

		this.adaptee.x=value;
		this._localTLPos.x = value;
		this._globalPos = this.adaptee.parent.localToGlobal(this._localTLPos);
		this._view.x=this._globalPos.x;
	}


	public get y()
	{
		return this.adaptee.y;
	}
	public set y(value:number)
	{
		this.adaptee.y=value;
		this._localTLPos.y=value;
		this._globalPos = this.adaptee.parent.localToGlobal(this._localTLPos);
		this._view.y = this._globalPos.y;
	}

	public set visible(value:boolean)
	{
		this._view.visible=value;
	}

	/**
	 * The amount of anti-aliasing to be used.
	 */
	public get antiAlias():number
	{
		//todo
		return 8;
	}

	public set antiAlias(value:number)
	{
		//todo
	}

	/**
	 * The amount of faces that were pushed through the render pipeline on the last frame render.
	 */
	public get renderedFacesCount():number
	{
		//todo
		return 0;
	}

	/**
	 * Defers control of Context3D clear() and present() calls to Stage3DProxy, enabling multiple Stage3D frameworks
	 * to share the same Context3D object.
	 */
	public get shareContext():boolean
	{
		//todo
		return this._view.shareContext;
	}

	public set shareContext(value:boolean)
	{
		this._view.shareContext=value;
	}


	/**
	 * Defines a source url string that can be accessed though a View Source option in the right-click menu.
	 *
	 * Requires the stats panel to be enabled.
	 *
	 * @param    url        The url to the source files.
	 */
	public addSourceURL(url:string):void
	{
		//todo
	}

	/**
	 * Renders the view.
	 */
	public render():void
	{
		this._view.render();
	}

	/**
	 * Disposes all memory occupied by the view. This will also dispose the renderer.
	 */
	public dispose():void
	{
		//todo
	}

	/**
	 * Calculates the projected position in screen space of the given scene position.
	 *
	 * @param point3d the position vector of the point to be projected.
	 * @return The absolute screen position of the given scene coordinates.
	 */
	public project(point3d:Vector3D):Vector3D
	{
		//todo
		return null;
	}

	/**
	 * Calculates the scene position of the given screen coordinates.
	 *
	 * eg. unproject(view.mouseX, view.mouseY, 500) returns the scene position of the mouse 500 units into the screen.
	 *
	 * @param sX The absolute x coordinate in 2D relative to View3D, representing the screenX coordinate.
	 * @param sY The absolute y coordinate in 2D relative to View3D, representing the screenY coordinate.
	 * @param sZ The distance into the screen, representing the screenZ coordinate.
	 * @param v the destination Vector3D object
	 * @return The scene position of the given screen coordinates.
	 */
	public unproject(sX:number, sY:number, sZ:number, v:Vector3D = null):Vector3D
	{
		//todo
		return null;
	}

	/**
	 * Calculates the ray in scene space from the camera to the given screen coordinates.
	 *
	 * eg. getRay(view.mouseX, view.mouseY, 500) returns the ray from the camera to a position under the mouse, 500 units into the screen.
	 *
	 * @param sX The absolute x coordinate in 2D relative to View3D, representing the screenX coordinate.
	 * @param sY The absolute y coordinate in 2D relative to View3D, representing the screenY coordinate.
	 * @param sZ The distance into the screen, representing the screenZ coordinate.
	 * @return The ray from the camera to the scene space position of the given screen coordinates.
	 */
	public getRay(sX:number, sY:number, sZ:number):Vector3D
	{
		//todo
		return null;
	}

	public get mousePicker():any
	{
		// todo: any is IPicker
		return null;
	}

	public set mousePicker(value:any)
	{
		// todo: any is IPicker
	}

	public get touchPicker():any
	{
		// todo: any is IPicker
		return null;
	}

	public set touchPicker(value:any)
	{
		// todo: any is IPicker
	}

	// dead ends (overrides):
	public set z(value:number){}
	public set scaleZ(value:number){}
	public set rotation(value:number){}
	public set rotationX(value:number){}
	public set rotationY(value:number){}
	public set rotationZ(value:number){}
	public set transform(value:Transform){}
	public set scaleX(value:number){}
	public set scaleY(value:number){}
}

