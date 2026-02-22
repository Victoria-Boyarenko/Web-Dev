import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { Product } from './models/product.model';
import { ProductsData } from './data/products';
import { CategoriesData } from './data/categories';
import { Category } from './models/category.model';
 

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
  products: Product[] = ProductsData;
  categories: Category[]=CategoriesData;

  selectedCategoryId: number | null = null;

  selectCategory (id: number): void {
    this.selectedCategoryId = id;
  }

  filteredProducts (): Product[] {

    if (this.selectedCategoryId === null){
       return [];
    }
   
    return this.products.filter (
      (p: Product) => p.categoryId === this.selectedCategoryId
  );
}

handleLike (id: number): void{
  const item = this.products.find(p=> p.id === id);
  if(item){
    item.likes =item.likes +1;
  }
}

handleDelete (id: number): void {
  const ok = confirm ('Are you sure?');
  if(!ok){
    return;
  }

  this.products = this.products.filter (p  =>p.id !== id);
}
}
