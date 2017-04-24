import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { TipsDirectClientV1 } from '../version1/TipsDirectClientV1';
import { TipsHttpClientV1 } from '../version1/TipsHttpClientV1';
import { TipsSenecaClientV1 } from '../version1/TipsSenecaClientV1';

export class TipsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-tips', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-tips', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-tips', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-tips', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(TipsClientFactory.DirectClientV1Descriptor, TipsDirectClientV1);
		this.registerAsType(TipsClientFactory.HttpClientV1Descriptor, TipsHttpClientV1);
		this.registerAsType(TipsClientFactory.SenecaClientV1Descriptor, TipsSenecaClientV1);
	}
	
}
