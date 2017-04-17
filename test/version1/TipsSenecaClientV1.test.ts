let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { TipsMemoryPersistence } from 'pip-services-tips-node';
import { TipsController } from 'pip-services-tips-node';
import { TipsSenecaServiceV1 } from 'pip-services-tips-node';
import { ITipsClientV1 } from '../../src/version1/ITipsClientV1';
import { TipsSenecaClientV1 } from '../../src/version1/TipsSenecaClientV1';
import { TipsClientFixtureV1 } from './TipsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('TipsSenecaClient', () => {
    let service: TipsSenecaServiceV1;
    let client: TipsSenecaClientV1;
    let fixture: TipsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new TipsMemoryPersistence();
        let controller = new TipsController();

        service = new TipsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-tips', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-tips', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-tips', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new TipsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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
