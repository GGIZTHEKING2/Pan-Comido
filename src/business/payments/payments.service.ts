import { Injectable } from '@nestjs/common';
import { ProcessPaymentDto } from './dto/process-payment.dto';

@Injectable()
export class PaymentsService {
  process(paymentData: ProcessPaymentDto) {
    console.log('Processing payment:', paymentData);
    // Lógica para interactuar con la pasarela de pago
    const transactionId = `txn_${Date.now()}`;
    return {
      status: 'success',
      transactionId: transactionId,
      amount: paymentData.amount,
    };
  }

  getStatus(id: string) {
    console.log(`Getting status for payment id: ${id}`);
    // Lógica para consultar el estado del pago en la pasarela o base de datos
    return { id: id, status: 'completed', timestamp: new Date().toISOString() };
  }
}
