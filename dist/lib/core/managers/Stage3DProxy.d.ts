import { Stage3DManager } from "./Stage3DManager";
import { Stage as Stage3D } from "@awayjs/stage";
import { Context3D } from "@as3web/flash";
import { EventDispatcher } from "@as3web/flash";
import { Rectangle } from "@as3web/flash";
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
export declare class Stage3DProxy extends EventDispatcher {
    _context3D: Context3D;
    _stage3DIndex: number;
    private _profile;
    private _forceSoftware;
    private _stage3D;
    private _stage3DManager;
    /**
     * Creates a Stage3DProxy object. This method should not be called directly. Creation of Stage3DProxy objects should
     * be handled by Stage3DManager.
     * @param stage3DIndex The index of the Stage3D to be proxied.
     * @param stage3D The Stage3D to be proxied.
     * @param stage3DManager
     * @param forceSoftware Whether to force software mode even if hardware acceleration is available.
     */
    constructor(stage3DIndex: number, stage3D: Stage3D, stage3DManager: Stage3DManager, forceSoftware?: boolean, profile?: string);
    readonly profile: string;
    /**
     * Disposes the Stage3DProxy object, freeing the Context3D attached to the Stage3D.
     */
    dispose(): void;
    /**
     * Configures the back buffer associated with the Stage3D object.
     * @param backBufferWidth The width of the backbuffer.
     * @param backBufferHeight The height of the backbuffer.
     * @param antiAlias The amount of anti-aliasing to use.
     * @param enableDepthAndStencil Indicates whether the back buffer contains a depth and stencil buffer.
     */
    configureBackBuffer(backBufferWidth: number, backBufferHeight: number, antiAlias: number): void;
    enableDepthAndStencil: boolean;
    readonly renderTarget: any;
    readonly renderSurfaceSelector: number;
    setRenderTarget(target: any, enableDepthAndStencil?: boolean, surfaceSelector?: number): void;
    clear(): void;
    present(): void;
    scissorRect: Rectangle;
    /**
     * The index of the Stage3D which is managed by this instance of Stage3DProxy.
     */
    readonly stage3DIndex: number;
    /**
     * The base Stage3D object associated with this proxy.
     */
    readonly stage3D: Stage3D;
    /**
     * The Context3D object associated with the given Stage3D object.
     */
    readonly context3D: Context3D;
    /**
     * The driver information as reported by the Context3D object (if any)
     */
    readonly driverInfo: string;
    /**
     * Indicates whether the Stage3D managed by this proxy is running in software mode.
     * Remember to wait for the CONTEXT3D_CREATED event before checking this property,
     * as only then will it be guaranteed to be accurate.
     */
    readonly usesSoftwareRendering: boolean;
    /**
     * The x position of the Stage3D.
     */
    x: number;
    /**
     * The y position of the Stage3D.
     */
    y: number;
    /**
     * The width of the Stage3D.
     */
    width: number;
    /**
     * The height of the Stage3D.
     */
    height: number;
    /**
     * The antiAliasing of the Stage3D.
     */
    antiAlias: number;
    /**
     * A viewPort rectangle equivalent of the Stage3D size and position.
     */
    readonly viewPort: Rectangle;
    /**
     * The background color of the Stage3D.
     */
    color: number;
    /**
     * The visibility of the Stage3D.
     */
    visible: boolean;
    /**
     * The freshly cleared state of the backbuffer before any rendering
     */
    bufferClear: boolean;
    /**
     * Frees the Context3D associated with this Stage3DProxy.
     */
    private freeContext3D();
    private onContext3DUpdate(event);
    /**
     * Requests a Context3D object to attach to the managed Stage3D.
     */
    private requestContext(forceSoftware?, profile?);
    recoverFromDisposal(): boolean;
    clearDepthBuffer(): void;
    backBufferEnableDepthAndStencil: boolean;
}
