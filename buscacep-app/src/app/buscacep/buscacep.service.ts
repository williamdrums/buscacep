import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Endereco } from '../model/endereco';





@Injectable({
    providedIn: 'root'
})
export class BuscaCepService {
    url: string = environment.apiUrl;
    dadosCep: EventEmitter<any> = new EventEmitter<any>();
    endereco: Endereco;


    constructor(private http: HttpClient, private routes: Router) {
        this.endereco = new Endereco();
    }

    public getCep(endereco: Endereco) {

        this.http.get(this.url + 'getcep/' + endereco.cep).subscribe(data => {

            this.dadosCep.emit(data);

        });
    }
}
