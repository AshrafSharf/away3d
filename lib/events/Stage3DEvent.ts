import {EventBase} from "@awayjs/core";

export class Stage3DEvent extends EventBase
{
	/**
	 *
	 */
	public static CONTEXT3D_CREATED:string = "context3DCreated";

	/**
	 *
	 */
	public static CONTEXT3D_DISPOSED:string = "context3DDisposed";

	/**
	 *
	 */
	public static CONTEXT3D_RECREATED:string = "context3DRecreated";

	/**
	 *
	 */
	public static VIEWPORT_UPDATED:string = "viewportUpdated";
}