import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentsModel } from '../models/studens.model';
const API_URL_CHARACTERS="http://hp-api.herokuapp.com/api/characters"
const API_URL_STUDENTS ="http://hp-api.herokuapp.com/api/characters/students";
const API_URL_STAFF="http://hp-api.herokuapp.com/api/characters/staff";
const API_URL_HOUSE="http://hp-api.herokuapp.com/api/characters/house/";
@Injectable({
  providedIn: 'root'
})
export class HarryPotterServiceService {
solicitudes: any=[];
  constructor(private http: HttpClient
    ) { }


    getAllCharacters(){
      return this.http.get( API_URL_CHARACTERS);
    }

    getAllStudens(): Observable<studentsModel>{
      return this.http.get<studentsModel>( API_URL_STUDENTS);
    }
    
    getAllStaf(){
      return this.http.get( API_URL_STAFF);
    }
    getHouse(houseName: string){
      return this.http.get( API_URL_HOUSE
        +houseName);
    }
setSolicitudes(solicitud){
  this.solicitudes=solicitud;
}
getSolicitudes(){
  return this.solicitudes;
}
}
