import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../model/encuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestaService } from '../service/encuesta.service';
import { Observable } from "rxjs";
import { MarcaService } from "../service/marca.service";
import { Marca } from "../model/marca";

@Component({
  selector: 'app-update-encuesta',
  templateUrl: './update-encuesta.component.html',
  styleUrls: ['./update-encuesta.component.css']
})
export class UpdateEncuestaComponent implements OnInit {

  id!: number;
  encuesta!: Encuesta;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private encuestaService: EncuestaService, private marcaService: MarcaService) { }

  ngOnInit() {
    this.encuesta = new Encuesta();
	this.submitted = false;

    this.id = this.route.snapshot.params['id'];
    
    this.encuestaService.getEncuesta(this.id)
      .subscribe(data => {
        console.log(data)
        this.encuesta = data;
      }, error => console.log(error));

	this.reloadData();
  }

  updateEncuesta() {
    this.encuestaService.updateEncuesta(this.id, this.encuesta)
      .subscribe(data => console.log(data), error => console.log(error));
    this.encuesta = new Encuesta();
//    this.gotoList();
  }

  onSubmit() {
	this.submitted = true;
    this.updateEncuesta();    
  }

  gotoList() {
    this.router.navigate(['/encuestas']);
  }

  marcas!: Observable<Marca[]>;

  reloadData() {
    this.marcas = this.marcaService.getMarcasList();
  }

}
