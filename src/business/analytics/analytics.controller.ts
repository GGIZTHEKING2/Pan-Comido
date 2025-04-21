import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('sales')
  getSalesData(@Query('period') period: string) {
    // Lógica para obtener datos de ventas (ej. 'daily', 'weekly', 'monthly')
    return this.analyticsService.getSales(period);
  }

  @Get('trends')
  getTrendsData(@Query('metric') metric: string) {
    // Lógica para obtener datos de tendencias (ej. 'popular_products', 'peak_hours')
    return this.analyticsService.getTrends(metric);
  }
}
