import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    // Lógica para crear una nueva ubicación/sucursal
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  getLocations() {
    // Lógica para obtener todas las ubicaciones
    return this.locationsService.findAll();
  }

  @Get(':id')
  getLocationById(@Param('id') id: string) {
    // Lógica para obtener una ubicación por ID
    return this.locationsService.findOne(id);
  }

  @Put(':id')
  updateLocation(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    // Lógica para actualizar una ubicación
    return this.locationsService.update(id, updateLocationDto);
  }

  @Delete(':id')
  deleteLocation(@Param('id') id: string) {
    // Lógica para eliminar una ubicación
    return this.locationsService.remove(id);
  }
}
