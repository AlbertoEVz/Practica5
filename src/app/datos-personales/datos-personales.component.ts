import { Component, OnInit } from '@angular/core';
import {DatospersonalesService} from "../servicios/datospersonales.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {
  /*datos: any [] = [
    {
      nombre: 'hombre2',
      foto: './assets/hombre2.jpg',
      grado: 'ingenieria'
    },
    {
      nombre: 'mujer',
      foto: './assets/mujer.jpg',
      grado: 'licenciada'
    },
    {
      nombre: 'mujer2',
      foto: './assets/mujer2.jpg',
      grado: 'ingenieria'
    },
    {
      nombre: 'mujer3',
      foto: './assets/mujer3.jpg',
      grado: 'profesora'
    },
    {
      nombre: 'hombre',
      foto: './assets/hombre.jpg',
      grado: 'profesor'
    }
  ];*/
  datoS: any  = {};
  constructor(private serviciodatos: DatospersonalesService) {
    /*this.ruta.params.subscribe(params => {
      console.log(params.id)
    })*/
    this.datoS = serviciodatos.recuperadatos();
  }

  ngOnInit(): void {
  }


}
