import { Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  modalRef?: BsModalRef;
  form: FormGroup;
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])),
      dni: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(9)])),
      cellphone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.maxLength(50)])),
    });
  }
 
  markAllAsTouched() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  openModal(template: TemplateRef<any>) {
    this.markAllAsTouched();
    if (this.form.valid) {
      this.modalRef = this.modalService.show(template);
    }
  }
  
}
