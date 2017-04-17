let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { MultiString } from 'pip-services-commons-node';

import { ITipsClientV1 } from '../../src/version1/ITipsClientV1';
import { PartyReferenceV1 } from '../../src/version1/PartyReferenceV1';
import { TipV1 } from '../../src/version1/TipV1';

let TIP1 = <TipV1>{
    id: '1',
    topics: ['maintenance'],
    creator: <PartyReferenceV1>{
        id: '1',
        name: 'Test User'
    },
    title: <MultiString>{ en: 'Tip 1' },
    content: <MultiString>{ en: 'Sample Tip #1' }
};
let TIP2 = <TipV1>{
    id: '2',
    tags: ['TAG 1'],
    topics: ['maintenance'],
    creator: <PartyReferenceV1>{
        id: '1',
        name: 'Test User'
    },
    title: <MultiString>{ en: 'Tip 2' },
    content: <MultiString>{ en: 'Sample Tip #2' }
};

export class TipsClientFixtureV1 {
    private _client: ITipsClientV1;
    
    constructor(client: ITipsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let tip1, tip2;

        async.series([
        // Create one tip
            (callback) => {
                this._client.createTip(
                    null,
                    TIP1,
                    (err, tip) => {
                        assert.isNull(err);
                        
                        assert.isObject(tip);
                        assert.sameMembers(tip.topics, TIP1.topics);
                        assert.equal(tip.content.en, TIP1.content.en);

                        tip1 = tip;

                        callback();
                    }
                );
            },
        // Create another tip
            (callback) => {
                this._client.createTip(
                    null,
                    TIP2,
                    (err, tip) => {
                        assert.isNull(err);
                        
                        assert.isObject(tip);
                        assert.sameMembers(tip.topics, TIP2.topics);
                        assert.equal(tip.content.en, TIP2.content.en);

                        tip2 = tip;

                        callback();
                    }
                );
            },
        // Get all tips
            (callback) => {
                this._client.getTips(
                    null, null, null,
                    (err, page) => {
                        assert.isNull(err);
                        
                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
        // Update the tip
            (callback) => {
                tip1.content = <MultiString>{ en: 'Updated Content 1' };

                this._client.updateTip(
                    null,
                    tip1,
                    (err, tip) => {
                        assert.isNull(err);
                        
                        assert.isObject(tip);
                        assert.equal(tip.content.en, 'Updated Content 1');
                        assert.sameMembers(tip.topics, TIP1.topics);

                        tip1 = tip;

                        callback();
                    }
                );
            },
        // Delete tip
            (callback) => {
                this._client.deleteTipById(
                    null, tip1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete tip
            (callback) => {
                this._client.getTipById(
                    null, tip1.id,
                    (err, tip) => {
                        assert.isNull(err);
                        
                        assert.isNull(tip || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
