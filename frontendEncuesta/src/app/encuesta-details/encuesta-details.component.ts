import { Encuesta } from '../model/encuesta';
import { Component, OnInit, Input } from '@angular/core';
import { EncuestaService } from '../service/encuesta.service';
import { EncuestaListComponent } from '../encuesta-list/encuesta-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encuesta-details',
  templateUrl: './encuesta-details.component.html',
  styleUrls: ['./encuesta-details.component.css']
})
export class EncuestaDetailsComponent implements OnInit {

  id!: number;
  encuesta!: Encuesta;

  constructor(private route: ActivatedRoute,private router: Router,
    private encuestaService: EncuestaService) { }

  ngOnInit() {
    this.encuesta = new Encuesta();

    this.id = this.route.snapshot.params['id'];
    
    this.encuestaService.getEncuesta(this.id)
      .subscribe(data => {
        console.log(data)
        this.encuesta = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['encuestas']);
  }
}
