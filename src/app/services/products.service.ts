import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({providedIn: 'root'})
export class ProductsService {

 host=environment.host;

 constructor(private http: HttpClient) { }


 getAllProducts():Observable<Product[]>{

  return this.http.get<Product[]>(this.host+"/products");
 }
 getSelectedProducts():Observable<Product[]>{

  return this.http.get<Product[]>(this.host+"/products?selected=true");
 }
 getAvailablProducts():Observable<Product[]>{

  return this.http.get<Product[]>(this.host+"/products?available=true");
 }

 getSearchProducts(keyword:string):Observable<Product[]>{

  return this.http.get<Product[]>(this.host+"/products?name_like="+keyword);
 }

 SelectProducts(product:Product):Observable<Product>{

  product.selected=!product.selected;
  return this.http.put<Product>(this.host+"/products/"+product.id,product);
 }

  DeletedProducts(product:Product):Observable<void>{

  product.selected=!product.selected;
  return this.http.delete<void>(this.host+"/products/"+product.id);
 }

 SaveProducts(product:Product):Observable<Product>{

  return this.http.post<Product>(this.host+"/products",product);
 }

 getProducts(id:Number):Observable<Product>{

   return this.http.get<Product>(this.host+"/products/"+id);
  }

  updateProduct(product:Product):Observable<Product>{

    return this.http.put<Product>(this.host+"/products/"+product.id,product);
   }

}
