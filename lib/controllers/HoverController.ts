import {MathConsts, Vector3D} from "@awayjs/core";

import {HoverController as AwayHoverController, DisplayObject} from "@awayjs/scene";

import {LookAtController} from "./LookAtController";

import {Object3D} from "../core/base/Object3D";

/**
 * Extended camera used to hover round a specified target object.
 *
 * @see    away.containers.View
 */
export class HoverController extends LookAtController
{
	static assetType:string = "[controller HoverController]";

	public get assetType():string
	{
		return HoverController.assetType;
	}

	/**
	 * Fractional step taken each time the <code>hover()</code> method is called. Defaults to 8.
	 *
	 * Affects the speed at which the <code>tiltAngle</code> and <code>panAngle</code> resolve to their targets.
	 *
	 * @see    #tiltAngle
	 * @see    #panAngle
	 */
	public get steps():number
	{
		return (<AwayHoverController> this._adaptee).steps;
	}

	public set steps(val:number)
	{
		(<AwayHoverController> this._adaptee).steps = val;
	}

	/**
	 * Rotation of the camera in degrees around the y axis. Defaults to 0.
	 */
	public get panAngle():number
	{
		return (<AwayHoverController> this._adaptee).panAngle;
	}

	public set panAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).panAngle = val;
	}

	/**
	 * Elevation angle of the camera in degrees. Defaults to 90.
	 */
	public get tiltAngle():number
	{
		return (<AwayHoverController> this._adaptee).tiltAngle;
	}

	public set tiltAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).tiltAngle = val;
	}

	/**
	 * Distance between the camera and the specified target. Defaults to 1000.
	 */
	public get distance():number
	{
		return (<AwayHoverController> this._adaptee).distance;
	}

	public set distance(val:number)
	{
		(<AwayHoverController> this._adaptee).distance = val;
	}

	/**
	 * Minimum bounds for the <code>panAngle</code>. Defaults to -Infinity.
	 *
	 * @see    #panAngle
	 */
	public get minPanAngle():number
	{
		return (<AwayHoverController> this._adaptee).minPanAngle;
	}

	public set minPanAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).minPanAngle = val;
	}

	/**
	 * Maximum bounds for the <code>panAngle</code>. Defaults to Infinity.
	 *
	 * @see    #panAngle
	 */
	public get maxPanAngle():number
	{
		return (<AwayHoverController> this._adaptee).maxPanAngle;
	}

	public set maxPanAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).maxPanAngle = val;
	}

	/**
	 * Minimum bounds for the <code>tiltAngle</code>. Defaults to -90.
	 *
	 * @see    #tiltAngle
	 */
	public get minTiltAngle():number
	{
		return (<AwayHoverController> this._adaptee).minTiltAngle;
	}

	public set minTiltAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).minTiltAngle = val;
	}

	/**
	 * Maximum bounds for the <code>tiltAngle</code>. Defaults to 90.
	 *
	 * @see    #tiltAngle
	 */
	public get maxTiltAngle():number
	{
		return (<AwayHoverController> this._adaptee).maxTiltAngle;
	}

	public set maxTiltAngle(val:number)
	{
		(<AwayHoverController> this._adaptee).maxTiltAngle = val;
	}

	/**
	 * Fractional difference in distance between the horizontal camera orientation and vertical camera orientation. Defaults to 2.
	 *
	 * @see    #distance
	 */
	public get yFactor():number
	{
		return (<AwayHoverController> this._adaptee).yFactor;
	}

	public set yFactor(val:number)
	{
		(<AwayHoverController> this._adaptee).yFactor = val;
	}

	/**
	 * Defines whether the value of the pan angle wraps when over 360 degrees or under 0 degrees. Defaults to false.
	 */
	public get wrapPanAngle():boolean
	{
		return (<AwayHoverController> this._adaptee).wrapPanAngle;
	}

	public set wrapPanAngle(val:boolean)
	{
		(<AwayHoverController> this._adaptee).wrapPanAngle = val;
	}

	/**
	 * Creates a new <code>HoverController</code> object.
	 */
	constructor(targetObject: Object3D = null, lookAtObject: Object3D = null, panAngle: number = 0, tiltAngle: number = 90, distance: number = 1000, minTiltAngle: number = -90, maxTiltAngle: number = 90, minPanAngle: number = null, maxPanAngle: number = null, steps: number = 8, yFactor: number = 2, wrapPanAngle: boolean = false)
	{
		super(targetObject, lookAtObject);

		if (this.assetType == HoverController.assetType)
			this._adaptee = new AwayHoverController(<DisplayObject> targetObject.adaptee, <DisplayObject> lookAtObject.adaptee, panAngle, tiltAngle, distance, minTiltAngle, maxTiltAngle, minPanAngle, maxPanAngle, steps, yFactor, wrapPanAngle);
	}
}