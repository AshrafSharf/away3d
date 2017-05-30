import {MethodMaterial} from "@awayjs/materials"
export class ColorMaterial extends MethodMaterial
{

	public get specular():number
	{
		return this.specularMethod.strength;
	}

	public set specular(value:number)
	{
		this.specularMethod.strength = value;
	}


	public get gloss():number
	{
		return this.specularMethod.gloss;
	}

	public set gloss(value:number)
	{
		this.specularMethod.gloss = value;
	}


	public get ambient():number
	{
		return this.ambientMethod.strength;
	}

	public set ambient(value:number)
	{
		this.ambientMethod.strength = value;
	}
}