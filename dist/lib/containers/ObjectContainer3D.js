import * as tslib_1 from "tslib";
import { DisplayObjectContainer } from "@awayjs/scene";
import { Object3D } from "../core/base/Object3D";
import { AssetType } from "../library/assets/AssetType";
/**
 * Dispatched when the scene transform matrix of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #sceneTransform
 */
/*[Event(name="scenetransformChanged", type="away3d.events.Object3DEvent")]*/
/**
 * Dispatched when the parent scene of the 3d object changes.
 *
 * @eventType away3d.events.Object3DEvent
 * @see    #scene
 */
/*[Event(name="sceneChanged", type="away3d.events.Object3DEvent")]*/
/**
 * Dispatched when a user moves the cursor while it is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseMove3d", type="away3d.events.MouseEvent3D")]*/
/**
 * Dispatched when a user presses the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseDown3d", type="away3d.events.MouseEvent3D")]*/
/**
 * Dispatched when a user releases the left hand mouse button while the cursor is over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseUp3d", type="away3d.events.MouseEvent3D")]*/
/**
 * Dispatched when a user moves the cursor over the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseOver3d", type="away3d.events.MouseEvent3D")]*/
/**
 * Dispatched when a user moves the cursor away from the 3d object.
 *
 * @eventType away3d.events.MouseEvent3D
 */
/*[Event(name="mouseOut3d", type="away3d.events.MouseEvent3D")]*/
/**
 * ObjectContainer3D is the most basic scene graph node. It can contain other ObjectContainer3Ds.
 *
 * ObjectContainer3D can have its own scene partition assigned. However, when assigned to a different scene,
 * it will loose any partition information, since partitions are tied to a scene.
 */
var ObjectContainer3D = (function (_super) {
    tslib_1.__extends(ObjectContainer3D, _super);
    /**
     * Creates a new ObjectContainer3D object.
     */
    function ObjectContainer3D(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        return _super.call(this, adaptee || new DisplayObjectContainer()) || this;
    }
    Object.defineProperty(ObjectContainer3D.prototype, "ignoreTransform", {
        /**
         * Does not apply any transformations to this object. Allows static objects to be described in world coordinates without any matrix calculations.
         */
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
    Object.defineProperty(ObjectContainer3D.prototype, "mouseEnabled", {
        /**
         * Indicates whether the IRenderable should trigger mouse events, and hence should be rendered for hit testing.
         */
        get: function () {
            return this._adaptee.mouseEnabled;
        },
        set: function (value) {
            this._adaptee.mouseEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "mouseChildren", {
        /**
         *
         */
        get: function () {
            return this._adaptee.mouseChildren;
        },
        set: function (value) {
            this._adaptee.mouseChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "visible", {
        /**
         *
         */
        get: function () {
            return this._adaptee.visible;
        },
        set: function (value) {
            this._adaptee.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "assetType", {
        get: function () {
            return AssetType.CONTAINER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "scenePosition", {
        /**
         * The global position of the ObjectContainer3D in the scene. The value of the return object should not be changed.
         */
        get: function () {
            return this._adaptee.scenePosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "minX", {
        /**
         * The minimum extremum of the object along the X-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "minY", {
        /**
         * The minimum extremum of the object along the Y-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "minZ", {
        /**
         * The minimum extremum of the object along the Z-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "maxX", {
        /**
         * The maximum extremum of the object along the X-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "maxY", {
        /**
         * The maximum extremum of the object along the Y-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "maxZ", {
        /**
         * The maximum extremum of the object along the Z-axis.
         */
        get: function () {
            //todo
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "partition", {
        /**
         * The space partition to be used by the object container and all its recursive children, unless it has its own
         * space partition assigned.
         */
        get: function () {
            //todo any is Partition3D
            return null; //this._explicitPartition;
        },
        set: function (value) {
            //todo any is Partition3D
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "sceneTransform", {
        /**
         * The transformation matrix that transforms from model to world space.
         */
        get: function () {
            return this._adaptee.transform.concatenatedMatrix3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "scene", {
        /**
         * A reference to the Scene3D object to which this object belongs.
         */
        get: function () {
            //todo
            return null;
        },
        set: function (value) {
            //todo
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "inverseSceneTransform", {
        /**
         * The inverse scene transform object that transforms from world to model space.
         */
        get: function () {
            return this._adaptee.transform.inverseConcatenatedMatrix3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectContainer3D.prototype, "parent", {
        /**
         * The parent ObjectContainer3D to which this object's transformation is relative.
         */
        get: function () {
            return (this._adaptee.parent ? this._adaptee.parent.adapter : null);
        },
        enumerable: true,
        configurable: true
    });
    ObjectContainer3D.prototype.contains = function (child) {
        return this._adaptee.getChildIndex(child.adaptee) >= 0;
    };
    /**
     * Adds a child ObjectContainer3D to the current object. The child's transformation will become relative to the
     * current object's transformation.
     * @param child The object to be added as a child.
     * @return A reference to the added child object.
     */
    ObjectContainer3D.prototype.addChild = function (child) {
        this._adaptee.addChild(child.adaptee);
        return child;
    };
    /**
     * Adds an array of 3d objects to the scene as children of the container
     *
     * @param    childArray        An array of 3d objects to be added
     */
    ObjectContainer3D.prototype.addChildren = function (childArray) {
        var child;
        for (var _i = 0, childArray_1 = childArray; _i < childArray_1.length; _i++) {
            child = childArray_1[_i];
            this._adaptee.addChild(child.adaptee);
        }
    };
    /**
     * Removes a 3d object from the child array of the container
     *
     * @param    child    The 3d object to be removed
     * @throws    Error    ObjectContainer3D.removeChild(null)
     */
    ObjectContainer3D.prototype.removeChild = function (child) {
        this._adaptee.removeChild(child.adaptee);
    };
    /**
     * Removes a 3d object from the child array of the container
     *
     * @param    index    Index of 3d object to be removed
     */
    ObjectContainer3D.prototype.removeChildAt = function (index) {
        this._adaptee.removeChildAt(index);
    };
    /**
     * Retrieves the child object at the given index.
     * @param index The index of the object to be retrieved.
     * @return The child object at the given index.
     */
    ObjectContainer3D.prototype.getChildAt = function (index) {
        return this._adaptee.getChildAt(index).adapter;
    };
    Object.defineProperty(ObjectContainer3D.prototype, "numChildren", {
        /**
         * The amount of child objects of the ObjectContainer3D.
         */
        get: function () {
            return this._adaptee.numChildren;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    ObjectContainer3D.prototype.lookAt = function (target, upAxis) {
        if (upAxis === void 0) { upAxis = null; }
        this._adaptee.lookAt(target, upAxis);
    };
    ObjectContainer3D.prototype.translateLocal = function (axis, distance) {
        this._adaptee.transform.translateLocal(axis, distance);
    };
    /**
     * Disposes the current ObjectContainer3D including all of its children. This is a merely a convenience method.
     */
    ObjectContainer3D.prototype.disposeWithChildren = function () {
        // todo
    };
    /**
     * Clones this ObjectContainer3D instance along with all it's children, and
     * returns the result (which will be a copy of this container, containing copies
     * of all it's children.)
     */
    ObjectContainer3D.prototype.clone = function () {
        return new ObjectContainer3D(this._adaptee.clone());
    };
    return ObjectContainer3D;
}(Object3D));
export { ObjectContainer3D };
