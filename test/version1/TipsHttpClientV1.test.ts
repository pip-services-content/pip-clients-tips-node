let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { TipsMemoryPersistence } from 'pip-services-tips-node';
import { TipsController } from 'pip-services-tips-node';
import { TipsHttpServiceV1 } from 'pip-services-tips-node';
import { ITipsClientV1 } from '../../src/version1/ITipsClientV1';
import { TipsHttpClientV1 } from '../../src/version1/TipsHttpClientV1';
import { TipsClientFixtureV1 } from './TipsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('TipsHttpClientV1', ()=> {
    let service: TipsHttpServiceV1;
    let client: TipsHttpClientV1;
    let fixture: TipsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new TipsMemoryPersistence();
        let controller = new TipsController();

        service = new TipsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-tips', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-tips', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-tips', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new TipsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new TipsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
