import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        let userLogged = '';
        console.log('Valores del Formulario ', this.loginForm.value);
        if (this.loginForm.valid || !this.loginForm.valid) {
            if (this.loginForm.value.email === 'test.com' && this.loginForm.value.password === '123456') {
                userLogged = 'login_valid';
            } else {
                userLogged = 'login_invalid';
            }
            console.log('Respuesta:', userLogged);
        }
        return userLogged;
    }

}
