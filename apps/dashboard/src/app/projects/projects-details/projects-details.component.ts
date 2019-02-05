import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  currentProject: Project;
  originalTitle: string;

  constructor() {}

  @Input() set project(value : Project){
      if(value){
          this.originalTitle = value.title;
      }
      this.currentProject = Object.assign({},value);
  }


  ngOnInit() {}
}
