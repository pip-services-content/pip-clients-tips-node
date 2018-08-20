"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_rpc_node_1 = require("pip-services-rpc-node");
class TipsHttpClientV1 extends pip_services_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/tips');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getTips(correlationId, filter, paging, callback) {
        this.callCommand('get_tips', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRandomTip(correlationId, filter, callback) {
        this.callCommand('get_random_tip', correlationId, {
            filter: filter
        }, callback);
    }
    getTipById(correlationId, tipId, callback) {
        this.callCommand('get_tip_by_id', correlationId, {
            tip_id: tipId
        }, callback);
    }
    createTip(correlationId, tip, callback) {
        this.callCommand('create_tip', correlationId, {
            tip: tip,
        }, callback);
    }
    updateTip(correlationId, tip, callback) {
        this.callCommand('update_tip', correlationId, {
            tip: tip,
        }, callback);
    }
    deleteTipById(correlationId, tipId, callback) {
        let timing = this.instrument(correlationId, 'tips.delete_tip_by_id');
        this.callCommand('delete_tip_by_id', correlationId, {
            tip_id: tipId
        }, callback);
    }
}
exports.TipsHttpClientV1 = TipsHttpClientV1;
//# sourceMappingURL=TipsHttpClientV1.js.map