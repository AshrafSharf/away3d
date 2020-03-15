import { Entity } from "./Entity";
import { SubMesh } from "../core/base/SubMesh";
import { Geometry } from "../core/base/Geometry";
import { SubGeometry } from "../core/base/SubGeometry";
import { MaterialBase } from "../materials/MaterialBase";
/**
 * Mesh is an instance of a Geometry, augmenting it with a presence in the scene graph, a material, and an animation
 * state. It consists out of SubMeshes, which in turn correspond to SubGeometries. SubMeshes allow different parts
 * of the geometry to be assigned different materials.
 */
export declare class Mesh extends Entity {
    protected _geometry: Geometry;
    private _subMeshes;
    private _onGraphicsInvalidateDelegate;
    private _subMeshesDirty;
    /**
     * Create a new Mesh object.
     *
     * @param geometry                    The geometry used by the mesh that provides it with its shape.
     * @param material    [optional]        The material with which to render the Mesh.
     */
    constructor(geometry: Geometry, material?: MaterialBase, copyGeometry?: boolean);
    bakeTransformations(): void;
    readonly assetType: string;
    private onGeometryBoundsInvalid(event);
    /**
     * Indicates whether or not the Mesh can cast shadows. Default value is <code>true</code>.
     */
    castsShadows: boolean;
    /**
     * Defines the animator of the mesh. Act on the mesh's geometry. Default value is <code>null</code>.
     */
    animator: any;
    /**
     * The geometry used by the mesh that provides it with its shape.
     */
    geometry: Geometry;
    /**
     * The material with which to render the Mesh.
     */
    material: MaterialBase;
    /**
     * The SubMeshes out of which the Mesh consists. Every SubMesh can be assigned a material to override the Mesh's
     * material.
     */
    readonly subMeshes: SubMesh[];
    /**
     * Indicates whether or not the mesh share the same animation geometry.
     */
    shareAnimationGeometry: boolean;
    /**
     * Clears the animation geometry of this mesh. It will cause animation to generate a new animation geometry. Work only when shareAnimationGeometry is false.
     */
    clearAnimationGeometry(): void;
    /**
     * @inheritDoc
     */
    dispose(): void;
    /**
     * Disposes mesh including the animator and children. This is a merely a convenience method.
     * @return
     */
    disposeWithAnimatorAndChildren(): void;
    /**
     * Clones this Mesh instance along with all it's children, while re-using the same
     * material, geometry and animation set. The returned result will be a copy of this mesh,
     * containing copies of all of it's children.
     *
     * Properties that are re-used (i.e. not cloned) by the new copy include name,
     * geometry, and material. Properties that are cloned or created anew for the copy
     * include subMeshes, children of the mesh, and the animator.
     *
     * If you want to copy just the mesh, reusing it's geometry and material while not
     * cloning it's children, the simplest way is to create a new mesh manually:
     *
     * <code>
     * var clone : Mesh = new Mesh(original.geometry, original.material);
     * </code>
     */
    clone(): Mesh;
    getSubMeshForSubGeometry(subGeometry: SubGeometry): SubMesh;
    private _updateSubMeshes();
    private onGraphicsInvalidate(event);
}
