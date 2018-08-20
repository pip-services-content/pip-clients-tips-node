"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_components_node_1 = require("pip-services-components-node");
const TipsDirectClientV1_1 = require("../version1/TipsDirectClientV1");
const TipsHttpClientV1_1 = require("../version1/TipsHttpClientV1");
const TipsSenecaClientV1_1 = require("../version1/TipsSenecaClientV1");
class TipsClientFactory extends pip_services_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(TipsClientFactory.DirectClientV1Descriptor, TipsDirectClientV1_1.TipsDirectClientV1);
        this.registerAsType(TipsClientFactory.HttpClientV1Descriptor, TipsHttpClientV1_1.TipsHttpClientV1);
        this.registerAsType(TipsClientFactory.SenecaClientV1Descriptor, TipsSenecaClientV1_1.TipsSenecaClientV1);
    }
}
TipsClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'factory', 'default', 'default', '1.0');
TipsClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'direct', 'default', '1.0');
TipsClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'http', 'default', '1.0');
TipsClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', 'seneca', 'default', '1.0');
exports.TipsClientFactory = TipsClientFactory;
//# sourceMappingURL=TipsClientFactory.js.map