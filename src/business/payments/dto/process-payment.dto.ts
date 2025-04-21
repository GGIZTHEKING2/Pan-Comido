import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class ProcessPaymentDto {
  @IsString()
  @IsNotEmpty()
  orderId: string; // ID del pedido asociado al pago

  @IsNumber()
  @Min(0.01) // Asumiendo que el monto mínimo es 0.01
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string; // Ej. 'MXN', 'USD'

  @IsString()
  @IsNotEmpty()
  paymentMethodId: string; // ID del método de pago (ej. token de tarjeta, ID de PayPal)

  @IsString()
  @IsOptional()
  customerId?: string; // ID del cliente (si aplica)
}
