import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent{

  formContact:any;

  maxlengthNombre: number = 40;
  maxlengthMensaje: number = 80;

  constructor(private fb: FormBuilder){
    this.formContact = this.fb.group({
      nombre: [
        '', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(40)
      ]
      ],
      email: [
        '',[
        Validators.required,
        Validators.email
        ]
      ],
      mensaje : [
        '',
        [
        Validators.required,
        Validators.maxLength(80)
        ]
      ]
    })
  }

  onSubmit() {
    if (this.formContact.valid) {
      console.log('Formulario enviado:', this.formContact.value);
      // Aquí puedes manejar la lógica para enviar el formulario
    } else {
      console.log('Formulario inválido');
    }
  }

  largoNombre(){
    return this.formContact.get('nombre').value.length || 0;
  }

  largoMensaje(){
    return this.formContact.get('mensaje').value.length || 0;
  }
}
