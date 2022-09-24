import { assertPlatform, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId:number;
  productFormGroup?:FormGroup;


  constructor(activatedRoute:ActivatedRoute,
    private productservice:ProductsService, private fb:FormBuilder,private router:Router) {
    this.productId=activatedRoute.snapshot.params['id'];


  }

  ngOnInit(): void {
    this.productservice.getProducts(this.productId).subscribe(product=>{
      this.productFormGroup=this.fb.group({
        id:[product.id,Validators.required],
        name:[product.name,Validators.required],
        prix:[product.prix,Validators.required],
        quantite:[product.quantite,Validators.required],
        selected:[product.selected,Validators.required],
        available:[product.available,Validators.required],

      })

    })

  }

  onUpdate(){this.productservice.updateProduct(this.productFormGroup?.value).subscribe(data=>{
    alert("Success Product Updated");

    this.router.navigateByUrl("/products")
  });


  }

}
