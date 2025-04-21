import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getMetrics() {
    // Aquí iría la lógica para obtener las métricas reales de la base de datos
    return {
      totalSales: 1500.75,
      newOrders: 25,
      activeUsers: 120,
      criticalAlerts: 2,
    };
  }
}
