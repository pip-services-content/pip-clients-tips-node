"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const TipsDirectClientV1_1 = require("../version1/TipsDirectClientV1");
const TipsHttpClientV1_1 = require("../version1/TipsHttpClientV1");
const TipsSenecaClientV1_1 = require("../version1/TipsSenecaClientV1");
class TipsFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(TipsFactory.DirectClientV1Descriptor, TipsDirectClientV1_1.TipsDirectClientV1);
        this.registerAsType(TipsFactory.HttpClientV1Descriptor, TipsHttpClientV1_1.TipsHttpClientV1);
        this.registerAsType(TipsFactory.SenecaClientV1Descriptor, TipsSenecaClientV1_1.TipsSenecaClientV1);
    }
}
TipsFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'factory', 'default', 'default', '1.0');
TipsFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'direct', 'default', '1.0');
TipsFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'http', 'default', '1.0');
TipsFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'seneca', 'default', '1.0');
exports.TipsFactory = TipsFactory;
//# sourceMappingURL=TipsFactory.js.map