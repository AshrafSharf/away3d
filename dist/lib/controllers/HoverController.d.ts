import { LookAtController } from "./LookAtController";
import { Object3D } from "../core/base/Object3D";
/**
 * Extended camera used to hover round a specified target object.
 *
 * @see    away.containers.View
 */
export declare class HoverController extends LookAtController {
    static assetType: string;
    readonly assetType: string;
    /**
     * Fractional step taken each time the <code>hover()</code> method is called. Defaults to 8.
     *
     * Affects the speed at which the <code>tiltAngle</code> and <code>panAngle</code> resolve to their targets.
     *
     * @see    #tiltAngle
     * @see    #panAngle
     */
    steps: number;
    /**
     * Rotation of the camera in degrees around the y axis. Defaults to 0.
     */
    panAngle: number;
    /**
     * Elevation angle of the camera in degrees. Defaults to 90.
     */
    tiltAngle: number;
    /**
     * Distance between the camera and the specified target. Defaults to 1000.
     */
    distance: number;
    /**
     * Minimum bounds for the <code>panAngle</code>. Defaults to -Infinity.
     *
     * @see    #panAngle
     */
    minPanAngle: number;
    /**
     * Maximum bounds for the <code>panAngle</code>. Defaults to Infinity.
     *
     * @see    #panAngle
     */
    maxPanAngle: number;
    /**
     * Minimum bounds for the <code>tiltAngle</code>. Defaults to -90.
     *
     * @see    #tiltAngle
     */
    minTiltAngle: number;
    /**
     * Maximum bounds for the <code>tiltAngle</code>. Defaults to 90.
     *
     * @see    #tiltAngle
     */
    maxTiltAngle: number;
    /**
     * Fractional difference in distance between the horizontal camera orientation and vertical camera orientation. Defaults to 2.
     *
     * @see    #distance
     */
    yFactor: number;
    /**
     * Defines whether the value of the pan angle wraps when over 360 degrees or under 0 degrees. Defaults to false.
     */
    wrapPanAngle: boolean;
    /**
     * Creates a new <code>HoverController</code> object.
     */
    constructor(targetObject?: Object3D, lookAtObject?: Object3D, panAngle?: number, tiltAngle?: number, distance?: number, minTiltAngle?: number, maxTiltAngle?: number, minPanAngle?: number, maxPanAngle?: number, steps?: number, yFactor?: number, wrapPanAngle?: boolean);
}
