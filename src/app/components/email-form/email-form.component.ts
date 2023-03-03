import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailInterface } from 'src/app/interfaces/email.interface';
import { resp } from 'src/app/interfaces/resp.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  sendEmailForm: FormGroup;

  focus: any;
  focus1: any;
  resp: resp
  url: string = 'https://email-server-node-js.vercel.app/envio';

  datosEmail: emailInterface = {
    email: '',
    asunto:'',
    mensaje:''
  }
  
  
  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      comentarios: new FormControl('')
    });
  }


  constructor(private _httpClient: HttpClient) { 
    
  }

  onSubmit(form:FormGroup){
    console.log(form.valid)

  }

  envioCorreo(){
    let params = {
      email: 'topolobamposs@gmail.com',
      asunto:this.datosEmail.asunto,
      mensaje: this.datosEmail.mensaje + this.datosEmail.email
    };

    if((params.asunto == "") || (params.mensaje="")){
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
