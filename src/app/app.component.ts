import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './app/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,FormsModule]
})


export class AppComponent {
 
  product: Product = {id: 101, name: "Phone", price: 30000}

  products:Product[] = [
                      {id:102, name:"Laptop", price:50000},
                      {id:103, name:"Computer", price:100000},
                      {id:104, name:"Keybord", price:3000},
                      {id:105, name:"Mouse", price:1000},
  ]

  addProduct()
  {
    this.products.push({...this.product})
  }

  deleteProduct(id:number)
  {
    this.products= this.products.filter(p=>p.id!=id)
  }
}