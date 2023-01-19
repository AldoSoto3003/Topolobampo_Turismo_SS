
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { emailInterface } from 'src/app/interfaces/email.interface';
import { resp } from '../../interfaces/resp.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  focus: any;
  focus1: any;
  datos: FormGroup;

  url: string = 'https://email-server-node-js.vercel.app/envio';

  datosEmail: emailInterface = {
    email: '',
    asunto:'',
    mensaje:''
  }

  resp: resp

  constructor(private _httpClient: HttpClient) { 
    
  }

  ngOnInit(): void {
  }

  envioCorreo(){
    let params = {
      email: 'topolobamposs@gmail.com',
      asunto:this.datosEmail.asunto,
      mensaje: this.datosEmail.mensaje + this.datosEmail.email
    };

    if((params.asunto == "") && (params.mensaje="")){
      this.showModalenvioFallido();
    }else{
      this._httpClient.post(this.url,params).subscribe(resp=>{
        this.showModalenvioExitoso();
      });
    };


    (<HTMLInputElement>document.getElementById("email")).value = '';
    (<HTMLInputElement>document.getElementById("asunto")).value = '';
    (<HTMLInputElement>document.getElementById("mensaje")).value = '';
    
  }

  showModalenvioExitoso(){
    Swal.fire({
      icon: 'success',
      title: 'Exitoso',
      text: 'Se ha enviado con exito su correo!!',
      background: "#f2eee3",
    })
  }

  showModalenvioFallido(){
    Swal.fire({
      icon: 'error',
      title: 'Fallido',
      text: 'No se ha enviado su correo, TODOS los campos son obligatorios',
      background: "#f2eee3",
    })
  }
}


