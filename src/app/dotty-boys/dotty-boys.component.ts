import { Component, OnInit } from '@angular/core';
import { DottyNames } from '../dotty-boys/dotty-names';

@Component({
  selector: 'app-dotty-boys',
  templateUrl: './dotty-boys.component.html',
  styleUrls: ['./dotty-boys.component.scss']
})
export class DottyBoysComponent implements OnInit {

  constructor() { }

  name : DottyNames = {
    id : 1,
    fName: 'Reggie',
    lName: 'Basinal',
    position: 'Front End Developer'
  }

  ngOnInit() {
  }

}
