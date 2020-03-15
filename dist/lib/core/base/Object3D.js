import * as tslib_1 from "tslib";
import { NamedAssetBase } from "../../library/assets/NamedAssetBase";
import { DisplayObject } from "@awayjs/scene";
/**
 * Dispatched when the position of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="positionChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the scale of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="scaleChanged", type="away3d.events.Object3DEvent")]


 * Dispatched when the rotation of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent

[Event(name="rotationChanged", type="away3d.events.Object3DEvent")]

 * Object3D provides a base class for any 3D object that has a (local) transformation.<br/><br/>
 *
 * Standard Transform:
 * <ul>
 *     <li> The standard order for transformation is [parent transform] * (Translate+Pivot) * (Rotate) * (-Pivot) * (Scale) * [child transform] </li>
 *     <li> This is the order of matrix multiplications, left-to-right. </li>
 *     <li> The order of transformation is right-to-left, however!
 *          (Scale) happens before (-Pivot) happens before (Rotate) happens before (Translate+Pivot)
 *          with no pivot, the above transform works out to [parent transform] * Translate * Rotate * Scale * [child transform]
 *          (Scale) happens before (Rotate) happens before (Translate) </li>
 *     <li> This is based on code in updateTransform and ObjectContainer3D.updateSceneTransform(). </li>
 *     <li> Matrix3D prepend = operator on rhs - e.g. transform' = transform * rhs; </li>
 *     <li> Matrix3D append =  operator on lhr - e.g. transform' = lhs * transform; </li>
 * </ul>
 *
 * To affect Scale:
 * <ul>
 *     <li> set scaleX/Y/Z directly, or call scale(delta) </li>
 * </ul>
 *
 * To affect Pivot:
 * <ul>
 *     <li> set pivotPoint directly, or call movePivot() </li>
 * </ul>
 *
 * To affect Rotate:
 * <ul>
 *    <li> set rotationX/Y/Z individually (using degrees), set eulers [all 3 angles] (using radians), or call rotateTo()</li>
 *    <li> call pitch()/yaw()/roll()/rotate() to add an additional rotation *before* the current transform.
 *         rotationX/Y/Z will be reset based on these operations. </li>
 * </ul>
 *
 * To affect Translate (post-rotate translate):
 *
 * <ul>
 *    <li> set x/y/z/position or call moveTo(). </li>
 *    <li> call translate(), which modifies x/y/z based on a delta vector. </li>
 *    <li> call moveForward()/moveBackward()/moveLeft()/moveRight()/moveUp()/moveDown()/translateLocal() to add an
 *         additional translate *before* the current transform. x/y/z will be reset based on these operations. </li>
 * </ul>
 */
var Object3D = (function (_super) {
    tslib_1.__extends(Object3D, _super);
    /**
     * Creates an Object3D object.
     */
    function Object3D(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        var _this = _super.call(this, adaptee || new DisplayObject()) || this;
        _this._adaptee.mouseEnabled = false;
        return _this;
    }
    Object.defineProperty(Object3D.prototype, "x", {
        /**
         * Defines the x coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.x;
        },
        set: function (val) {
            this._adaptee.x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "y", {
        /**
         * Defines the y coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.y;
        },
        set: function (val) {
            this._adaptee.y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "z", {
        /**
         * Defines the z coordinate of the 3d object relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.z;
        },
        set: function (val) {
            this._adaptee.z = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "rotationX", {
        /**
         * Defines the euler angle of rotation of the 3d object around the x-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.rotationX;
        },
        set: function (val) {
            this._adaptee.rotationX = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "rotationY", {
        /**
         * Defines the euler angle of rotation of the 3d object around the y-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.rotationY;
        },
        set: function (val) {
            this._adaptee.rotationY = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "rotationZ", {
        /**
         * Defines the euler angle of rotation of the 3d object around the z-axis, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.rotationZ;
        },
        set: function (val) {
            this._adaptee.rotationZ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "scaleX", {
        /**
         * Defines the scale of the 3d object along the x-axis, relative to local coordinates.
         */
        get: function () {
            return this._adaptee.scaleX;
        },
        set: function (val) {
            this._adaptee.scaleX = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "scaleY", {
        /**
         * Defines the scale of the 3d object along the y-axis, relative to local coordinates.
         */
        get: function () {
            return this._adaptee.scaleY;
        },
        set: function (val) {
            this._adaptee.scaleY = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "scaleZ", {
        /**
         * Defines the scale of the 3d object along the z-axis, relative to local coordinates.
         */
        get: function () {
            return this._adaptee.scaleZ;
        },
        set: function (val) {
            this._adaptee.scaleZ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "eulers", {
        /**
         * Defines the rotation of the 3d object as a <code>Vector3D</code> object containing euler angles for rotation around x, y and z axis.
         */
        get: function () {
            return this._adaptee.eulers;
        },
        set: function (value) {
            this._adaptee.eulers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "transform", {
        /**
         * The transformation of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.transform.matrix3D;
        },
        set: function (val) {
            this._adaptee.transform.matrix3D = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "pivotPoint", {
        /**
         * Defines the local point around which the object rotates.
         */
        get: function () {
            //todo
            return null;
        },
        set: function (pivot) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "position", {
        /**
         * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
         */
        get: function () {
            return this._adaptee.transform.position;
        },
        set: function (value) {
            this._adaptee.transform.moveTo(value.x, value.y, value.z);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Defines the position of the 3d object, relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     * @param v the destination Vector3D
     * @return
     */
    Object3D.prototype.getPosition = function (v) {
        if (v === void 0) { v = null; }
        //todo
        return null;
    };
    Object.defineProperty(Object3D.prototype, "forwardVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.forwardVector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "rightVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.rightVector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "upVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.upVector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "backVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.backVector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "leftVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.leftVector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Object3D.prototype, "downVector", {
        /**
         *
         */
        get: function () {
            return this._adaptee.transform.downVector;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Appends a uniform scale to the current transformation.
     * @param value The amount by which to scale.
     */
    Object3D.prototype.scale = function (value) {
        this._adaptee.transform.scaleTo(value, value, value);
    };
    /**
     * Moves the 3d object forwards along it's local z axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveForward = function (distance) {
        this._adaptee.transform.moveForward(distance);
    };
    /**
     * Moves the 3d object backwards along it's local z axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveBackward = function (distance) {
        this._adaptee.transform.moveBackward(distance);
    };
    /**
     * Moves the 3d object backwards along it's local x axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveLeft = function (distance) {
        this._adaptee.transform.moveLeft(distance);
    };
    /**
     * Moves the 3d object forwards along it's local x axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveRight = function (distance) {
        this._adaptee.transform.moveRight(distance);
    };
    /**
     * Moves the 3d object forwards along it's local y axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveUp = function (distance) {
        this._adaptee.transform.moveUp(distance);
    };
    /**
     * Moves the 3d object backwards along it's local y axis
     *
     * @param    distance    The length of the movement
     */
    Object3D.prototype.moveDown = function (distance) {
        this._adaptee.transform.moveDown(distance);
    };
    /**
     * Moves the 3d object directly to a point in space
     *
     * @param    dx        The amount of movement along the local x axis.
     * @param    dy        The amount of movement along the local y axis.
     * @param    dz        The amount of movement along the local z axis.
     */
    Object3D.prototype.moveTo = function (dx, dy, dz) {
        this._adaptee.transform.moveTo(dx, dy, dz);
    };
    /**
     * Moves the local point around which the object rotates.
     *
     * @param    dx        The amount of movement along the local x axis.
     * @param    dy        The amount of movement along the local y axis.
     * @param    dz        The amount of movement along the local z axis.
     */
    Object3D.prototype.movePivot = function (dx, dy, dz) {
        this._adaptee.movePivot(dx, dy, dz);
    };
    /**
     * Moves the 3d object along a vector by a defined length
     *
     * @param    axis        The vector defining the axis of movement
     * @param    distance    The length of the movement
     */
    Object3D.prototype.translate = function (axis, distance) {
        this._adaptee.transform.translate(axis, distance);
    };
    /**
     * Moves the 3d object along a vector by a defined length
     *
     * @param    axis        The vector defining the axis of movement
     * @param    distance    The length of the movement
     */
    Object3D.prototype.translateLocal = function (axis, distance) {
        this._adaptee.transform.translateLocal(axis, distance);
    };
    /**
     * Rotates the 3d object around it's local x-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    Object3D.prototype.pitch = function (angle) {
        this._adaptee.transform.pitch(angle);
    };
    /**
     * Rotates the 3d object around it's local y-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    Object3D.prototype.yaw = function (angle) {
        this._adaptee.transform.yaw(angle);
    };
    /**
     * Rotates the 3d object around it's local z-axis
     *
     * @param    angle        The amount of rotation in degrees
     */
    Object3D.prototype.roll = function (angle) {
        this._adaptee.transform.roll(angle);
    };
    Object3D.prototype.clone = function () {
        return new Object3D(this._adaptee.clone());
    };
    /**
     * Rotates the 3d object directly to a euler angle
     *
     * @param    ax        The angle in degrees of the rotation around the x axis.
     * @param    ay        The angle in degrees of the rotation around the y axis.
     * @param    az        The angle in degrees of the rotation around the z axis.
     */
    Object3D.prototype.rotateTo = function (ax, ay, az) {
        this._adaptee.transform.rotateTo(ax, ay, az);
    };
    /**
     * Rotates the 3d object around an axis by a defined angle
     *
     * @param    axis        The vector defining the axis of rotation
     * @param    angle        The amount of rotation in degrees
     */
    Object3D.prototype.rotate = function (axis, angle) {
        this._adaptee.transform.rotate(axis, angle);
    };
    /**
     * Rotates the 3d object around to face a point defined relative to the local coordinates of the parent <code>ObjectContainer3D</code>.
     *
     * @param    target        The vector defining the point to be looked at
     * @param    upAxis        An optional vector used to define the desired up orientation of the 3d object after rotation has occurred
     */
    Object3D.prototype.lookAt = function (target, upAxis) {
        if (upAxis === void 0) { upAxis = null; }
        this._adaptee.lookAt(target, upAxis);
    };
    /**
     * @inheritDoc
     */
    Object3D.prototype.disposeAsset = function () {
        //todo
    };
    Object.defineProperty(Object3D.prototype, "zOffset", {
        get: function () {
            return this._adaptee.zOffset;
        },
        set: function (value) {
            this._adaptee.zOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    return Object3D;
}(NamedAssetBase));
export { Object3D };
