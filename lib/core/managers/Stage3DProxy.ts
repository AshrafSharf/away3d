import { Stage3DManager } from "./Stage3DManager";
//import { Mouse3DManager } from "./Mouse3DManager";
//import { Touch3DManager } from "./Touch3DManager";
//import {arcane} from "./../arcane";
//import {Debug} from "./../debug/Debug";
import { Stage3DEvent } from "../../events/Stage3DEvent";

import { EventBase } from "@awayjs/core"
import { Shape } from "@as3web/flash"
import { Stage as Stage3D} from "@awayjs/stage"
import { Context3D } from "@as3web/flash"
import { Context3DClearMask } from "@as3web/flash"
//import { Context3DRenderMode } from "@as3web/flash"
//import { Program3D } from "@as3web/flash"
//import { TextureBase } from "@as3web/flash"
import { Event } from "@as3web/flash"
import { EventDispatcher } from "@as3web/flash"
import { Rectangle } from "@as3web/flash"

	/*use namespace arcane*/;

/*[Event(name="enterFrame", type="flash.events.Event")]*/
/*[Event(name="exitFrame", type="flash.events.Event")]*/

/**
 * Stage3DProxy provides a proxy class to manage a single Stage3D instance as well as handling the creation and
 * attachment of the Context3D (and in turn the back buffer) is uses. Stage3DProxy should never be created directly,
 * but requested through Stage3DManager.
 *
 * @see away3d.core.managers.Stage3DProxy
 *
 * todo: consider moving all creation methods (createVertexBuffer etc) in here, so that disposal can occur here
 * along with the context, instead of scattered throughout the framework
 */
export class Stage3DProxy extends EventDispatcher
{

	/*arcane*/ _context3D:Context3D;
	/*arcane*/ _stage3DIndex:number = -1;

	private _profile:string;
	private _forceSoftware:boolean;
	private _stage3D:Stage3D;
	private _stage3DManager:Stage3DManager;


	/**
	 * Creates a Stage3DProxy object. This method should not be called directly. Creation of Stage3DProxy objects should
	 * be handled by Stage3DManager.
	 * @param stage3DIndex The index of the Stage3D to be proxied.
	 * @param stage3D The Stage3D to be proxied.
	 * @param stage3DManager
	 * @param forceSoftware Whether to force software mode even if hardware acceleration is available.
	 */
	constructor(stage3DIndex:number, stage3D:Stage3D, stage3DManager:Stage3DManager, forceSoftware:boolean = false, profile:string = "baseline"){
		super();
		this._stage3DIndex = stage3DIndex;
		this._stage3D = stage3D;
		this._stage3D.x = 0;
		this._stage3D.y = 0;
		this._stage3D.visible = false;
		this._stage3DManager = stage3DManager;
		this._forceSoftware = forceSoftware;
		this._profile=profile;
	}

	public get profile():string
	{
		return this._profile;
	}

	/**
	 * Disposes the Stage3DProxy object, freeing the Context3D attached to the Stage3D.
	 */
	public dispose():void
	{
		//todo
	}

	/**
	 * Configures the back buffer associated with the Stage3D object.
	 * @param backBufferWidth The width of the backbuffer.
	 * @param backBufferHeight The height of the backbuffer.
	 * @param antiAlias The amount of anti-aliasing to use.
	 * @param enableDepthAndStencil Indicates whether the back buffer contains a depth and stencil buffer.
	 */
	public configureBackBuffer(backBufferWidth:number, backBufferHeight:number, antiAlias:number):void
	{
		//todo
	}

	/*
	 * Indicates whether the depth and stencil buffer is used
	 */
	public get enableDepthAndStencil():boolean
	{
		//todo
		return false;
	}

	public set enableDepthAndStencil(enableDepthAndStencil:boolean)
	{
		//todo
	}

	public get renderTarget():any
	{
		//todo:any is TextureBase
		console.log("Stage3DProxy: renderTarget not implemented yet")
		return null;//this._renderTarget;
	}

	public get renderSurfaceSelector():number
	{
		//todo
		return 0;
	}

	public setRenderTarget(target:any, enableDepthAndStencil:boolean = false, surfaceSelector:number = 0):void
	{
		//todo:any is TextureBase
		console.log("Stage3DProxy: setRenderTarget not implemented yet")
	}

	/*
	 * Clear and reset the back buffer when using a shared context
	 */
	public clear():void
	{
		this._stage3D.clear();
	}

	/*
	 * Display the back rendering buffer
	 */
	public present():void
	{
		this._stage3D.context.present();
	}


	public get scissorRect():Rectangle
	{
		return this._stage3D.scissorRect;
	}

	public set scissorRect(value:Rectangle)
	{
		this._stage3D.scissorRect = value;
	}

	/**
	 * The index of the Stage3D which is managed by this instance of Stage3DProxy.
	 */
	public get stage3DIndex():number
	{
		return this._stage3DIndex;
	}

	/**
	 * The base Stage3D object associated with this proxy.
	 */
	public get stage3D():Stage3D
	{
		return this._stage3D;
	}

	/**
	 * The Context3D object associated with the given Stage3D object.
	 */
	public get context3D():Context3D
	{
		//todo
		return null;
	}

	/**
	 * The driver information as reported by the Context3D object (if any)
	 */
	public get driverInfo():string
	{
		//todo
		return "";//this._context3D? this._context3D.driverInfo : null;
	}

	/**
	 * Indicates whether the Stage3D managed by this proxy is running in software mode.
	 * Remember to wait for the CONTEXT3D_CREATED event before checking this property,
	 * as only then will it be guaranteed to be accurate.
	 */
	public get usesSoftwareRendering():boolean
	{
		//todo
		return false;
	}

	/**
	 * The x position of the Stage3D.
	 */
	public get x():number
	{
		return this._stage3D.x;
	}

	public set x(value:number)
	{
		this._stage3D.x = value;

	}

	/**
	 * The y position of the Stage3D.
	 */
	public get y():number
	{
		return this._stage3D.y;
	}

	public set y(value:number)
	{
		this._stage3D.y = value;
	}

	/**
	 * The width of the Stage3D.
	 */
	public get width():number
	{
		return this._stage3D.width;
	}

	public set width(width:number)
	{
		this._stage3D.width=width;
	}

	/**
	 * The height of the Stage3D.
	 */
	public get height():number
	{
		return this._stage3D.height;
	}

	public set height(height:number)
	{
		this._stage3D.height=height;
	}

	/**
	 * The antiAliasing of the Stage3D.
	 */
	public get antiAlias():number
	{
		//todo
		return 0;
	}

	public set antiAlias(antiAlias:number)
	{
		//todo
	}

	/**
	 * A viewPort rectangle equivalent of the Stage3D size and position.
	 */
	public get viewPort():Rectangle
	{
		//todo
		return null;
	}

	/**
	 * The background color of the Stage3D.
	 */
	public get color():number
	{
		//todo
		return 0;
	}

	public set color(color:number)
	{
		//todo
	}

	/**
	 * The visibility of the Stage3D.
	 */
	public get visible():boolean
	{
		return this._stage3D.visible;
	}

	public set visible(value:boolean)
	{
		this._stage3D.visible = value;
	}

	/**
	 * The freshly cleared state of the backbuffer before any rendering
	 */
	public get bufferClear():boolean
	{
		//todo
		return false;
	}

	public set bufferClear(newBufferClear:boolean)
	{
		//todo
	}

	/*
	 * Access to fire mouseevents across multiple layered view3D instances
	 */
	/*
	public get mouse3DManager():Mouse3DManager
	{
		return this._mouse3DManager;
	}

	public set mouse3DManager(value:Mouse3DManager)
	{
		this._mouse3DManager = value;
	}

	public get touch3DManager():Touch3DManager
	{
		return this._touch3DManager;
	}

	public set touch3DManager(value:Touch3DManager)
	{
		this._touch3DManager = value;
	}
*/
	/**
	 * Frees the Context3D associated with this Stage3DProxy.
	 */
	private freeContext3D():void
	{
		//todo
	}

	/*
	 * Called whenever the Context3D is retrieved or lost.
	 * @param event The event dispatched.
	 */
	private onContext3DUpdate(event:Event):void
	{
		//todo
	}

	/**
	 * Requests a Context3D object to attach to the managed Stage3D.
	 */
	private requestContext(forceSoftware:boolean = false, profile:string = "baseline"):void
	{
		//todo
	}


	public recoverFromDisposal():boolean
	{
		//todo
		return true;
	}

	public clearDepthBuffer():void
	{
		//todo
	}

	public get backBufferEnableDepthAndStencil():boolean {
		//todo
		return false;
	}

	public set backBufferEnableDepthAndStencil(value:boolean) {
		//todo
	}
}

