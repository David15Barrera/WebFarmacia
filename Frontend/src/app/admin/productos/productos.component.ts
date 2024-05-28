import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      image: 'assets/product1.jpg', // Ajusta la ruta de la imagen según corresponda
      precio: 'Q10'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      image: 'assets/product2.jpg',
      precio: 'Q20'
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 2',
      image: 'assets/product2.jpg',
      precio: 'Q10'
    },
    {
      name: 'Producto 4',
      description: 'Descripción del producto 2',
      image: 'assets/product2.jpg',
      precio: 'Q15'
    }
    // Agrega más productos según sea necesario
  ];
  
  filteredProducts = [...this.products];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  }

  addToCart(product: any): void {
    console.log('Producto agregado al carrito:', product);
    // Lógica para agregar el producto al carrito
  }

  verifyProduct(product: any): void {
    console.log('Verificar producto:', product);
    // Lógica para verificar el producto
  }
}
