import * as tslib_1 from "tslib";
import { EventBase } from "@awayjs/core";
var Stage3DEvent = (function (_super) {
    tslib_1.__extends(Stage3DEvent, _super);
    function Stage3DEvent() {
        return _super.apply(this, arguments) || this;
    }
    return Stage3DEvent;
}(EventBase));
export { Stage3DEvent };
/**
 *
 */
Stage3DEvent.CONTEXT3D_CREATED = "context3DCreated";
/**
 *
 */
Stage3DEvent.CONTEXT3D_DISPOSED = "context3DDisposed";
/**
 *
 */
Stage3DEvent.CONTEXT3D_RECREATED = "context3DRecreated";
/**
 *
 */
Stage3DEvent.VIEWPORT_UPDATED = "viewportUpdated";
