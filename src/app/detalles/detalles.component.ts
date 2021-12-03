import { Component, OnInit } from '@angular/core';
import {DatospersonalesService} from "../servicios/datospersonales.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
datoS: any = {};
  constructor(private ruta: ActivatedRoute, private serviciodatos: DatospersonalesService) {
    this.datoS = this.serviciodatos.recuperadatos();
    this.ruta.params.subscribe(params =>{
      this.datoS=this.serviciodatos.recuperadatosid(params.id);
      console.log(params.id);
    })
  }

  ngOnInit(): void {
  }
  /*recuperaruta (id:number ){
    this.ruta.navigate((['/detalles',id]));
    console.log(id);
  }*/
}
