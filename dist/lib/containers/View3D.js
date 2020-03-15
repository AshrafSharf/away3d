import * as tslib_1 from "tslib";
import { Scene } from "@awayjs/scene";
import { Sprite, Point, DisplayObjectContainer } from "@as3web/flash";
import { View, BasicPartition } from "@awayjs/view";
import { DefaultRenderer } from "@awayjs/renderer";
import { Camera3D } from "../cameras/Camera3D";
import { Scene3D } from "./Scene3D";
// it is important that View3D inherits Sprite from the @as3web/flash package !!!
var View3D = (function (_super) {
    tslib_1.__extends(View3D, _super);
    function View3D(scene, camera, renderer, forceSoftware, profile) {
        if (scene === void 0) { scene = null; }
        if (camera === void 0) { camera = null; }
        if (renderer === void 0) { renderer = null; }
        if (forceSoftware === void 0) { forceSoftware = false; }
        if (profile === void 0) { profile = "baseline"; }
        var _this = _super.call(this) || this;
        //this._profile = profile;
        _this._localTLPos = new Point();
        _this._globalPos = new Point();
        _this._localBRPos = new Point();
        _this._camera = camera || new Camera3D();
        _this._renderer = renderer;
        _this._forceSoftware = forceSoftware;
        _this._profile = profile;
        //this.adaptee.visible=false;
        //this.adaptee.mouseEnabled=false;
        _this._initHitField();
        return _this;
        /*
        this._view = new View(this._renderer);
        //this._camera = new Camera3D();
        this._view.camera = <Camera> this._camera.adaptee;
        this._scene.adaptee=this._view.scene;
        this._view.scene.adapter=this._scene;
        */
    }
    Object.defineProperty(View3D.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "depthPrepass", {
        get: function () {
            throw ("depthPrepass not implemented yet in View3D");
        },
        set: function (value) {
            throw ("depthPrepass not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "rightClickMenuEnabled", {
        get: function () {
            throw ("rightClickMenuEnabled not implemented yet in View3D");
        },
        set: function (val) {
            throw ("rightClickMenuEnabled not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "stage3DProxy", {
        get: function () {
            return this._stage3DProxy;
        },
        set: function (stage3DProxy) {
            this._stage3DProxy = stage3DProxy;
            //create the view
            //this._renderer = new DefaultRenderer(new BasicPartition(new DisplayObjectContainer().adaptee));
            this._renderer = new DefaultRenderer(new BasicPartition(new DisplayObjectContainer().adaptee), new View(null, stage3DProxy.stage3D));
            this._renderer.renderableSorter = null;
            this._view = this._renderer.view;
            this._scene = new Scene(this._renderer);
            this._scene3d = new Scene3D(this._renderer, this._scene.root);
            this._camera = new Camera3D();
            this._scene.camera = this._camera.adaptee;
            //this._view.backgroundColor=0x00ff00;
            //this._view.scene = <Scene> this._scene.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "forceMouseMove", {
        /**
         * Forces mouse-move related events even when the mouse hasn't moved. This allows mouseOver and mouseOut events
         * etc to be triggered due to changes in the scene graph. Defaults to false.
         */
        get: function () {
            //todo
            throw ("forceMouseMove not implemented yet in View3D");
        },
        set: function (value) {
            //todo
            throw ("forceMouseMove not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "background", {
        get: function () {
            // todo any is Texture2DBase
            throw ("background-texture not implemented yet in View3D");
        },
        set: function (value) {
            // todo any is Texture2DBase
            throw ("background-texture not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "layeredView", {
        /**
         * Used in a sharedContext. When true, clears the depth buffer prior to rendering this particular
         * view to avoid depth sorting with lower layers. When false, the depth buffer is not cleared
         * from the previous (lower) view's render so objects in this view may be occluded by the lower
         * layer. Defaults to false.
         */
        get: function () {
            return this._scene.layeredView;
        },
        set: function (value) {
            this._scene.layeredView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "disableMouseEvents", {
        get: function () {
            return false; //this._scene.adaptee.disableMouseEvents;
        },
        set: function (value) {
            //this._scene.adaptee.disableMouseEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "filters", {
        /**
     * Not supported. Use filters3d instead.
     */
        get: function () {
            throw ("filters is not supported in View3D. Use filters3d instead.");
        },
        /**
         * Not supported. Use filters3d instead.
         */
        set: function (value) {
            throw ("filters is not supported in View3D. Use filters3d instead.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "filters3d", {
        get: function () {
            //todo: any
            throw ("filters3d not implemented yet in View3D");
        },
        set: function (value) {
            //todo: any
            throw ("filters3d not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "renderer", {
        /**
         * The renderer used to draw the scene.
         */
        get: function () {
            //todo: any is Rendererbase
            //return this._renderer;
            throw ("renderer not implemented yet in View3D");
        },
        set: function (value) {
            //todo: any is Rendererbase
            //this._renderer=value;
            throw ("renderer not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "backgroundColor", {
        /**
         * The background color of the screen. This value is only used when clearAll is set to true.
         */
        get: function () {
            return this._view.backgroundColor;
        },
        set: function (value) {
            console.log("this._view.backgroundColor", value);
            this._view.backgroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "backgroundAlpha", {
        get: function () {
            return this._view.backgroundAlpha;
        },
        set: function (value) {
            console.log("this._view.backgroundAlpha", value);
            this._view.backgroundAlpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "camera", {
        /**
         * The camera that's used to render the scene for this viewport
         */
        get: function () {
            return this._camera;
        },
        /**
         * Set camera that's used to render the scene for this viewport
         */
        set: function (camera) {
            this._camera = camera;
            this._scene.camera = camera.adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "scene", {
        /**
         * The scene that's used to render for this viewport
         */
        get: function () {
            return this._scene3d;
        },
        /**
         * Set the scene that's used to render for this viewport
         */
        set: function (scene) {
            this._scene3d = scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "deltaTime", {
        // todo: probably temporary:
        /**
         * The amount of milliseconds the last render call took
         */
        get: function () {
            //todo
            throw ("deltaTime not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "width", {
        /**
         * The width of the viewport. When software rendering is used, this is limited by the
         * platform to 2048 pixels.
         */
        get: function () {
            return this._hitField.width;
        },
        set: function (value) {
            this._hitField.width = value;
            this._localBRPos.x = value + this._localTLPos.x;
            this._view.width = this.adaptee.parent.transform.localToGlobal(this._localBRPos).x - this._globalPos.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "height", {
        /**
         * The height of the viewport. When software rendering is used, this is limited by the
         * platform to 2048 pixels.
         */
        get: function () {
            return this._hitField.height;
        },
        set: function (value) {
            this._hitField.height = value;
            this._localBRPos.y = value + this._localTLPos.y;
            this._view.height = this.adaptee.parent.transform.localToGlobal(this._localBRPos).y - this._globalPos.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "x", {
        get: function () {
            return this.adaptee.x;
        },
        set: function (value) {
            this.adaptee.x = value;
            this._localTLPos.x = value;
            this._globalPos = this.adaptee.parent.transform.localToGlobal(this._localTLPos);
            this._view.x = this._globalPos.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "y", {
        get: function () {
            return this.adaptee.y;
        },
        set: function (value) {
            this.adaptee.y = value;
            this._localTLPos.y = value;
            this._globalPos = this.adaptee.parent.transform.localToGlobal(this._localTLPos);
            this._view.y = this._globalPos.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "antiAlias", {
        /**
         * The amount of anti-aliasing to be used.
         */
        get: function () {
            //todo
            //console.log("antiAlias not implemented yet in View3D");
            return 0;
        },
        set: function (value) {
            //todo
            //console.log("antiAlias not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "renderedFacesCount", {
        /**
         * The amount of faces that were pushed through the render pipeline on the last frame render.
         */
        get: function () {
            //todo
            throw ("renderedFacesCount not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Defines a source url string that can be accessed though a View Source option in the right-click menu.
     *
     * Requires the stats panel to be enabled.
     *
     * @param    url        The url to the source files.
     */
    View3D.prototype.addSourceURL = function (url) {
        //todo
        throw ("addSourceURL not implemented yet in View3D");
    };
    /**
     * Renders the view.
     */
    View3D.prototype.render = function () {
        this._scene.render();
    };
    /**
     * Disposes all memory occupied by the view. This will also dispose the renderer.
     */
    View3D.prototype.dispose = function () {
        //todo
        throw ("dispose not implemented yet in View3D");
    };
    /**
     * Calculates the projected position in screen space of the given scene position.
     *
     * @param point3d the position vector of the point to be projected.
     * @return The absolute screen position of the given scene coordinates.
     */
    View3D.prototype.project = function (point3d) {
        return this._view.project(point3d);
    };
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
    View3D.prototype.unproject = function (sX, sY, sZ, v) {
        if (v === void 0) { v = null; }
        return this._view.unproject(sX, sY, sZ, v);
    };
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
    View3D.prototype.getRay = function (sX, sY, sZ) {
        //todo
        throw ("getRay not implemented yet in View3D");
    };
    Object.defineProperty(View3D.prototype, "mousePicker", {
        get: function () {
            // todo: any is IPicker
            throw ("mousePicker not implemented yet in View3D");
        },
        set: function (value) {
            throw ("mousePicker not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "touchPicker", {
        get: function () {
            // todo: any is IPicker
            throw ("touchPicker not implemented yet in View3D");
        },
        set: function (value) {
            // todo: any is IPicker
            throw ("touchPicker not implemented yet in View3D");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "z", {
        // dead ends (overrides):
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "scaleZ", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "rotation", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "rotationX", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "rotationY", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "rotationZ", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "transform", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "scaleX", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View3D.prototype, "scaleY", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    View3D.prototype._initHitField = function () {
        this._hitField = new Sprite();
        this._hitField.alpha = 0;
        this._hitField.doubleClickEnabled = true;
        this._hitField.graphics.beginFill(0x000000);
        this._hitField.graphics.drawRect(0, 0, 100, 100);
        this.addChild(this._hitField);
    };
    return View3D;
}(Sprite));
export { View3D };
