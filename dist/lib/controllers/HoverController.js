import * as tslib_1 from "tslib";
import { HoverController as AwayHoverController } from "@awayjs/scene";
import { LookAtController } from "./LookAtController";
/**
 * Extended camera used to hover round a specified target object.
 *
 * @see    away.containers.View
 */
var HoverController = (function (_super) {
    tslib_1.__extends(HoverController, _super);
    /**
     * Creates a new <code>HoverController</code> object.
     */
    function HoverController(targetObject, lookAtObject, panAngle, tiltAngle, distance, minTiltAngle, maxTiltAngle, minPanAngle, maxPanAngle, steps, yFactor, wrapPanAngle) {
        if (targetObject === void 0) { targetObject = null; }
        if (lookAtObject === void 0) { lookAtObject = null; }
        if (panAngle === void 0) { panAngle = 0; }
        if (tiltAngle === void 0) { tiltAngle = 90; }
        if (distance === void 0) { distance = 1000; }
        if (minTiltAngle === void 0) { minTiltAngle = -90; }
        if (maxTiltAngle === void 0) { maxTiltAngle = 90; }
        if (minPanAngle === void 0) { minPanAngle = null; }
        if (maxPanAngle === void 0) { maxPanAngle = null; }
        if (steps === void 0) { steps = 8; }
        if (yFactor === void 0) { yFactor = 2; }
        if (wrapPanAngle === void 0) { wrapPanAngle = false; }
        var _this = _super.call(this, targetObject, lookAtObject) || this;
        if (_this.assetType == HoverController.assetType)
            _this._adaptee = new AwayHoverController((targetObject) ? targetObject.adaptee : null, (lookAtObject) ? lookAtObject.adaptee : null, panAngle, tiltAngle, distance, minTiltAngle, maxTiltAngle, minPanAngle, maxPanAngle, steps, yFactor, wrapPanAngle);
        return _this;
    }
    Object.defineProperty(HoverController.prototype, "assetType", {
        get: function () {
            return HoverController.assetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "steps", {
        /**
         * Fractional step taken each time the <code>hover()</code> method is called. Defaults to 8.
         *
         * Affects the speed at which the <code>tiltAngle</code> and <code>panAngle</code> resolve to their targets.
         *
         * @see    #tiltAngle
         * @see    #panAngle
         */
        get: function () {
            return this._adaptee.steps;
        },
        set: function (val) {
            this._adaptee.steps = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "panAngle", {
        /**
         * Rotation of the camera in degrees around the y axis. Defaults to 0.
         */
        get: function () {
            return this._adaptee.panAngle;
        },
        set: function (val) {
            this._adaptee.panAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "tiltAngle", {
        /**
         * Elevation angle of the camera in degrees. Defaults to 90.
         */
        get: function () {
            return this._adaptee.tiltAngle;
        },
        set: function (val) {
            this._adaptee.tiltAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "distance", {
        /**
         * Distance between the camera and the specified target. Defaults to 1000.
         */
        get: function () {
            return this._adaptee.distance;
        },
        set: function (val) {
            this._adaptee.distance = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "minPanAngle", {
        /**
         * Minimum bounds for the <code>panAngle</code>. Defaults to -Infinity.
         *
         * @see    #panAngle
         */
        get: function () {
            return this._adaptee.minPanAngle;
        },
        set: function (val) {
            this._adaptee.minPanAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "maxPanAngle", {
        /**
         * Maximum bounds for the <code>panAngle</code>. Defaults to Infinity.
         *
         * @see    #panAngle
         */
        get: function () {
            return this._adaptee.maxPanAngle;
        },
        set: function (val) {
            this._adaptee.maxPanAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "minTiltAngle", {
        /**
         * Minimum bounds for the <code>tiltAngle</code>. Defaults to -90.
         *
         * @see    #tiltAngle
         */
        get: function () {
            return this._adaptee.minTiltAngle;
        },
        set: function (val) {
            this._adaptee.minTiltAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "maxTiltAngle", {
        /**
         * Maximum bounds for the <code>tiltAngle</code>. Defaults to 90.
         *
         * @see    #tiltAngle
         */
        get: function () {
            return this._adaptee.maxTiltAngle;
        },
        set: function (val) {
            this._adaptee.maxTiltAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "yFactor", {
        /**
         * Fractional difference in distance between the horizontal camera orientation and vertical camera orientation. Defaults to 2.
         *
         * @see    #distance
         */
        get: function () {
            return this._adaptee.yFactor;
        },
        set: function (val) {
            this._adaptee.yFactor = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverController.prototype, "wrapPanAngle", {
        /**
         * Defines whether the value of the pan angle wraps when over 360 degrees or under 0 degrees. Defaults to false.
         */
        get: function () {
            return this._adaptee.wrapPanAngle;
        },
        set: function (val) {
            this._adaptee.wrapPanAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    return HoverController;
}(LookAtController));
export { HoverController };
HoverController.assetType = "[controller HoverController]";
