import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/cammon/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produst-list',
  templateUrl: './produst-list-table.component.html',
  styleUrls: ['./produst-list.component.css']
})

export class ProdustListComponent implements OnInit{
  products:Product[]=[];

constructor(private productServices:ProductService){} 

ngOnInit(): void {
this.listProducts();    
}

listProducts()
{
  this.productServices.getProductList().subscribe(
    (data)=>{this.products=data;}
    )
    
}
}
