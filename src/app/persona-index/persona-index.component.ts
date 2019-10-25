import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-index',
  templateUrl: './persona-index.component.html',
  styleUrls: ['./persona-index.component.css']
})
export class PersonaIndexComponent implements OnInit {
list;
  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.personaService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.personaService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
