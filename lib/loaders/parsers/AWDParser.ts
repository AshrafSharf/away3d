import {AWDParser as AwayAWDParser} from "@awayjs/parsers";

import {Away3DSceneGraphFactory} from "../../factories/Away3DSceneGraphFactory";

export class AWDParser extends AwayAWDParser
{
	constructor()
	{
		super(new Away3DSceneGraphFactory);
	}
}