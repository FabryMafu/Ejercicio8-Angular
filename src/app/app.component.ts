import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio8';
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Datos del formulario:', this.usuario);
    } else {
      alert('Ingrese los datos correctos en los campos');
    }
  }
}
