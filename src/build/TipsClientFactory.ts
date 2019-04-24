import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { TipsDirectClientV1 } from '../version1/TipsDirectClientV1';
import { TipsHttpClientV1 } from '../version1/TipsHttpClientV1';

export class TipsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-tips', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-tips', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-tips', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(TipsClientFactory.DirectClientV1Descriptor, TipsDirectClientV1);
		this.registerAsType(TipsClientFactory.HttpClientV1Descriptor, TipsHttpClientV1);
	}
	
}
