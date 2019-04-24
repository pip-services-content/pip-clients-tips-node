import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { TipV1 } from './TipV1';
import { PartyReferenceV1 } from './PartyReferenceV1';
import { ITipsClientV1 } from './ITipsClientV1';

export class TipsLambdaClientV1 extends CommandableLambdaClient implements ITipsClientV1 {

    constructor(config?: any) {
        super('tips');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
       
    public getTips(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<TipV1>) => void): void {
        this.callCommand(
            'get_tips',
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRandomTip(correlationId: string, filter: FilterParams,
        callback: (err: any, tip: TipV1) => void): void {
        this.callCommand(
            'get_random_tip',
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }

    public getTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void {
        this.callCommand(
            'get_tip_by_id',
            correlationId,
            {
                tip_id: tipId
            }, 
            callback
        );
    }

    public createTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void {
        this.callCommand(
            'create_tip',
            correlationId,
            {
                tip: tip,
            }, 
            callback
        );
    }

    public updateTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void {
        this.callCommand(
            'update_tip',
            correlationId,
            {
                tip: tip,
            }, 
            callback
        );
    }

    public deleteTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.delete_tip_by_id');
        this.callCommand(
            'delete_tip_by_id',
            correlationId,
            {
                tip_id: tipId
            }, 
            callback
        );
    }

}
