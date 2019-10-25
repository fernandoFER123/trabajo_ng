import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EgresadosService } from '../services/egresados.service';


@Component({
  selector: 'app-egresados-index',
  templateUrl: './egresados-index.component.html',
  styleUrls: ['./egresados-index.component.css']
})
export class EgresadosIndexComponent implements OnInit {

  list;
    constructor(
      private route: ActivatedRoute,
      private egresadosService: EgresadosService,
    ) {
      this.getList();
    }
    ngOnInit() {
      this.getList()
    }
    private getList() {
      this.egresadosService.getList().subscribe(response => {
        this.list=response;
      });
    }
    delete(id) {
      console.log("delete:"+id);
      this.egresadosService.delete(id).subscribe(response => {
        console.log("de = " + JSON.stringify(response));
        this.getList();
      });
    }
  }



