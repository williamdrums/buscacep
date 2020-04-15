import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Endereco } from '../model/endereco';
import { Router } from '@angular/router';
import { BuscaCepService } from './buscacep.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-buscacep',
  templateUrl: './buscacep.component.html',
  styleUrls: ['./buscacep.component.css']
})
export class BuscacepComponent implements OnInit {

  cepForm = new FormGroup({
    cep: new FormControl('', Validators.pattern('^[0-9]{8}$')),
    uf: new FormControl(),
    localidade: new FormControl(),
    bairro: new FormControl(),
    logradouro: new FormControl(),
    complemento: new FormControl(),
    ibge: new FormControl()
  });
  endereco: Endereco;
  matcher = new MyErrorStateMatcher(); // interface de erro



  constructor(private formBuild: FormBuilder, private rota: Router, private serviceCep: BuscaCepService) {
    this.endereco = new Endereco();

    this.serviceCep.dadosCep.subscribe(data => {
      // console.log(data);
      this.endereco = data;
      // console.log(this.endereco);
    });
  }

  buscar() {

    // recebe somente os digitos
    this.endereco.cep = this.endereco.cep.replace(/\D/g, '');

    // if (this.endereco.cep != null && this.endereco.cep !== '') {

    //   // expresao regular para validar cep
    //   const validacep = /^[0-9]{8}$/;

    //   if (validacep.test(this.endereco.cep)) {

    this.serviceCep.getCep(this.endereco);

    //     // console.log('CEP'+this.endereco.cep);

    //   } else {
    //     this.cepForm.reset();
    //     alert('CEP INVÁLIDO');
    //   }
    // }

  }

  cancelar() {
    this.cepForm.reset();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.cepForm.value);
  }

}
