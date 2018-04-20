import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.setBackground();
  }

  setBackground(){
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-blue');

  }

}
