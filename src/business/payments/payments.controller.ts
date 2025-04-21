import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ProcessPaymentDto } from './dto/process-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  processPayment(@Body() paymentData: ProcessPaymentDto) {
    // Lógica para procesar un pago (ej. con Stripe, PayPal, etc.)
    return this.paymentsService.process(paymentData);
  }

  @Get(':id')
  getPaymentStatus(@Param('id') id: string) {
    // Lógica para obtener el estado de un pago por ID
    return this.paymentsService.getStatus(id);
  }
}
