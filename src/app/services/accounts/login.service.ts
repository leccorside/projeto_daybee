import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { switchMap, take, map } from 'rxjs/operators';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api: any = "https://api.daybee.com.br/accounts/";
  api_perfil: any = "https://api.daybee.com.br/";

  public datastorage: any;

  constructor(
    private http: HttpClient,
    private plt: Platform,
    private storage: Storage,
    private router: Router
    ) { 

      this.storage.get('session_storage').then((res_storage)=>{
        this.datastorage = res_storage;

        if(this.datastorage.accessToken != null){
          var tokenatual1 = this.datastorage.accessToken;
        }
        
        console.log('TOKEN SERVICE: '+tokenatual1);
        
      });

  }

  cadastro(
    name: string, 
    phone: null,
    photo: null,
    email: string,
    password: string
    ){
    return new Promise((resolve, reject) => {
      var data = {
        name: name,
        phone: phone,
        photo: photo,
        email: email,
        password: password
      };

      this.http.post(this.api + 'signup', data)
      .subscribe((request: any) => {
        resolve(request.data);
      });
    });
  }

  postCadastro(usuario){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Origin': '*'
  });
  let options = {
     headers: headers 
  }

  let postData =  {
    "name": usuario.name,
    "phone": usuario.phone,
    "photo": usuario.photo,
    "email": usuario.email,
    "password": usuario.password
  }

  return this.http.post(this.api + "signup", JSON.stringify(postData), options).map(res => res);
  }

  postLogin(usuario){
    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Origin': '*'
    });
    let options = {
       headers: headers 
    }

    let postData =  {
      "email": usuario.email,
      "password": usuario.password
    }

    return this.http.post(this.api + "signin", JSON.stringify(postData), options).map(res => res);

  }

  postRecupera(usuario){
    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Origin': '*'
    });
    let options = {
       headers: headers 
    }

    let postData =  {
      "email": usuario.email
    }

    return this.http.post(this.api + "forgot-password", JSON.stringify(postData), options).map(res => res);

  }

  RedefinirSenha(usuario){
    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Origin': '*'
    });
    let options = {
       headers: headers 
    }

    let postData =  {
      "code": usuario.code,
      "password": usuario.password
    }

    return this.http.post(this.api + "reset-password", JSON.stringify(postData), options).map(res => res);

  }

  postPerfil(){
    var token111 = this.datastorage.accessToken;

    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token111
    });
    let options = {
       headers: headers 
    }

    console.log('TOKEN SERVICE 2: '+token111);

    return this.http.get(this.api_perfil).map(res => res);

  }

  postData(body, file){


    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + this.datastorage.accessToken
    });
    let options = {
       headers: headers 
    }

    return this.http.get(this.api_perfil + file, options)
    .timeout(59000) //59 segundos de timeout
    .map(res => res);
  }

  cadastroQueridinho(usuario){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Origin': '*'
  });
  let options = {
     headers: headers 
  }

  let postData =  {
    "name": usuario.name,
    "phone": usuario.phone,
    "photo": usuario.photo,
    "email": usuario.email,
    "password": usuario.password
  }

  return this.http.post(this.api + "signup", JSON.stringify(postData), options).map(res => res);
  }

  getQueri(){


    var token111 = this.datastorage.accessToken;

    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token111
    });
    let options = {
       headers: headers 
    }

    console.log('TOKEN SERVICE 2: '+token111);

    return this.http.get(this.api_perfil).map(res => res);
  }


}
