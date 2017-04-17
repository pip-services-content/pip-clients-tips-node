import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { TipV1 } from './TipV1';
import { PartyReferenceV1 } from './PartyReferenceV1';
import { ITipsClientV1 } from './ITipsClientV1';
//import { ITipsBusinessLogic } from 'pip-services-tips-node';

export class TipsDirectClientV1 extends DirectClient<any> implements ITipsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-tips", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getTips(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<TipV1>) => void): void {
        let timing = this.instrument(correlationId, 'tips.get_tips');
        this._controller.getTips(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getRandomTip(correlationId: string, filter: FilterParams,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.get_random_tip');
        this._controller.getTips(correlationId, filter, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }

    public getTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.get_tip_by_id');
        this._controller.getTipById(correlationId, tipId, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }

    public createTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.create_tip');
        this._controller.createTip(correlationId, tip, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }

    public updateTip(correlationId: string, tip: TipV1,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.update_tip');
        this._controller.updateTip(correlationId, tip, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }

    public deleteTipById(correlationId: string, tipId: string,
        callback: (err: any, tip: TipV1) => void): void {
        let timing = this.instrument(correlationId, 'tips.delete_tip_by_id');
        this._controller.deleteTipById(correlationId, tipId, (err, tip) => {
            timing.endTiming();
            callback(err, tip);
        });
    }

}