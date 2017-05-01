
import { Point, Rectangle, Vector3D, Transform } from "@as3web/flash"

import { Stage3DProxy } from "../core/managers/Stage3DProxy";
import { Stage3DManager } from "../core/managers/Stage3DManager";
import { Stage3DEvent } from "../events/Stage3DEvent";
import { Camera3D } from "../cameras/Camera3D";
import { Scene3D } from "./Scene3D";
/*
import { Scene3D } from "../Scene3D";
import { EntityCollector } from "./EntityCollector";
import { Mouse3DManager } from "./Mouse3DManager";
import { Touch3DManager } from "./Touch3DManager";
import { RendererBase } from "./RendererBase";
import { DepthRenderer } from "./DepthRenderer";
import { Filter3DRenderer } from "./Filter3DRenderer";
import { Texture } from "./Texture";
import { Texture2DBase } from "./Texture2DBase";
import { RTTBufferManager } from "./RTTBufferManager";
import { ContextMenuItem } from "./ContextMenuItem";
import { ContextMenu } from "./ContextMenu";
import { URLRequest } from "./URLRequest";
import { Away3D } from "./Away3D";
import { Scene3DEvent } from "./Scene3DEvent";
import { DefaultRenderer } from "./DefaultRenderer";
import { CameraEvent } from "./CameraEvent";
import { Context3D } from "./Context3D";
import { Context3DTextureFormat } from "./Context3DTextureFormat";
import { IPicker } from "./IPicker";
import { Transform } from "./Transform";
*/

/*import away3d.*;*/
/*import away3d.cameras.*;*/
/*import away3d.core.managers.*;*/
/*import away3d.core.pick.*;*/
/*import away3d.core.render.*;*/
/*import away3d.core.traverse.*;*/
/*import away3d.events.*;*/
/*import away3d.textures.*;*/

import { Sprite } from "@as3web/flash"

/*import flash.display3D.*;*/
/*import flash.display3D.textures.*;*/
//import { ContextMenuEvent } from "@as3web/flash"

import { Event } from "@as3web/flash"

	/*import flash.geom.*;*/
	/*import flash.net.*;*/
	/*import flash.ui.*;*/
	/*import flash.utils.*;*/

	/*use namespace arcane*/;

// it is important that View3D inherits Sprite from the @as3web/flash package !!!
export class View3D extends Sprite
{
	private _width:number = 0;
	private _height:number = 0;
	private _localTLPos:Point = new Point();
	private _localBRPos:Point = new Point();
	private _globalPos:Point = new Point();
	private _globalWidth:number = 0;
	private _globalHeight:number = 0;
	private _globalPosDirty:boolean;
	
	protected _scene:Scene3D;
	protected _camera:Camera3D;
	//protected _entityCollector:EntityCollector;

	protected _aspectRatio:number;
	private _time:number = 0;
	private _deltaTime:number;
	private _backgroundColor:number = 0x000000;
	private _backgroundAlpha:number = 1;

	//protected _mouse3DManager:Mouse3DManager;

	//protected _touch3DManager:Touch3DManager;

	//protected _renderer:RendererBase;
	//private _depthRenderer:DepthRenderer;
	private _addedToStage:boolean;

	private _forceSoftware:boolean;

	//protected _filter3DRenderer:Filter3DRenderer;
	protected _requireDepthRender:boolean;
	//protected _depthRender:Texture;
	private _depthTextureInvalid:boolean = true;

	private _hitField:Sprite;
	protected _parentIsStage:boolean;

	//private _background:Texture2DBase;
	protected _stage3DProxy:Stage3DProxy;
	protected _backBufferInvalid:boolean = true;
	private _antiAlias:number;

	//protected _rttBufferManager:RTTBufferManager;

	private _rightClickMenuEnabled:boolean = true;
	private _sourceURL:string;
	//private _menu0:ContextMenuItem;
	//private _menu1:ContextMenuItem;
	//private _ViewContextMenu:ContextMenu;
	protected _shareContext:boolean = false;
	protected _scissorRect:Rectangle;
	private _scissorRectDirty:boolean = true;
	private _viewportDirty:boolean = true;

	private _depthPrepass:boolean;
	private _profile:string;
	private _layeredView:boolean = false;

	/*80pro disable everything for now
	private viewSource(e:ContextMenuEvent):void
	{
		var request:URLRequest = new URLRequest(this._sourceURL);
		try {
			this.navigateToURL(request, "_blank");
		} catch (error:Error) {

		}
	}*/

	public get depthPrepass():boolean
	{
		return this._depthPrepass;
	}

	public set depthPrepass(value:boolean)
	{
		this._depthPrepass = value;
	}

	/*80pro disable everything for now
	private visitWebsite(e:ContextMenuEvent):void
	{
		var url:string = Away3D.WEBSITE_URL;
		var request:URLRequest = new URLRequest(url);
		try {
			this.navigateToURL(request);
		} catch (error:Error) {

		}
	}
	 */

	private initRightClickMenu():void
	{
		/*80pro disable everything for now
		this._menu0 = new ContextMenuItem("Away3D.com\tv" + Away3D.MAJOR_VERSION + "." + Away3D.MINOR_VERSION + "." + Away3D.REVISION, true, true, true);
		this._menu1 = new ContextMenuItem("View Source", true, true, true);
		this._menu0.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT, this.visitWebsite);
		this._menu1.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT, this.viewSource);
		this._ViewContextMenu = new ContextMenu();

		this.updateRightClickMenu();
		*/
	}

	private updateRightClickMenu():void
	{
		/*80pro disable everything for now
		if (this._rightClickMenuEnabled)
			this._ViewContextMenu.customItems = this._sourceURL? [this._menu0, this._menu1] : [this._menu0];
		else
			this._ViewContextMenu.customItems = [];

		this.contextMenu = this._ViewContextMenu;
		*/
	}

	constructor(scene:Scene3D = null, camera:Camera3D = null, renderer:any = null, forceSoftware:boolean = false, profile:string = "baseline"){
	//constructor(scene:Scene3D = null, camera:Camera3D = null, renderer:RendererBase = null, forceSoftware:boolean = false, profile:string = "baseline"){
		super();
		this._profile = profile;
		this._scene = scene || new Scene3D();
		/*80pro
		this._scene.addEventListener(Scene3DEvent.PARTITION_CHANGED, this.onScenePartitionChanged);
		this._camera = camera || new Camera3D();
		this._renderer = renderer || new DefaultRenderer();
		this._depthRenderer = new DepthRenderer();
		this._forceSoftware = forceSoftware;

		// todo: entity collector should be defined by renderer
		this._entityCollector = this._renderer.createEntityCollector();
		this._entityCollector.camera = this._camera;

		this._scissorRect = new Rectangle();

		this.initHitField();

		this._mouse3DManager = new Mouse3DManager();
		this._mouse3DManager.enableMouseListeners(this);

		this._touch3DManager = new Touch3DManager();
		this._touch3DManager.view = this;
		this._touch3DManager.enableTouchListeners(this);

		//this.addEventListener(Event.ADDED_TO_STAGE, this.onAddedToStage, false, 0, true);
		//this.addEventListener(Event.ADDED, this.onAdded, false, 0, true);

		this._camera.addEventListener(CameraEvent.LENS_CHANGED, this.onLensChanged);

		this._camera.partition = this._scene.partition;

		this.initRightClickMenu();
		 */
	}

	/*80pro disable everything for now
	private onScenePartitionChanged(event:Scene3DEvent):void
	{
		if (this._camera)
			this._camera.partition = this.scene.partition;
	}
	 */

	public get rightClickMenuEnabled():boolean
	{
		return false;//80pro  this._rightClickMenuEnabled;
	}

	public set rightClickMenuEnabled(val:boolean)
	{
		/*80pro disable everything for now
		this._rightClickMenuEnabled = val;

		this.updateRightClickMenu();
		*/
	}

	public get stage3DProxy():Stage3DProxy
	{
		return this._stage3DProxy;
	}

	public set stage3DProxy(stage3DProxy:Stage3DProxy)
	{
		if (this._stage3DProxy) {
			this._stage3DProxy.removeEventListener(Stage3DEvent.VIEWPORT_UPDATED, this.onViewportUpdated);
			this._stage3DProxy.removeEventListener(Stage3DEvent.CONTEXT3D_RECREATED, this.onContext3DRecreated);
		}

		this._stage3DProxy = stage3DProxy;

		this._stage3DProxy.addEventListener(Stage3DEvent.VIEWPORT_UPDATED, this.onViewportUpdated);
		this._stage3DProxy.addEventListener(Stage3DEvent.CONTEXT3D_RECREATED, this.onContext3DRecreated);

		//80pro this._renderer.stage3DProxy = this._depthRenderer.stage3DProxy = this._stage3DProxy;

		this._globalPosDirty = true;
		this._backBufferInvalid = true;
	}

	private onContext3DRecreated(event:Stage3DEvent):void {
		this._depthTextureInvalid = true;
	}

	/**
	 * Forces mouse-move related events even when the mouse hasn't moved. This allows mouseOver and mouseOut events
	 * etc to be triggered due to changes in the scene graph. Defaults to false.
	 */
	public get forceMouseMove():boolean
	{
		return false; //80pro this._mouse3DManager.forceMouseMove;
	}

	public set forceMouseMove(value:boolean)
	{
		/*
		this._mouse3DManager.forceMouseMove = value;
		this._touch3DManager.forceTouchMove = value;
		*/
	}

	/* 80pro
	public get background():Texture2DBase
	{
		return this._background;
	}

	public set background(value:Texture2DBase)
	{
		this._background = value;
		this._renderer.background = this._background;
	}
*/
	/**
	 * Used in a sharedContext. When true, clears the depth buffer prior to rendering this particular
	 * view to avoid depth sorting with lower layers. When false, the depth buffer is not cleared
	 * from the previous (lower) view's render so objects in this view may be occluded by the lower
	 * layer. Defaults to false.
	 */
	public get layeredView():boolean
	{
		return this._layeredView;
	}

	public set layeredView(value:boolean)
	{
		this._layeredView = value;
	}

	private initHitField():void
	{
		this._hitField = new Sprite();
		this._hitField.alpha = 0;
		this._hitField.doubleClickEnabled = true;
		// 80pro this._hitField.graphics.beginFill(0x000000);
		// 80pro this._hitField.graphics.drawRect(0, 0, 100, 100);
		this.addChild(this._hitField);
	}

	/**
	 * Not supported. Use filters3d instead.
	 */
	/*override*/ public get filters():any[]
{
	throw new Error("filters is not supported in View3D. Use filters3d instead.");
	//return super.filters;
}

	/**
	 * Not supported. Use filters3d instead.
	 */
	/*override*/ public set filters(value:any[])
{
	throw new Error("filters is not supported in View3D. Use filters3d instead.");
}

	public get filters3d():any[]
	{
		return [];//80pro this._filter3DRenderer? this._filter3DRenderer.filters : null;
	}

	public set filters3d(value:any[])
	{
		/*80pro
		if (value && value.length == 0)
			value = null;

		if (this._filter3DRenderer && !value) {
			this._filter3DRenderer.dispose();
			this._filter3DRenderer = null;
		} else if (!this._filter3DRenderer && value) {
			this._filter3DRenderer = new Filter3DRenderer(this.stage3DProxy);
			this._filter3DRenderer.filters = value;
		}

		if (this._filter3DRenderer) {
			this._filter3DRenderer.filters = value;
			this._requireDepthRender = this._filter3DRenderer.requireDepthRender;
		} else {
			this._requireDepthRender = false;
			if (this._depthRender) {
				this._depthRender.dispose();
				this._depthRender = null;
			}
		}
		*/
	}

	/**
	 * The renderer used to draw the scene.
	 */
	/* 80pro
	public get renderer():RendererBase
	{
		return null; this._renderer;
	}

	public set renderer(value:RendererBase)
	{
		this._renderer.dispose();
		this._renderer = value;
		this._entityCollector = this._renderer.createEntityCollector();
		this._entityCollector.camera = this._camera;
		this._renderer.stage3DProxy = this._stage3DProxy;
		this._renderer.antiAlias = this._antiAlias;
		this._renderer.backgroundR = ((this._backgroundColor >> 16) & 0xff)/0xff;
		this._renderer.backgroundG = ((this._backgroundColor >> 8) & 0xff)/0xff;
		this._renderer.backgroundB = (this._backgroundColor & 0xff)/0xff;
		this._renderer.backgroundAlpha = this._backgroundAlpha;
		this._renderer.viewWidth = this._globalWidth;
		this._renderer.viewHeight = this._globalHeight;

		this._backBufferInvalid = true;
	}
	*/

	/**
	 * The background color of the screen. This value is only used when clearAll is set to true.
	 */
	public get backgroundColor():number
	{
		return this._backgroundColor;
	}

	public set backgroundColor(value:number)
	{
		this._backgroundColor = value;
		/* 80pro
		this._renderer.backgroundR = ((value >> 16) & 0xff)/0xff;
		this._renderer.backgroundG = ((value >> 8) & 0xff)/0xff;
		this._renderer.backgroundB = (value & 0xff)/0xff;
		*/
	}

	public get backgroundAlpha():number
	{
		return this._backgroundAlpha;
	}

	public set backgroundAlpha(value:number)
	{
		if (value > 1)
			value = 1;
		else if (value < 0)
			value = 0;

		//80pro this._renderer.backgroundAlpha = value;
		this._backgroundAlpha = value;
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
		//80pro this._camera.removeEventListener(CameraEvent.LENS_CHANGED, this.onLensChanged);

		this._camera = camera;
		/* 80pro
		this._entityCollector.camera = this._camera;

		if (this._scene)
			this._camera.partition = this._scene.partition;

		this._camera.addEventListener(CameraEvent.LENS_CHANGED, this.onLensChanged);

		this._scissorRectDirty = true;
		this._viewportDirty = true;
		*/
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

		// 80pro this._scene.removeEventListener(Scene3DEvent.PARTITION_CHANGED, this.onScenePartitionChanged);
		this._scene = scene;
		// 80pro this._scene.addEventListener(Scene3DEvent.PARTITION_CHANGED, this.onScenePartitionChanged);

		// 80pro if (this._camera)
		// 80pro 	this._camera.partition = this._scene.partition;
	}


	// todo: probably temporary:
	/**
	 * The amount of milliseconds the last render call took
	 */
	public get deltaTime():number
	{
		return this._deltaTime;
	}

	/**
	 * The width of the viewport. When software rendering is used, this is limited by the
	 * platform to 2048 pixels.
	 */
	/*override*/ public get width():number
{
	return this._width;
}

	/*override*/ public set width(value:number)
{

	/*80pro disable everything for now
	// Backbuffer limitation in software mode. See comment in updateBackBuffer()
	if (this._stage3DProxy && this._stage3DProxy.usesSoftwareRendering && value > 2048)
		value = 2048;

	if (this._width == value)
		return;

	this._hitField.width = value;
	this._width = value;

	this._localBRPos.x = value + this._localTLPos.x;
	this._globalWidth = this.parent? this.parent.localToGlobal(this._localBRPos).x - this._globalPos.x : value;

	if (this._rttBufferManager)
		this._rttBufferManager.viewWidth = this._globalWidth;

	this._aspectRatio = this._globalWidth/this._globalHeight;
	this._camera.lens.aspectRatio = this._aspectRatio;
	this._depthTextureInvalid = true;

	this._renderer.viewWidth = this._globalWidth;

	this._scissorRect.width = this._globalWidth;

	this._backBufferInvalid = true;
	this._scissorRectDirty = true;
	*/
}

	/**
	 * The height of the viewport. When software rendering is used, this is limited by the
	 * platform to 2048 pixels.
	 */
	/*override*/ public get height():number
{
	return this._height;
}

	/*override*/ public set height(value:number)
{
	/*80pro disable everything for now
	// Backbuffer limitation in software mode. See comment in updateBackBuffer()
	if (this._stage3DProxy && this._stage3DProxy.usesSoftwareRendering && value > 2048)
		value = 2048;

	if (this._height == value)
		return;

	this._hitField.height = value;
	this._height = value;

	this._localBRPos.y = value + this._localTLPos.y;
	this._globalHeight = this.parent? this.parent.localToGlobal(this._localBRPos).y - this._globalPos.y : value;

	if (this._rttBufferManager)
		this._rttBufferManager.viewHeight = this._globalHeight;

	this._aspectRatio = this._globalWidth/this._globalHeight;
	this._camera.lens.aspectRatio = this._aspectRatio;
	this._depthTextureInvalid = true;

	this._renderer.viewHeight = this._globalHeight;

	this._scissorRect.height = this._globalHeight;

	this._backBufferInvalid = true;
	this._scissorRectDirty = true;
	*/
}

	/*override*/ public set x(value:number)
{
	/*80pro disable everything for now
	if (this.x == value)
		return;

	this._localTLPos.x = super.x = value;

	this._globalPos.x = this.parent? this.parent.localToGlobal(this._localTLPos).x : value;
	this._globalPosDirty = true;
	*/
}

	/*override*/ public set y(value:number)
{
	/*80pro disable everything for now
	if (this.y == value)
		return;

	this._localTLPos.y = super.y = value;

	this._globalPos.y = this.parent? this.parent.localToGlobal(this._localTLPos).y : value;
	this._globalPosDirty = true;
	*/
}

	/*80pro disable everything for now
	public set visible(value:boolean)
{
	super.visible = value;

	if (this._stage3DProxy && !this._shareContext)
		this._stage3DProxy.visible = value;
}

*/
	/**
	 * The amount of anti-aliasing to be used.
	 */
	public get antiAlias():number
	{
		return this._antiAlias;
	}

	public set antiAlias(value:number)
	{
		this._antiAlias = value;
		/*80pro disable everything for now
		this._renderer.antiAlias = value;

		this._backBufferInvalid = true;
		*/
	}

	/**
	 * The amount of faces that were pushed through the render pipeline on the last frame render.
	 */
	public get renderedFacesCount():number
	{
		return //80pro this._entityCollector.numTriangles;
	}

	/**
	 * Defers control of Context3D clear() and present() calls to Stage3DProxy, enabling multiple Stage3D frameworks
	 * to share the same Context3D object.
	 */
	public get shareContext():boolean
	{
		return this._shareContext;
	}

	public set shareContext(value:boolean)
	{
		if (this._shareContext == value)
			return;

		this._shareContext = value;
		this._globalPosDirty = true;
	}

	/**
	 * Updates the backbuffer dimensions.
	 */
	protected updateBackBuffer():void
	{
		/*80pro disable everything for now
		// No reason trying to configure back buffer if there is no context available.
		// Doing this anyway (and relying on _stage3DProxy to cache width/height for 
		// context does get available) means usesSoftwareRendering won't be reliable.
		if (this._stage3DProxy.context3D && !this._shareContext) {
			if (this._globalWidth && this._globalHeight) {
				// Backbuffers are limited to 2048x2048 in software mode and
				// trying to configure the backbuffer to be bigger than that
				// will throw an error. Capping the value is a graceful way of
				// avoiding runtime exceptions for developers who are unable
				// to test their Away3D implementation on screens that are 
				// large enough for this error to ever occur.
				if (this._stage3DProxy.usesSoftwareRendering) {
					// Even though these checks where already made in the width
					// and height setters, at that point we couldn't be sure that
					// the context had even been retrieved and the software flag
					// thus be reliable. Make checks again.
					if (this._globalWidth > 2048)
						this._globalWidth = 2048;
					if (this._globalHeight > 2048)
						this._globalHeight = 2048;
				}

				this._stage3DProxy.configureBackBuffer(this._globalWidth, this._globalHeight, this._antiAlias);
				this._backBufferInvalid = false;
			} else {
				var stageBR:Point = new Point(this.stage.x + this.stage.stageWidth, this.stage.y + this.stage.stageHeight);
				this.width = this.parent? this.parent.globalToLocal(stageBR).x - this._localTLPos.x : this.stage.stageWidth;
				this.height = this.parent? this.parent.globalToLocal(stageBR).y - this._localTLPos.y : this.stage.stageHeight;
			}
		}
		*/
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
		/*80pro disable everything for now
		this._sourceURL = url;

		this.updateRightClickMenu();
		*/
	}

	/**
	 * Renders the view.
	 */
	public render():void
	{
		/*80pro disable everything for now
		//if context3D has Disposed by the OS,don't render at this frame
		if (!this.stage3DProxy.recoverFromDisposal()) {
			this._backBufferInvalid = true;
			return;
		}

		// reset or update render settings
		if (this._backBufferInvalid)
			this.updateBackBuffer();

		if (this._shareContext && this._layeredView)
			this.stage3DProxy.clearDepthBuffer();

		if (!this._parentIsStage) {
			var globalPos:Point = this.parent.localToGlobal(this._localTLPos);
			if (this._globalPos.x != globalPos.x || this._globalPos.y != globalPos.y) {
				this._globalPos = globalPos;
				this._globalPosDirty = true;
			}
		}

		if (this._globalPosDirty)
			this.updateGlobalPos();

		this.updateTime();

		this.updateViewSizeData();

		this._entityCollector.clear();

		// collect stuff to render
		this._scene.traversePartitions(this._entityCollector);

		// update picking
		this._mouse3DManager.updateCollider(this);
		this._touch3DManager.updateCollider();

		if (this._requireDepthRender)
			this.renderSceneDepthToTexture(this._entityCollector);

		// todo: perform depth prepass after light update and before final render
		if (this._depthPrepass)
			this.renderDepthPrepass(this._entityCollector);

		this._renderer.clearOnRender = !this._depthPrepass;

		if (this._filter3DRenderer && this._stage3DProxy._context3D) {
			this._renderer.render(this._entityCollector, this._filter3DRenderer.getMainInputTexture(this._stage3DProxy), this._rttBufferManager.renderToTextureRect);
			this._filter3DRenderer.render(this._stage3DProxy, this.camera, this._depthRender);
		} else {
			this._renderer.shareContext = this._shareContext;
			if (this._shareContext)
				this._renderer.render(this._entityCollector, null, this._scissorRect);
			else
				this._renderer.render(this._entityCollector);

		}

		if (!this._shareContext) {
			this.stage3DProxy.present();

			// fire collected mouse events
			this._mouse3DManager.fireMouseEvents();
			this._touch3DManager.fireTouchEvents();
		}

		// clean up data for this render
		this._entityCollector.cleanUp();

		// register that a view has been rendered
		this.stage3DProxy.bufferClear = false;
		*/
	}

	protected updateGlobalPos():void
	{
		this._globalPosDirty = false;

		if (!this._stage3DProxy)
			return;

		if (this._shareContext) {
			this._scissorRect.x = this._globalPos.x - this._stage3DProxy.x;
			this._scissorRect.y = this._globalPos.y - this._stage3DProxy.y;
		} else {
			this._scissorRect.x = 0;
			this._scissorRect.y = 0;
			this._stage3DProxy.x = this._globalPos.x;
			this._stage3DProxy.y = this._globalPos.y;
		}

		this._scissorRectDirty = true;
	}

	protected updateTime():void
	{
		/*80pro disable everything for now
		var time:number = this.Date.now();
		if (this._time == 0)
			this._time = time;
		this._deltaTime = time - this._time;
		this._time = time;
		*/
	}

	protected updateViewSizeData():void
	{
		/*80pro disable everything for now
		this._camera.lens.aspectRatio = this._aspectRatio;

		if (this._scissorRectDirty) {
			this._scissorRectDirty = false;
			this._camera.lens.updateScissorRect(this._scissorRect.x, this._scissorRect.y, this._scissorRect.width, this._scissorRect.height);
		}

		if (this._viewportDirty) {
			this._viewportDirty = false;
			this._camera.lens.updateViewport(this._stage3DProxy.viewPort.x, this._stage3DProxy.viewPort.y, this._stage3DProxy.viewPort.width, this._stage3DProxy.viewPort.height);
		}

		if (this._filter3DRenderer || this._renderer.renderToTexture) {
			this._renderer.textureRatioX = this._rttBufferManager.textureRatioX;
			this._renderer.textureRatioY = this._rttBufferManager.textureRatioY;
		} else {
			this._renderer.textureRatioX = 1;
			this._renderer.textureRatioY = 1;
		}
		*/
	}

	/*80pro disable everything for now
	protected renderDepthPrepass(entityCollector:EntityCollector):void
	{
		this._depthRenderer.disableColor = true;
		if (this._filter3DRenderer || this._renderer.renderToTexture) {
			this._depthRenderer.textureRatioX = this._rttBufferManager.textureRatioX;
			this._depthRenderer.textureRatioY = this._rttBufferManager.textureRatioY;
			this._depthRenderer.render(entityCollector, this._filter3DRenderer.getMainInputTexture(this._stage3DProxy), this._rttBufferManager.renderToTextureRect);
		} else {
			this._depthRenderer.textureRatioX = 1;
			this._depthRenderer.textureRatioY = 1;
			this._depthRenderer.render(entityCollector);
		}
		this._depthRenderer.disableColor = false;
	}
	 */

	/*80pro disable everything for now
	protected renderSceneDepthToTexture(entityCollector:EntityCollector):void
	{
		if (this._depthTextureInvalid || !this._depthRender)
			this.initDepthTexture(this._stage3DProxy._context3D);
		this._depthRenderer.textureRatioX = this._rttBufferManager.textureRatioX;
		this._depthRenderer.textureRatioY = this._rttBufferManager.textureRatioY;
		this._depthRenderer.render(entityCollector, this._depthRender);
	}
	 */

	/*80pro disable everything for now
	private initDepthTexture(context:Context3D):void
	{
		this._depthTextureInvalid = false;

		if (this._depthRender)
			this._depthRender.dispose();

		this._depthRender = context.createTexture(this._rttBufferManager.textureWidth, this._rttBufferManager.textureHeight, Context3DTextureFormat.BGRA, true);
	}
	 */

	/**
	 * Disposes all memory occupied by the view. This will also dispose the renderer.
	 */
	public dispose():void
	{
		/*80pro disable everything for now
		this._stage3DProxy.removeEventListener(Stage3DEvent.VIEWPORT_UPDATED, this.onViewportUpdated);
		this._stage3DProxy.removeEventListener(Stage3DEvent.CONTEXT3D_RECREATED, this.onContext3DRecreated);
		if (!this.shareContext)
			this._stage3DProxy.dispose();
		this._renderer.dispose();

		if (this._depthRender)
			this._depthRender.dispose();

		if (this._rttBufferManager)
			this._rttBufferManager.dispose();

		this._mouse3DManager.disableMouseListeners(this);
		this._mouse3DManager.dispose();

		this._touch3DManager.disableTouchListeners(this);
		this._touch3DManager.dispose();

		this._rttBufferManager = null;
		this._depthRender = null;
		this._mouse3DManager = null;
		this._touch3DManager = null;
		this._depthRenderer = null;
		this._stage3DProxy = null;
		this._renderer = null;
		this._entityCollector = null;
		*/
	}

	/**
	 * Calculates the projected position in screen space of the given scene position.
	 *
	 * @param point3d the position vector of the point to be projected.
	 * @return The absolute screen position of the given scene coordinates.
	 */
	public project(point3d:Vector3D):Vector3D
	{
		/*80pro disable everything for now
		var v:Vector3D = this._camera.project(point3d);

		v.x = (v.x + 1.0)*this._globalWidth/2.0;
		v.y = (v.y + 1.0)*this._globalHeight/2.0;
		 return v;
		*/
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
		/*80pro disable everything for now
		return this._camera.unproject(((sX - this._globalPos.x)*2 - this._globalWidth)/this._stage3DProxy.width, ((sY - this._globalPos.y)*2 - this._globalHeight)/this._stage3DProxy.height, sZ, v);
		 */
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
		/*80pro disable everything for now
		return this._camera.getRay(((sX - this._globalPos.x)*2 - this._globalWidth)/this._globalWidth, ((sY - this._globalPos.y)*2 - this._globalHeight)/this._globalHeight, sZ);
		 */
		return null;
	}

	/*80pro
	public get mousePicker():IPicker
	{
		return this._mouse3DManager.mousePicker;
	}

	public set mousePicker(value:IPicker)
	{
		this._mouse3DManager.mousePicker = value;
	}

	public get touchPicker():IPicker
	{
		return this._touch3DManager.touchPicker;
	}

	public set touchPicker(value:IPicker)
	{
		this._touch3DManager.touchPicker = value;
	}
*/
	/**
	 * The EntityCollector object that will collect all potentially visible entities in the partition tree.
	 *
	 * @see away3d.core.traverse.EntityCollector
	 * @private
	 */
	/*arcane*/
	/*80pro
	 public get entityCollector():EntityCollector
{
	return this._entityCollector;
}
*/

	/*80pro
	private onLensChanged(event:CameraEvent):void
	{
		this._scissorRectDirty = true;
		this._viewportDirty = true;
	}*/

	/**
	 * When added to the stage, retrieve a Stage3D instance
	 */
	private onAddedToStage(event:Event):void
	{
		/*80pro disable everything for now
		if (this._addedToStage)
			return;

		this._addedToStage = true;

		if (!this._stage3DProxy) {
			this._stage3DProxy = Stage3DManager.getInstance(this.stage).getFreeStage3DProxy(this._forceSoftware, this._profile);
			this._stage3DProxy.addEventListener(Stage3DEvent.VIEWPORT_UPDATED, this.onViewportUpdated);
			this._stage3DProxy.addEventListener(Stage3DEvent.CONTEXT3D_RECREATED, this.onContext3DRecreated);
		}

		this._globalPosDirty = true;

		this._rttBufferManager = RTTBufferManager.getInstance(this._stage3DProxy);

		this._renderer.stage3DProxy = this._depthRenderer.stage3DProxy = this._stage3DProxy;

		//default wiidth/height to stageWidth/stageHeight
		var stageBR:Point = new Point(this.stage.x + this.stage.stageWidth, this.stage.y + this.stage.stageHeight);
		if (this._globalWidth == 0)
			this.width = this.parent? this.parent.globalToLocal(stageBR).x - this._localTLPos.x : this.stage.stageWidth;
		else
			this._rttBufferManager.viewWidth = this._globalWidth;
		if (this._globalWidth == 0)
			this.height = this.parent? this.parent.globalToLocal(stageBR).y - this._localTLPos.y : this.stage.stageHeight;
		else
			this._rttBufferManager.viewHeight = this._globalHeight;

		if (this._shareContext)
			this._mouse3DManager.addViewLayer(this);
			*/
	}

	private onAdded(event:Event):void
	{
		this._parentIsStage = (this.parent == this.stage);

		this._globalPos = this.parent.localToGlobal(this._localTLPos);
		this._globalPosDirty = true;
	}

	private onViewportUpdated(event:Stage3DEvent):void
	{
		/*80pro disable everything for now
		if (this._shareContext) {
			this._scissorRect.x = this._globalPos.x - this._stage3DProxy.x;
			this._scissorRect.y = this._globalPos.y - this._stage3DProxy.y;
			this._scissorRect.width = this._globalWidth;
			this._scissorRect.height = this._globalHeight;
			this._scissorRectDirty = true;
		}

		this._viewportDirty = true;
		*/
	}

	// dead ends:
	/*override*/ public set z(value:number)
{
}

	/*override*/ public set scaleZ(value:number)
{
}

	/*override*/ public set rotation(value:number)
{
}

	/*override*/ public set rotationX(value:number)
{
}

	/*override*/ public set rotationY(value:number)
{
}

	/*override*/ public set rotationZ(value:number)
{
}

	/*override*/ public set transform(value:Transform)
{
}

	/*override*/ public set scaleX(value:number)
{
}

	/*override*/ public set scaleY(value:number)
{
}
}

