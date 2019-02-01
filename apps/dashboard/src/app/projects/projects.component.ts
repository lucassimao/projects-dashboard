import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { resultMemoize } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  selectedProject: Project;
  projects$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
      this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  deleteProject(project){
      this.projectsService.delete(project)
            .subscribe(result => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }

  getProjects(): void {
      this.projects$ = this.projectsService.all();
  }
}
