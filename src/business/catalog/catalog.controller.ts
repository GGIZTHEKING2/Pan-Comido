import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    // Lógica para crear un producto
    return this.catalogService.create(productData);
  }

  @Get()
  getProducts() {
    // Lógica para obtener todos los productos
    return this.catalogService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    // Lógica para obtener un producto por ID
    return this.catalogService.findOne(id);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    // Lógica para actualizar un producto
    return this.catalogService.update(id, updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    // Lógica para eliminar un producto
    return this.catalogService.remove(id);
  }
}
