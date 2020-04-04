import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, FormControl, Validators } from '@angular/forms';
import { Endereco } from '../model/endereco';
import { Router } from '@angular/router';
import { BuscaCepService } from './buscacep.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-buscacep',
  templateUrl: './buscacep.component.html',
  styleUrls: ['./buscacep.component.css']
})
export class BuscacepComponent implements OnInit {
  cepForm = new FormGroup({
    cep: new FormControl(),
    uf: new FormControl(),
    localidade: new FormControl(),
    bairro: new FormControl(),
    logradouro: new FormControl(),
    complemento: new FormControl(),
    ibge: new FormControl()
  });
  endereco: Endereco;



  constructor(private formBuild: FormBuilder, private rota: Router, private serviceCep: BuscaCepService) {
    this.endereco = new Endereco();

    // notifica qualquer acao que ocorra  serviceCep, fazendo com endereco recebe os dados recebido da notificacao
    this.serviceCep.dadosCep.subscribe(data => {
      // console.log(data);
      this.endereco = data;
      // console.log(this.endereco);
    });
  }

  buscar() {


    this.endereco.cep = this.endereco.cep.replace(/\D/g, '');

    if (this.endereco.cep != null && this.endereco.cep !== '') {

      // expresao regular para cep
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(this.endereco.cep)) {
        this.serviceCep.getCep(this.endereco);
      } else {
        alert('CEP INVÁLIDO');
        this.cepForm.reset();
      }
    }

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
