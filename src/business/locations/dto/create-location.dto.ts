import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Nombre de la sucursal

  @IsString()
  @IsNotEmpty()
  address: string; // Dirección completa

  @IsPhoneNumber('MX') // Valida número de teléfono para México
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  operatingHours?: string; // Ej. "L-V 9am-6pm, S 10am-2pm"
}
