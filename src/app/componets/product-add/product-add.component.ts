import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],


})
export class ProductAddComponent implements OnInit {

  productFormGroup!:FormGroup;
 //ajouter submitted pour vérification des champs
 // submitted:boolean=false;

  constructor(private fb:FormBuilder,private productsService:ProductsService,private  router:Router) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
     name:["",Validators.required],
      quantite:[0,Validators.required],
      prix:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],

    });


  }
  public onSaveProduct(){

    //ajouter submitted et if pour vérification des champs
    //this.submitted=true;
    //if(this.productFormGroup?.valid)return;
    this.productsService.SaveProducts(this.productFormGroup.value).subscribe(data=>{
      alert("Success Saving product ! ");

    });
    this.router.navigateByUrl("/products?name_like="+this.productFormGroup.value.id)

  }

}
