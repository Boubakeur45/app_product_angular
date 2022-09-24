import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products:Product[]|null=null ;
  // autre solution en utilsant observable et $ et '| async 'sur html
   //products$:Observable<Product[]> |null=null;

  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }

  public onGetAllProducts(){

    this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
      //this.products$=this.productsService.getAllProducts();
    })

  }
  public onGetSelectedProducts(){

    this.productsService.getSelectedProducts().subscribe(data=>{
      this.products=data;

  })
}
public onGetAvaibleProducts(){

  this.productsService.getAvailablProducts().subscribe(data=>{
    this.products=data;

})
}

public onSearch(data:any){

  this.productsService.getSearchProducts(data.keyword).subscribe(data=>{
    this.products=data;

})
}
public onSelect(p:Product){

this.productsService.SelectProducts(p).subscribe(data=>{
  p.selected=data.selected;
})
}

public onDelet(p:Product){
  let v=confirm("Etes vous sur ?");
  if(v==true)
  this.productsService.DeletedProducts(p).subscribe(data=>{
    this.onGetAllProducts();
  })

}
public onNewProducts(){
  this.router.navigateByUrl("/product-add")

}
public onEdit(p:Product){
  this.router.navigateByUrl("/product-edit/"+p.id);

}

}



