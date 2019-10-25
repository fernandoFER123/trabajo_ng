import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EgresadosService } from '../services/egresados.service';


@Component({
  selector: 'app-egresados-form',
  templateUrl: './egresados-form.component.html',
  styleUrls: ['./egresados-form.component.css']
})
export class EgresadosFormComponent implements OnInit {
  egresadosForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private egresadosService: EgresadosService,
  ) {
  }
  ngOnInit() {
    this.egresadosForm = this.formBuild.group({
      id: [''],
      nombre_egresado: ['', [Validators.required]],
      apellido_paterno: ['', [Validators.required]],
      apellido_materno: ['', [Validators.required]],
      numero_telefono: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      codigo_universitario: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      fecha_ingreso: ['', [Validators.required]],
      fecha_egreso: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    //get data
    let egresadoID = this.route.snapshot.paramMap.get('id');
    if (egresadoID != null) {
      console.log(egresadoID)
      this.egresadosService.getById(egresadoID).subscribe(response => {
        this.egresadosForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.egresadosForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.egresadosService.update(id, this.egresadosForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.egresadosService.add(this.egresadosForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/egresadosindex']);
  }

}
