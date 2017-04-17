"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
//import { ITipsBusinessLogic } from 'pip-services-tips-node';
class TipsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-tips", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getTips(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'tips.get_tips');
        this._controller.getTips(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getRandomTip(correlationId, filter, callback) {
        let timing = this.instrument(correlationId, 'tips.get_random_tip');
        this._controller.getTips(correlationId, filter, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }
    getTipById(correlationId, tipId, callback) {
        let timing = this.instrument(correlationId, 'tips.get_tip_by_id');
        this._controller.getTipById(correlationId, tipId, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }
    createTip(correlationId, tip, callback) {
        let timing = this.instrument(correlationId, 'tips.create_tip');
        this._controller.createTip(correlationId, tip, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }
    updateTip(correlationId, tip, callback) {
        let timing = this.instrument(correlationId, 'tips.update_tip');
        this._controller.updateTip(correlationId, tip, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }
    deleteTipById(correlationId, tipId, callback) {
        let timing = this.instrument(correlationId, 'tips.delete_tip_by_id');
        this._controller.deleteTipById(correlationId, tipId, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }
}
exports.TipsDirectClientV1 = TipsDirectClientV1;
//# sourceMappingURL=AnnouncementsDirectClientV1.js.map