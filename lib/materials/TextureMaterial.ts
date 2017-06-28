import { Single2DTexture } from "@awayjs/graphics"

import {Texture2DBase} from "../textures/Texture2DBase";

import {ColorMaterial} from "./ColorMaterial";

export class TextureMaterial extends ColorMaterial
{

	constructor(texture:Texture2DBase, smooth:boolean = true, repeat:boolean = false, mipmap:boolean = false)
	{
		super();

		this.ambientMethod.texture = texture.adaptee;
	}

}