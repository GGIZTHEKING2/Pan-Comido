import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class CatalogService {
  create(productData: CreateProductDto) {
    console.log('Creating product:', productData);
    // Lógica para crear producto en la base de datos
    return { message: 'Product created successfully', data: productData };
  }

  findAll() {
    console.log('Finding all products');
    // Lógica para obtener todos los productos de la base de datos
    return [
      { id: '1', name: 'Sample Product 1' },
      { id: '2', name: 'Sample Product 2' },
    ];
  }

  findOne(id: string) {
    console.log(`Finding product with id: ${id}`);
    // Lógica para obtener un producto por ID de la base de datos
    return { id: id, name: `Sample Product ${id}` };
  }

  update(id: string, updateData: UpdateProductDto) {
    console.log(`Updating product with id: ${id}`, updateData);
    // Lógica para actualizar producto en la base de datos
    return { message: `Product ${id} updated successfully`, data: updateData };
  }

  remove(id: string) {
    console.log(`Removing product with id: ${id}`);
    // Lógica para eliminar producto de la base de datos
    return { message: `Product ${id} removed successfully` };
  }
}
