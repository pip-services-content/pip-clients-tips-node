import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { TipV1 } from './TipV1';
import { ITipsClientV1 } from './ITipsClientV1';
export declare class TipsLambdaClientV1 extends CommandableLambdaClient implements ITipsClientV1 {
    constructor(config?: any);
    getTips(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<TipV1>) => void): void;
    getRandomTip(correlationId: string, filter: FilterParams, callback: (err: any, tip: TipV1) => void): void;
    getTipById(correlationId: string, tipId: string, callback: (err: any, tip: TipV1) => void): void;
    createTip(correlationId: string, tip: TipV1, callback: (err: any, tip: TipV1) => void): void;
    updateTip(correlationId: string, tip: TipV1, callback: (err: any, tip: TipV1) => void): void;
    deleteTipById(correlationId: string, tipId: string, callback: (err: any, tip: TipV1) => void): void;
}
