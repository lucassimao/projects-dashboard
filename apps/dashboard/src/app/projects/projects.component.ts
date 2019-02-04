import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
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
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  deleteProject(project) {
    this.projectsService
      .delete(project)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

  getProjects(): void {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (project.id) this.updateProject(project);
    else this.createProject(project);

  }

  createProject(project) {
    this.projectsService.create(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project) {
    this.projectsService.update(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }
}
