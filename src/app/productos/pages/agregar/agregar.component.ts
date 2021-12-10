import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  
  formulario:FormGroup=this.fb.group(
    {
      nombre:['',[Validators.required]]
    }
  );
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  tieneError(campo:string):boolean{
    return this.formulario.get('nombre')?.invalid||false;
  }
}
