import { AttributesBuffer } from "@awayjs/stage";
import { TriangleElements } from "@awayjs/graphics";
var SubGeometry = (function () {
    function SubGeometry(adaptee) {
        if (adaptee === void 0) { adaptee = null; }
        this._adaptee = adaptee || new TriangleElements(new AttributesBuffer());
    }
    Object.defineProperty(SubGeometry.prototype, "adaptee", {
        get: function () {
            return this._adaptee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubGeometry.prototype, "vertexData", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    SubGeometry.prototype.updateVertexData = function (verts) {
        this._adaptee.setPositions(verts);
    };
    SubGeometry.prototype.updateIndexData = function (idx) {
        this._adaptee.setIndices(idx);
    };
    SubGeometry.prototype.updateUVData = function (uvs) {
        this._adaptee.setUVs(uvs);
    };
    SubGeometry.prototype.updateVertexNormalData = function (value) {
        //this._adaptee.setNormals(value);
    };
    SubGeometry.prototype.updateVertexTangentData = function (value) {
        //this._adaptee.setTangents(value);
    };
    return SubGeometry;
}());
export { SubGeometry };
