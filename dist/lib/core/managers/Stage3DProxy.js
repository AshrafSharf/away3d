import * as tslib_1 from "tslib";
import { EventDispatcher } from "@as3web/flash";
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
var Stage3DProxy = (function (_super) {
    tslib_1.__extends(Stage3DProxy, _super);
    /**
     * Creates a Stage3DProxy object. This method should not be called directly. Creation of Stage3DProxy objects should
     * be handled by Stage3DManager.
     * @param stage3DIndex The index of the Stage3D to be proxied.
     * @param stage3D The Stage3D to be proxied.
     * @param stage3DManager
     * @param forceSoftware Whether to force software mode even if hardware acceleration is available.
     */
    function Stage3DProxy(stage3DIndex, stage3D, stage3DManager, forceSoftware, profile) {
        if (forceSoftware === void 0) { forceSoftware = false; }
        if (profile === void 0) { profile = "baseline"; }
        var _this = _super.call(this) || this;
        /*arcane*/ _this._stage3DIndex = -1;
        _this._stage3DIndex = stage3DIndex;
        _this._stage3D = stage3D;
        _this._stage3D.x = 0;
        _this._stage3D.y = 0;
        _this._stage3D.visible = true;
        _this._stage3DManager = stage3DManager;
        _this._forceSoftware = forceSoftware;
        _this._profile = profile;
        return _this;
    }
    Object.defineProperty(Stage3DProxy.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Disposes the Stage3DProxy object, freeing the Context3D attached to the Stage3D.
     */
    Stage3DProxy.prototype.dispose = function () {
        //todo
    };
    /**
     * Configures the back buffer associated with the Stage3D object.
     * @param backBufferWidth The width of the backbuffer.
     * @param backBufferHeight The height of the backbuffer.
     * @param antiAlias The amount of anti-aliasing to use.
     * @param enableDepthAndStencil Indicates whether the back buffer contains a depth and stencil buffer.
     */
    Stage3DProxy.prototype.configureBackBuffer = function (backBufferWidth, backBufferHeight, antiAlias) {
        //todo
    };
    Object.defineProperty(Stage3DProxy.prototype, "enableDepthAndStencil", {
        /*
         * Indicates whether the depth and stencil buffer is used
         */
        get: function () {
            //todo
            return false;
        },
        set: function (enableDepthAndStencil) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "renderTarget", {
        get: function () {
            //todo:any is TextureBase
            console.log("Stage3DProxy: renderTarget not implemented yet");
            return null; //this._renderTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "renderSurfaceSelector", {
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Stage3DProxy.prototype.setRenderTarget = function (target, enableDepthAndStencil, surfaceSelector) {
        if (enableDepthAndStencil === void 0) { enableDepthAndStencil = false; }
        if (surfaceSelector === void 0) { surfaceSelector = 0; }
        //todo:any is TextureBase
        console.log("Stage3DProxy: setRenderTarget not implemented yet");
    };
    /*
     * Clear and reset the back buffer when using a shared context
     */
    Stage3DProxy.prototype.clear = function () {
        this._stage3D.clear();
    };
    /*
     * Display the back rendering buffer
     */
    Stage3DProxy.prototype.present = function () {
        this._stage3D.context.present();
    };
    Object.defineProperty(Stage3DProxy.prototype, "scissorRect", {
        get: function () {
            // todo2019: what happened to scissorRect ?
            return null; //this._stage3D.scissorRect;
        },
        set: function (value) {
            // todo2019: what happened to scissorRect ?
            //this._stage3D.scissorRect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "stage3DIndex", {
        /**
         * The index of the Stage3D which is managed by this instance of Stage3DProxy.
         */
        get: function () {
            return this._stage3DIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "stage3D", {
        /**
         * The base Stage3D object associated with this proxy.
         */
        get: function () {
            return this._stage3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "context3D", {
        /**
         * The Context3D object associated with the given Stage3D object.
         */
        get: function () {
            //todo
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "driverInfo", {
        /**
         * The driver information as reported by the Context3D object (if any)
         */
        get: function () {
            //todo
            return ""; //this._context3D? this._context3D.driverInfo : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "usesSoftwareRendering", {
        /**
         * Indicates whether the Stage3D managed by this proxy is running in software mode.
         * Remember to wait for the CONTEXT3D_CREATED event before checking this property,
         * as only then will it be guaranteed to be accurate.
         */
        get: function () {
            //todo
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "x", {
        /**
         * The x position of the Stage3D.
         */
        get: function () {
            return this._stage3D.x;
        },
        set: function (value) {
            this._stage3D.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "y", {
        /**
         * The y position of the Stage3D.
         */
        get: function () {
            return this._stage3D.y;
        },
        set: function (value) {
            this._stage3D.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "width", {
        /**
         * The width of the Stage3D.
         */
        get: function () {
            return this._stage3D.width;
        },
        set: function (width) {
            this._stage3D.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "height", {
        /**
         * The height of the Stage3D.
         */
        get: function () {
            return this._stage3D.height;
        },
        set: function (height) {
            this._stage3D.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "antiAlias", {
        /**
         * The antiAliasing of the Stage3D.
         */
        get: function () {
            //todo
            return 0;
        },
        set: function (antiAlias) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "viewPort", {
        /**
         * A viewPort rectangle equivalent of the Stage3D size and position.
         */
        get: function () {
            //todo
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "color", {
        /**
         * The background color of the Stage3D.
         */
        get: function () {
            //todo
            return 0;
        },
        set: function (color) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "visible", {
        /**
         * The visibility of the Stage3D.
         */
        get: function () {
            return this._stage3D.visible;
        },
        set: function (value) {
            this._stage3D.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage3DProxy.prototype, "bufferClear", {
        /**
         * The freshly cleared state of the backbuffer before any rendering
         */
        get: function () {
            //todo
            return false;
        },
        set: function (newBufferClear) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
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
    Stage3DProxy.prototype.freeContext3D = function () {
        //todo
    };
    /*
     * Called whenever the Context3D is retrieved or lost.
     * @param event The event dispatched.
     */
    Stage3DProxy.prototype.onContext3DUpdate = function (event) {
        //todo
    };
    /**
     * Requests a Context3D object to attach to the managed Stage3D.
     */
    Stage3DProxy.prototype.requestContext = function (forceSoftware, profile) {
        if (forceSoftware === void 0) { forceSoftware = false; }
        if (profile === void 0) { profile = "baseline"; }
        //todo
    };
    Stage3DProxy.prototype.recoverFromDisposal = function () {
        //todo
        return true;
    };
    Stage3DProxy.prototype.clearDepthBuffer = function () {
        //todo
    };
    Object.defineProperty(Stage3DProxy.prototype, "backBufferEnableDepthAndStencil", {
        get: function () {
            //todo
            return false;
        },
        set: function (value) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    return Stage3DProxy;
}(EventDispatcher));
export { Stage3DProxy };
