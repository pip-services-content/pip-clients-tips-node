let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { TipsMemoryPersistence } from 'pip-services-tips-node';
import { TipsController } from 'pip-services-tips-node';
import { ITipsClientV1 } from '../../src/version1/ITipsClientV1';
import { TipsDirectClientV1 } from '../../src/version1/TipsDirectClientV1';
import { TipsClientFixtureV1 } from './TipsClientFixtureV1';

suite('TipsDirectClientV1', ()=> {
    let client: TipsDirectClientV1;
    let fixture: TipsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new TipsMemoryPersistence();
        let controller = new TipsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-tips', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-tips', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new TipsDirectClientV1();
        client.setReferences(references);

        fixture = new TipsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
