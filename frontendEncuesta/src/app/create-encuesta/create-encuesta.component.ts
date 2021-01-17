import { EncuestaService } from '../service/encuesta.service';
import { Encuesta } from '../model/encuesta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { MarcaService } from "../service/marca.service";
import { Marca } from "../model/marca";

@Component({
  selector: 'app-create-encuesta',
  templateUrl: './create-encuesta.component.html',
  styleUrls: ['./create-encuesta.component.css']
})
export class CreateEncuestaComponent implements OnInit {

  encuesta: Encuesta = new Encuesta();
  submitted = false;

  constructor(private encuestaService: EncuestaService, private marcaService: MarcaService,
    private router: Router) { }


  ngOnInit() {
	this.reloadData();
  }

  newEncuesta(): void {
    this.submitted = false;
    this.encuesta = new Encuesta();
  }

  save() {
	this.encuesta.fechaRespuesta = new Date();
    this.encuestaService.createEncuesta(this.encuesta)
      .subscribe(data => console.log(data), error => console.log(error));

    this.encuesta = new Encuesta();
//    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/encuestas']);
  }

  marcas!: Observable<Marca[]>;

  reloadData() {
    this.marcas = this.marcaService.getMarcasList();
  }
}
