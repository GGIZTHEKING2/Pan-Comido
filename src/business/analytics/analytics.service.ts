import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getSales(period: string) {
    console.log(`Getting sales data for period: ${period}`);
    // Lógica para obtener datos de ventas de la base de datos según el período
    return { period: period, totalSales: 1234.56, numberOfOrders: 42 };
  }

  getTrends(metric: string) {
    console.log(`Getting trends data for metric: ${metric}`);
    // Lógica para obtener datos de tendencias de la base de datos según la métrica
    if (metric === 'popular_products') {
      return {
        metric: metric,
        data: [
          { productId: 'prod1', salesCount: 100 },
          { productId: 'prod2', salesCount: 85 },
        ],
      };
    }
    return { metric: metric, data: 'Sample trend data' };
  }
}
