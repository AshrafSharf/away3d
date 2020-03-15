import { Scene } from "@awayjs/scene";
import { Sprite, Vector3D, Transform } from "@as3web/flash";
import { View } from "@awayjs/view";
import { DefaultRenderer } from "@awayjs/renderer";
import { Stage3DProxy } from "../core/managers/Stage3DProxy";
import { Camera3D } from "../cameras/Camera3D";
import { Scene3D } from "./Scene3D";
export declare class View3D extends Sprite {
    protected _scene3d: Scene3D;
    protected _scene: Scene;
    protected _camera: Camera3D;
    private _view;
    private _stage3DProxy;
    private _renderer;
    private _profile;
    private _forceSoftware;
    private _localTLPos;
    private _localBRPos;
    private _globalPos;
    private _hitField;
    readonly view: View;
    constructor(scene?: Scene3D, camera?: Camera3D, renderer?: DefaultRenderer, forceSoftware?: boolean, profile?: string);
    depthPrepass: boolean;
    rightClickMenuEnabled: boolean;
    stage3DProxy: Stage3DProxy;
    shareContext: boolean;
    /**
     * Forces mouse-move related events even when the mouse hasn't moved. This allows mouseOver and mouseOut events
     * etc to be triggered due to changes in the scene graph. Defaults to false.
     */
    forceMouseMove: boolean;
    background: any;
    /**
     * Used in a sharedContext. When true, clears the depth buffer prior to rendering this particular
     * view to avoid depth sorting with lower layers. When false, the depth buffer is not cleared
     * from the previous (lower) view's render so objects in this view may be occluded by the lower
     * layer. Defaults to false.
     */
    layeredView: boolean;
    disableMouseEvents: boolean;
    /**
 * Not supported. Use filters3d instead.
 */
    /**
     * Not supported. Use filters3d instead.
     */
    filters: any[];
    filters3d: any[];
    /**
     * The renderer used to draw the scene.
     */
    renderer: any;
    /**
     * The background color of the screen. This value is only used when clearAll is set to true.
     */
    backgroundColor: number;
    backgroundAlpha: number;
    /**
     * The camera that's used to render the scene for this viewport
     */
    /**
     * Set camera that's used to render the scene for this viewport
     */
    camera: Camera3D;
    /**
     * The scene that's used to render for this viewport
     */
    /**
     * Set the scene that's used to render for this viewport
     */
    scene: Scene3D;
    /**
     * The amount of milliseconds the last render call took
     */
    readonly deltaTime: number;
    /**
     * The width of the viewport. When software rendering is used, this is limited by the
     * platform to 2048 pixels.
     */
    width: number;
    /**
     * The height of the viewport. When software rendering is used, this is limited by the
     * platform to 2048 pixels.
     */
    height: number;
    x: number;
    y: number;
    /**
     * The amount of anti-aliasing to be used.
     */
    antiAlias: number;
    /**
     * The amount of faces that were pushed through the render pipeline on the last frame render.
     */
    readonly renderedFacesCount: number;
    /**
     * Defines a source url string that can be accessed though a View Source option in the right-click menu.
     *
     * Requires the stats panel to be enabled.
     *
     * @param    url        The url to the source files.
     */
    addSourceURL(url: string): void;
    /**
     * Renders the view.
     */
    render(): void;
    /**
     * Disposes all memory occupied by the view. This will also dispose the renderer.
     */
    dispose(): void;
    /**
     * Calculates the projected position in screen space of the given scene position.
     *
     * @param point3d the position vector of the point to be projected.
     * @return The absolute screen position of the given scene coordinates.
     */
    project(point3d: Vector3D): Vector3D;
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
    unproject(sX: number, sY: number, sZ: number, v?: Vector3D): Vector3D;
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
    getRay(sX: number, sY: number, sZ: number): Vector3D;
    mousePicker: any;
    touchPicker: any;
    z: number;
    scaleZ: number;
    rotation: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    transform: Transform;
    scaleX: number;
    scaleY: number;
    private _initHitField();
}
