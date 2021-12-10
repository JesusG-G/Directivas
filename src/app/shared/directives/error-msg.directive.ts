import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement:ElementRef<HTMLElement>;
  @Input() color:string='red';
  @Input() mensaje!:string;

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement=el;
   }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();
  }
  setColor(){
    this.htmlElement.nativeElement.style.color=this.color;
  }
  setMensaje(){
    this.htmlElement.nativeElement.innerHTML=this.mensaje;
  }

  setClass(){
    this,this.htmlElement.nativeElement.classList.add('form-text');
  }
}
