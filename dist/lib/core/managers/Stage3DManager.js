import { Stage3DProxy } from "./Stage3DProxy";
import { StageManager as AwayStageManager } from "@awayjs/stage";
var Stage3DManager = (function () {
    function Stage3DManager(stage, Stage3DManagerSingletonEnforcer) {
        //todo:any is Stage3DManagerSingletonEnforcer
        //if (!Stage3DManagerSingletonEnforcer)
        //	throw new Error("This class is a multiton and cannot be instantiated manually. Use Stage3DManager.getInstance instead.");
        this._stage = stage;
        if (!Stage3DManager._stageProxies)
            Stage3DManager._stageProxies = [];
    }
    Stage3DManager.getInstance = function (stage) {
        if (Stage3DManager._instances[stage] == null) {
            Stage3DManager._instances[stage] = new Stage3DManager(stage, null);
        }
        return Stage3DManager._instances[stage];
    };
    Stage3DManager.prototype.getFreeStage3DProxy = function (forceSoftware, profile) {
        //console.log("getFreeStage3DProxy not implemented yet in Stage3DManager");
        if (forceSoftware === void 0) { forceSoftware = false; }
        if (profile === void 0) { profile = "baseline"; }
        var awayStage = AwayStageManager.getInstance().getStageAt(0);
        if (awayStage.adaptee) {
            return awayStage.adaptee;
        }
        awayStage.adaptee = new Stage3DProxy(0, awayStage, this);
        return awayStage.adaptee;
    };
    Stage3DManager.prototype.getStage3DProxy = function (index, forceSoftware, profile) {
        if (forceSoftware === void 0) { forceSoftware = false; }
        if (profile === void 0) { profile = "baseline"; }
        var awayStage = AwayStageManager.getInstance().getStageAt(index);
        if (awayStage.adaptee) {
            return awayStage.adaptee;
        }
        awayStage.adaptee = new Stage3DProxy(0, awayStage, this);
        return awayStage.adaptee;
    };
    return Stage3DManager;
}());
export { Stage3DManager };
Stage3DManager._instances = {};
Stage3DManager._numStageProxies = 0;
Stage3DManager._stageProxies = [];
