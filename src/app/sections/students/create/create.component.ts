import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HarryPotterServiceService } from 'src/app/Service/harry-potter-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 isChecked:string="Sí";
  solicitudForm: FormGroup;
  solicitudes: any=[];
  constructor(private fb: FormBuilder, 
    private hpService: HarryPotterServiceService) { }

  ngOnInit(): void {
    this.solicitudControls();
  }

  solicitudControls(){
    this.solicitudForm= this.fb.group({
      mago: Validators.required,
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      fechaDeNacimiento: ['', Validators.required],
      imagen:['']

    });
  }
  esMago(isChecked: boolean){

    if(isChecked){
      this.isChecked="Sí";
    }
    else{
      this.isChecked="No";
    }
  }
  guardarSolicitud(){
    let solicitud={
      nombre: this.solicitudForm.value.nombre,
      genero:this.solicitudForm.value.genero,
      mago: this.isChecked,
      fechaNacimiento: this.solicitudForm.value.fechaDeNacimiento,
      imagen: this.solicitudForm.value.imagen,
    }
    this.solicitudes.push(solicitud);
    this.hpService.setSolicitudes(this.solicitudes);
  }

  
}
