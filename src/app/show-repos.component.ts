import { Component, OnInit } from '@angular/core';
import { ReposService } from './repos.service';

@Component({
  selector: 'app-show-repos',
  templateUrl: './show-repos.component.html',
  styleUrls: ['./show-repos.component.css'],
  providers: [ ReposService ]
})
export class ShowReposComponent implements OnInit {

  constructor( private rs: ReposService) { }

  ngOnInit() {
  }

  show(){
      return 'Muestra 1';
  }

  show2(){
    return 'Muestra 2';
  }
}
