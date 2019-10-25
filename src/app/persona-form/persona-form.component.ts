import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {
  personaForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private personaService: PersonaService,
  ) {
  }
  ngOnInit() {
    this.personaForm = this.formBuild.group({
      id: [''],
        nombre: ['', [Validators.required]],
        apellidoP: ['', [Validators.required]],
        apellidoM: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        email: ['', [Validators.required]],
        egresadoID:'',
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.personaService.getById(id).subscribe(response => {
        this.personaForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.personaForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.personaService.update(id, this.personaForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.personaService.add(this.personaForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/personaindex']);
  }

}

