import { EncuestaDetailsComponent } from './../encuesta-details/encuesta-details.component';
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestaService } from "../service/encuesta.service";
import { Encuesta } from "../model/encuesta";
import { Component, OnInit } from "@angular/core";
//import { Router } from '@angular/router';

@Component({
  selector: "app-encuesta-list",
  templateUrl: "./encuesta-list.component.html",
  styleUrls: ["./encuesta-list.component.css"]
})
export class EncuestaListComponent implements OnInit {
  encuestas!: Observable<Encuesta[]>;

  constructor(private router: Router, private encuestaService: EncuestaService ){} 


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.encuestas = this.encuestaService.getEncuestasList();
  }

  deleteEncuesta(id: number) {
    this.encuestaService.deleteEncuesta(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  encuestaDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEncuesta(id: number){
    this.router.navigate(['update', id]);
  }
}
