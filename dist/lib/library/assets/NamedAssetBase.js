import * as tslib_1 from "tslib";
import { AssetBase } from "@awayjs/core";
import { EventDispatcher } from "@as3web/flash";
var NamedAssetBase = (function (_super) {
    tslib_1.__extends(NamedAssetBase, _super);
    function NamedAssetBase(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        var _this = _super.call(this) || this;
        _this._adaptee = adaptee || new AssetBase();
        _this._adaptee.adapter = _this;
        return _this;
    }
    Object.defineProperty(NamedAssetBase.prototype, "adaptee", {
        get: function () {
            return this._adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedAssetBase.prototype, "name", {
        get: function () {
            return this._adaptee.name;
        },
        set: function (val) {
            this._adaptee.name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedAssetBase.prototype, "originalName", {
        /**
         * The original name used for this asset in the resource (e.g. file) in which
         * it was found. This may not be the same as <code>name</code>, which may
         * have changed due to of a name conflict.
         */
        get: function () {
            return this._adaptee.originalName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedAssetBase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newID) {
            this._id = newID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedAssetBase.prototype, "assetNamespace", {
        get: function () {
            return this._adaptee.assetNamespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedAssetBase.prototype, "assetFullPath", {
        get: function () {
            return this._adaptee.assetFullPath;
        },
        enumerable: true,
        configurable: true
    });
    NamedAssetBase.prototype.assetPathEquals = function (name, ns) {
        return this._adaptee.assetPathEquals(name, ns);
    };
    NamedAssetBase.prototype.resetAssetPath = function (name, ns, overrideOriginal) {
        if (ns === void 0) { ns = null; }
        if (overrideOriginal === void 0) { overrideOriginal = true; }
        this._adaptee.resetAssetPath(name, ns, overrideOriginal);
    };
    NamedAssetBase.prototype.dispose = function () {
        this._adaptee.dispose();
        this._adaptee = null;
    };
    return NamedAssetBase;
}(EventDispatcher));
export { NamedAssetBase };
