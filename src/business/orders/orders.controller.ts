import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders() {
    // Lógica para obtener la lista de pedidos (con filtros opcionales)
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    // Lógica para obtener un pedido por ID
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() statusUpdate: { status: string },
  ) {
    // Lógica para actualizar el estado de un pedido (ej. 'confirmado', 'en_preparacion', 'enviado', 'entregado', 'cancelado')
    return this.ordersService.updateStatus(id, statusUpdate.status);
  }
}
