import * as tslib_1 from "tslib";
import { RaycastPicker as AwayJSRaycastPicker } from "@awayjs/view";
var RaycastPicker = (function (_super) {
    tslib_1.__extends(RaycastPicker, _super);
    function RaycastPicker() {
        return _super.apply(this, arguments) || this;
    }
    RaycastPicker.prototype.getViewCollision = function (x, y, view) {
        //update ray
        var rayPosition = view.unproject(x, y, 0);
        var rayDirection = view.unproject(x, y, 1).subtract(rayPosition);
        // todo2019: shapeflag true is correct here ?
        return _super.prototype.getCollision.call(this, rayPosition, rayDirection, true);
    };
    return RaycastPicker;
}(AwayJSRaycastPicker));
export { RaycastPicker };
