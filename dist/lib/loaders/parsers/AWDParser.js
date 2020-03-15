import * as tslib_1 from "tslib";
import { AWDParser as AwayAWDParser } from "@awayjs/parsers";
import { Away3DSceneGraphFactory } from "../../factories/Away3DSceneGraphFactory";
var AWDParser = (function (_super) {
    tslib_1.__extends(AWDParser, _super);
    function AWDParser() {
        return _super.call(this, new Away3DSceneGraphFactory) || this;
    }
    return AWDParser;
}(AwayAWDParser));
export { AWDParser };
