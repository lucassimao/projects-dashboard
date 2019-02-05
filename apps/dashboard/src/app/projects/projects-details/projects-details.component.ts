import { Component, OnInit, Input, EventEmitter,Output, ViewChild } from '@angular/core';
import { Project } from '@workshop/core-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @ViewChild("projectForm") projectForm : NgForm;
  currentProject: Project;
  originalTitle: string;

  constructor() {}

  @Input() set project(value : Project){
    this.projectForm.resetForm();
    if(value){
        this.originalTitle = value.title;
    }
    this.currentProject = Object.assign({},value);
  }


  ngOnInit() {}
}
