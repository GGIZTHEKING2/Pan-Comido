import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogModule } from './catalog/catalog.module';
import { OrdersModule } from './orders/orders.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { PaymentsModule } from './payments/payments.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [DashboardModule, CatalogModule, OrdersModule, AnalyticsModule, PaymentsModule, LocationsModule]
})
export class BusinessModule {}
