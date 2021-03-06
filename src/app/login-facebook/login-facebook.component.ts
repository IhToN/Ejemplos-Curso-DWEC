import { Component, OnInit } from '@angular/core';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';


@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.css'],
  providers: [FacebookService]
})
export class LoginFacebookComponent implements OnInit {
  nombreUsuario:string;
  constructor(private fb: FacebookService) { 

    this.nombreUsuario="Anonimo";
let fbParams: FacebookInitParams = {
                                   appId: '203991593407329',
                                   xfbml: true,
                                   version: 'v2.6'
                                   };
    this.fb.init(fbParams);
       this.fb.login().then(
      (response: FacebookLoginResponse) => this.logueadoEnFacebook(response),
      (error: any) => console.error(error)
    );
  }

logueadoEnFacebook(response)
{
  console.log("entra en logueado");
  this.fb.api('/me').then( (result)=>{
          console.log(result);
          this.nombreUsuario=result.name;
        });
}
  ngOnInit() {
  }

}
