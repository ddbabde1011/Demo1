import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  products = [
    {value: 'steak-0', viewValue: 'JAVA'},
    {value: 'pizza-1', viewValue: 'ANGULAR'},
    {value: 'tacos-2', viewValue: 'PYTHON'}
  ];

  constructor(private fb:FormBuilder) { }
   
  addproductForm: FormGroup = this.fb.group({
    UserEmail: ['', [Validators.required, Validators.email]],
    Phone: ['', [Validators.required, Validators.minLength(6)]],
    Product:['', Validators.required],
    
  })

  ngOnInit(): void {
  }
  onAddProduct() {
    console.log("Product Added");
    if (this.addproductForm.invalid) {
      return;
    }
    console.log(this.addproductForm.value);
  }

}


