import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {
  datoS: any [] = [
    {
      id: '1',
      nombre: 'hombre2',
      foto: './assets/hombre2.jpg',
      grado: 'ingenieria'
    },
    {
      id: '2',
      nombre: 'mujer',
      foto: './assets/mujer.jpg',
      grado: 'licenciada'
    },
    {
      id: '3',
      nombre: 'mujer2',
      foto: './assets/mujer2.jpg',
      grado: 'ingenieria'
    },
    {
      id: '4',
      nombre: 'mujer3',
      foto: './assets/mujer3.jpg',
      grado: 'profesora'
    },
    {
      id: '5',
      nombre: 'hombre',
      foto: './assets/hombre.jpg',
      grado: 'profesor'
    }
  ];
  constructor() { }
  recuperadatos(): any{
    return this.datoS;
  }
  recuperadatosid (i:number): any{
    return this.datoS [(i-1)];
  }
}
