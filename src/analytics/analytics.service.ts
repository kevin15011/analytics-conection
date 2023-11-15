import { Injectable } from '@nestjs/common';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

@Injectable()
export class AnalyticsService {
    constructor (){}

    async getByDimension(updateAllDailyDto) {
        const service = new BetaAnalyticsDataClient;
        const propertyId = '289672711';
        const [response] = await service.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: 'today',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'sessionDefaultChannelGroup',
                }
            ],
            metrics: [ 
                {
                    name: 'sessions',
                }
            ],
        })

        return response;
    }
}
