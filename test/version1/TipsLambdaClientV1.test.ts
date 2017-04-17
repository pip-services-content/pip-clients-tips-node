import { YamlConfigReader } from 'pip-services-commons-node';
import { TipsClientFixtureV1 } from './TipsClientFixtureV1';
import { TipsLambdaClientV1 } from '../../src/version1/TipsLambdaClientV1';

suite('TipsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: TipsLambdaClientV1;
    let fixture: TipsClientFixtureV1;

    setup((done) => {
        client = new TipsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new TipsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});