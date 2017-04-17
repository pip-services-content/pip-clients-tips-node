import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { IGetter } from 'pip-services-data-node';

import { PartyReferenceV1 } from './PartyReferenceV1';
import { TipV1 } from './TipV1';

export interface ITipsClientV1 {
    getTips(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<TipV1>) => void): void;

    getRandomTip(correlationId: string, filter: FilterParams,
        callback: (err: any, tip: TipV1) => void): void;

    getTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void;

    createTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void;

    updateTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void;

    deleteTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void;
}
